#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { basename, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const PROVIDERS = {
  "seedance-2": {
    endpoint: "bytedance/seedance-2.0/image-to-video",
    supportsAspectRatio: true,
    supportsResolution: true,
    supportsAudio: true,
    requiresImage: true,
    defaults: {
      aspectRatio: "9:16",
      resolution: "720p",
      duration: "6",
      generateAudio: true,
    },
  },
  "kling-o3-standard": {
    endpoint: "fal-ai/kling-video/o3/standard/image-to-video",
    supportsAspectRatio: false,
    supportsResolution: false,
    supportsAudio: true,
    requiresImage: true,
    defaults: {
      duration: "6",
      generateAudio: true,
    },
  },
  "minimax-video-01": {
    endpoint: "fal-ai/minimax/video-01/image-to-video",
    supportsAspectRatio: false,
    supportsResolution: false,
    supportsAudio: false,
    requiresImage: true,
    defaults: {
      duration: "6",
    },
  },
};

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args.set(key, "true");
    } else {
      args.set(key, next);
      index += 1;
    }
  }
  return args;
}

function usage() {
  return `Usage:
node generate_fal_video_clip.mjs --prompt-file prompt.txt --image image.png [options]

Options:
  --provider        seedance-2 | kling-o3-standard | minimax-video-01
                    Default: kling-o3-standard
  --endpoint        Override fal endpoint id.
  --image           Local start image path for image-to-video.
  --image-url       Public start image URL for image-to-video.
  --end-image       Local end image path, when supported.
  --end-image-url   Public end image URL, when supported.
  --aspect-ratio    Used by providers that support it. Default: 9:16 for Seedance.
  --resolution      Used by providers that support it. Default: 720p for Seedance.
  --duration        Clip duration in seconds. Default: 6.
  --generate-audio  true | false. Default depends on provider.
  --out-json        Write result metadata JSON to this path.

Examples:
  node generate_fal_video_clip.mjs --provider kling-o3-standard --prompt-file chunk-01.txt --image creator.png --duration 6 --generate-audio true --out-json chunk-01-kling.json
  node generate_fal_video_clip.mjs --provider seedance-2 --prompt-file chunk-01.txt --image creator.png --resolution 720p --duration 6 --generate-audio true --out-json chunk-01-seedance.json
`;
}

const args = parseArgs(process.argv.slice(2));

if (args.has("help") || !args.has("prompt-file")) {
  console.log(usage());
  process.exit(args.has("help") ? 0 : 1);
}

const providerName =
  args.get("provider") ?? process.env.UGC_FAL_VIDEO_PROVIDER ?? "kling-o3-standard";
const provider = PROVIDERS[providerName];

if (!provider && !args.has("endpoint")) {
  throw new Error(
    `Unknown provider "${providerName}". Use one of: ${Object.keys(PROVIDERS).join(", ")} or pass --endpoint.`,
  );
}

const falKey =
  process.env.UGC_FAL_API_KEY ?? process.env.FAL_KEY ?? process.env.FAL_API_KEY;

if (!falKey) {
  throw new Error("UGC_FAL_API_KEY, FAL_KEY, or FAL_API_KEY is required.");
}

async function importFalClient() {
  try {
    return await import("@fal-ai/client");
  } catch {
    const requireFromCwd = createRequire(`${process.cwd()}/package.json`);
    const resolved = requireFromCwd.resolve("@fal-ai/client");
    return import(pathToFileURL(resolved).href);
  }
}

async function uploadFile(fal, filePath) {
  const resolvedPath = resolve(filePath);
  const bytes = await readFile(resolvedPath);
  const file = new File([bytes], basename(resolvedPath));
  return fal.storage.upload(file);
}

const { fal } = await importFalClient().catch((error) => {
  throw new Error(
    `Could not import @fal-ai/client. Install it in the current project first. ${error.message}`,
  );
});

fal.config({ credentials: falKey });

const endpoint = args.get("endpoint") ?? provider.endpoint;
const prompt = await readFile(resolve(args.get("prompt-file")), "utf8");

let imageUrl = args.get("image-url");
if (!imageUrl && args.has("image")) {
  imageUrl = await uploadFile(fal, args.get("image"));
}

let endImageUrl = args.get("end-image-url");
if (!endImageUrl && args.has("end-image")) {
  endImageUrl = await uploadFile(fal, args.get("end-image"));
}

if ((provider?.requiresImage ?? endpoint.includes("image-to-video")) && !imageUrl) {
  throw new Error("--image or --image-url is required for image-to-video.");
}

const input = {
  prompt,
  duration: args.get("duration") ?? provider?.defaults.duration ?? "6",
};

if (imageUrl) input.image_url = imageUrl;
if (endImageUrl) input.end_image_url = endImageUrl;

if (provider?.supportsAspectRatio || args.has("aspect-ratio")) {
  input.aspect_ratio =
    args.get("aspect-ratio") ?? provider?.defaults.aspectRatio ?? "9:16";
}

if (provider?.supportsResolution || args.has("resolution")) {
  input.resolution =
    args.get("resolution") ?? provider?.defaults.resolution ?? "720p";
}

if (provider?.supportsAudio || args.has("generate-audio")) {
  input.generate_audio =
    args.has("generate-audio")
      ? args.get("generate-audio") !== "false"
      : provider?.defaults.generateAudio;
}

const result = await fal.subscribe(endpoint, {
  input,
  logs: true,
  onQueueUpdate(update) {
    if (update.status === "IN_PROGRESS") {
      update.logs?.map((log) => log.message).forEach(console.error);
    }
  },
});

const payload = {
  provider: providerName,
  endpoint,
  input,
  requestId: result.requestId,
  videoUrl: result.data?.video?.url ?? result.video?.url,
  raw: result,
};

if (args.has("out-json")) {
  await writeFile(
    resolve(args.get("out-json")),
    JSON.stringify(payload, null, 2),
  );
} else {
  console.log(JSON.stringify(payload, null, 2));
}
