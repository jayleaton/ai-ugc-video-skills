# fal Seedance Reference

Verified against fal docs on 2026-05-08.

## Main endpoints

- Seedance 2.0 image-to-video with synchronized audio: `bytedance/seedance-2.0/image-to-video`
- Seedance 2.0 reference-to-video: `bytedance/seedance-2.0/fast/reference-to-video`

- Pro Fast image-to-video: `fal-ai/bytedance/seedance/v1/pro/fast/image-to-video`
- Pro Fast text-to-video: `fal-ai/bytedance/seedance/v1/pro/fast/text-to-video`
- Lite image-to-video: `fal-ai/bytedance/seedance/v1/lite/image-to-video`
- Lite text-to-video: `fal-ai/bytedance/seedance/v1/lite/text-to-video`

## Parameters

Seedance 2.0 image-to-video:

- `prompt`: required string.
- `image_url`: required URL.
- `resolution`: `480p`, `720p`, or `1080p`. Default `1080p`.
- `duration`: `auto` or string seconds from `4` through `15`.
- `aspect_ratio`: `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16`, or `auto`. Default `auto`.
- `generate_audio`: boolean. Default `true`; supports synchronized speech, sound effects, and ambient sound.
- `seed`: integer, use `-1` for random.

Seedance 1.0 Pro Fast image-to-video:

- `prompt`: required string.
- `image_url`: required URL.
- `aspect_ratio`: `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16`, or `auto`. Default `auto`.
- `resolution`: `480p`, `720p`, or `1080p`. Default `1080p`.
- `duration`: string seconds from `2` through `12`. Default `5`.
- `camera_fixed`: boolean, default `false`.
- `enable_safety_checker`: boolean, default `true`.

Lite:

- Use for rapid social prototypes and cheaper iteration.
- Common public docs show `aspect_ratio` as `16:9`, `9:16`, or `1:1`.
- Common public docs show `duration` as `5` or `10`.
- Use `image_url` for image-to-video. Supported image formats include jpg, jpeg, png, webp, gif, and avif.

## JavaScript subscribe shape

```ts
import { fal } from "@fal-ai/client";

fal.config({
  credentials:
    process.env.UGC_FAL_API_KEY ??
    process.env.FAL_KEY ??
    process.env.FAL_API_KEY,
});

const result = await fal.subscribe("bytedance/seedance-2.0/image-to-video", {
  input: {
    prompt,
    image_url: imageUrl,
    aspect_ratio: "9:16",
    resolution: "720p",
    duration: "6",
    generate_audio: true,
  },
  logs: true,
  onQueueUpdate(update) {
    if (update.status === "IN_PROGRESS") {
      update.logs?.map((log) => log.message).forEach(console.log);
    }
  },
});

console.log(result.data.video.url);
console.log(result.requestId);
```

## Queue shape

Use queue submission for production workflows, batch chunks, or webhook-based completion.

```ts
const { request_id } = await fal.queue.submit(endpoint, {
  input,
  webhookUrl,
});

const status = await fal.queue.status(endpoint, {
  requestId: request_id,
  logs: true,
});

const result = await fal.queue.result(endpoint, {
  requestId: request_id,
});
```

## UGC ad defaults

Use:

```json
{
  "aspect_ratio": "9:16",
  "resolution": "720p",
  "duration": "6",
  "generate_audio": true
}
```

Only use `1080p` when the user explicitly prioritizes quality over iteration cost.

## Source links

- https://fal.ai/docs/model-api-reference/video-generation-api/bytedance-seedance-v1-pro-fast
- https://fal.ai/docs/model-api-reference/video-generation-api/bytedance-seedance-v1-lite
- https://fal.ai/models/bytedance/seedance-2.0/image-to-video/api
