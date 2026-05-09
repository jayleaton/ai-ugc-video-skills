# fal Seedance Video

Generation skill for creating short-form AI video clips through fal.ai Seedance.

## What It Does

- Chooses the correct Seedance endpoint for image-to-video or text-to-video generation.
- Keeps short-form ad defaults cost-conscious: `9:16`, `720p`, short chunk durations.
- Stores request IDs, prompts, input settings, output URLs, and metadata.
- Provides regeneration guidance for pacing, voice drift, face drift, bad hands, and unwanted product appearances.
- Includes a helper script for one-off local generation.

## Files

- `SKILL.md`: main skill instructions.
- `references/fal-seedance.md`: endpoint and payload reference.
- `scripts/generate_seedance_clip.mjs`: local fal.ai generation helper.
- `agents/openai.yaml`: display metadata for OpenAI/Codex-style skill UIs.

## Local Generation

Copy `.env.example` to `.env`, add `UGC_FAL_API_KEY`, then run the helper from a project with `@fal-ai/client` installed.

Example:

```bash
node skills/fal-seedance-video/scripts/generate_seedance_clip.mjs \
  --endpoint bytedance/seedance-2.0/image-to-video \
  --prompt-file ./prompts/chunk-01.txt \
  --image ./assets/creator-reference.png \
  --aspect-ratio 9:16 \
  --resolution 720p \
  --duration 6 \
  --generate-audio true \
  --out-json ./generated/chunk-01.json
```
