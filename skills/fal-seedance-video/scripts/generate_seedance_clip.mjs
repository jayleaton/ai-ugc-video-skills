#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { basename, resolve } from "node:path";
import { pathToFileURL } from "node:url";

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
node generate_seedance_clip.mjs --prompt-file prompt.txt [--image image.png | --image-url https://...] [options]

Options:
  --endpoint       fal endpoint id. Default: bytedance/seedance-2.0/image-to-video
  --aspect-ratio  Default: 9:16
  --resolution    Default: 720p
  --duration      Default: 6
  --out-json      Write result metadata JSON to this path.
`;
}

const args = parseArgs(process.argv.slice(2));

if (args.has("help") || !args.has("prompt-file")) {
  console.log(usage());
  process.exit(args.has("help") ? 0 : 1);
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

const { fal } = await importFalClient().catch((error) => {
  throw new Error(
    `Could not import @fal-ai/client. Install it in the current project first. ${error.message}`,
  );
});

fal.config({ credentials: falKey });

const endpoint =
  args.get("endpoint") ?? "bytedance/seedance-2.0/image-to-video";
const prompt = await readFile(resolve(args.get("prompt-file")), "utf8");

let imageUrl = args.get("image-url");
if (!imageUrl && args.has("image")) {
  const imagePath = resolve(args.get("image"));
  const bytes = await readFile(imagePath);
  const file = new File([bytes], basename(imagePath));
  imageUrl = await fal.storage.upload(file);
}

const input = {
  prompt,
  aspect_ratio: args.get("aspect-ratio") ?? "9:16",
  resolution: args.get("resolution") ?? "720p",
  duration: args.get("duration") ?? "6",
};

if (!endpoint.includes("seedance-2.0")) {
  input.camera_fixed = args.get("camera-fixed") === "true";
  input.enable_safety_checker = args.get("enable-safety-checker") !== "false";
}

if (args.has("generate-audio")) {
  input.generate_audio = args.get("generate-audio") !== "false";
}

if (endpoint.includes("image-to-video")) {
  if (!imageUrl) {
    throw new Error("--image or --image-url is required for image-to-video.");
  }
  input.image_url = imageUrl;
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
