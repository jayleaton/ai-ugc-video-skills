---
name: fal-seedance-video
description: Implement and operate fal.ai video generation for AI UGC clips, with Kling O3 Standard as the default cost-effective model and Seedance 2.0 as the higher-cost quality baseline. Use when generating or coding TikTok/Reels/Shorts videos with fal video models, choosing endpoints, setting aspect ratio/resolution/duration, uploading image references, submitting queue jobs, polling results, handling webhooks, or producing fal request payloads for AI UGC scene clips.
---

# fal Video Generation

Use this skill when Codex needs to generate or implement video clips with fal.ai video models. Default to Kling O3 Standard for cost-effective UGC tests, and use Seedance 2.0 when you need the higher-cost quality baseline.

Read `references/fal-seedance.md` when you need Seedance endpoint IDs, parameters, payload examples, or cost/resolution guidance. Read `references/fal-video-providers.md` when comparing Seedance against cheaper fal providers.

## Defaults for UGC ads

- Default provider: Kling O3 Standard image-to-video.
- Quality baseline provider: Seedance 2.0 image-to-video.
- Aspect ratio: use vertical `9:16` source images for Kling; set `aspect_ratio: "9:16"` for Seedance.
- Resolution: set `720p` for Seedance to control cost; Kling O3 Standard does not expose the same resolution field.
- Duration: `5` or `6` seconds for most UGC chunks; `10`, `11`, or `12` seconds for longer mechanism/payoff chunks when supported.
- Safety checker: leave enabled.
- Camera: keep subtle and realistic; avoid aggressive cinematic movement for talking-head UGC.

## Provider candidates

- Default cost-effective model: `fal-ai/kling-video/o3/standard/image-to-video`
- Higher-cost quality baseline: `bytedance/seedance-2.0/image-to-video`
- Low-cost visual-only exploration: `fal-ai/minimax/video-01/image-to-video`

## Workflow

1. Confirm an API key is available before running generation. For AutoVisuals UGC work, use `UGC_FAL_API_KEY` so creator/ad generation does not share app provider keys. For general projects, `FAL_KEY` or `FAL_API_KEY` are also supported.
2. Choose endpoint:
   - `fal-ai/kling-video/o3/standard/image-to-video` for default lower-cost image-to-video UGC tests with generated audio.
   - `bytedance/seedance-2.0/image-to-video` for higher-cost UGC clips from persona/reference images with generated synchronized audio.
   - `fal-ai/minimax/video-01/image-to-video` for cheap visual motion tests where native dialogue is not the focus.
   - `fal-ai/bytedance/seedance/v1/pro/fast/image-to-video` for older visual-only or legacy workflows.
   - `fal-ai/bytedance/seedance/v1/lite/image-to-video` for cheaper fast prototypes.
   - Text-to-video only when no reference image is required.
3. Upload local images with `fal.storage.upload` or provide public image URLs.
4. Submit each chunk as a separate request.
5. Store request IDs, prompt, input image, duration, resolution, aspect ratio, and output URL.
6. Review every output before stitching.
7. Regenerate only failed chunks; preserve working clip outputs.

## Local helper

Use `scripts/generate_fal_video_clip.mjs` for one-off local clip generation when the current project has `@fal-ai/client` available or can install it.

Example:

```bash
UGC_FAL_API_KEY=... node /Users/jjeaton/.codex/skills/fal-seedance-video/scripts/generate_fal_video_clip.mjs \
  --provider kling-o3-standard \
  --prompt-file /path/to/chunk-01-prompt.txt \
  --image /path/to/marc-reference.png \
  --duration 6 \
  --generate-audio true \
  --out-json /path/to/chunk-01-kling-result.json
```

If a project should own this permanently, copy the helper into the project and add `@fal-ai/client` as a project dependency rather than relying on the global skill path.

## Failure handling

- `422` client errors may be charged. Validate payloads before sending.
- If product/reference appears in a no-product scene, remove the asset mention entirely and regenerate.
- If voice pacing is too fast, increase duration or split the chunk.
- If voice pacing is too slow or identity drifts, shorten duration and regenerate.
- If hands/product deform, simplify the hand action and keep product stationary or out of frame.
- If face identity drifts, use image-to-video with a stronger reference frame and less camera movement.
