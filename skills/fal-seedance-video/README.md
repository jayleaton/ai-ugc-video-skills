# fal Video Generation

Generation skill for creating short-form AI video clips through fal.ai video models. Kling O3 Standard is the default cost-effective model; Seedance 2.0 is the higher-cost quality baseline.

## What It Does

- Chooses the correct fal video endpoint for image-to-video or text-to-video generation.
- Keeps short-form ad defaults cost-conscious: Kling O3 Standard first, vertical source images, short chunk durations, and Seedance at `9:16`/`720p` when used.
- Stores request IDs, prompts, input settings, output URLs, and metadata.
- Provides regeneration guidance for pacing, voice drift, face drift, bad hands, and unwanted product appearances.
- Includes helper scripts for one-off local generation and provider comparison.

## Files

- `SKILL.md`: main skill instructions.
- `references/fal-seedance.md`: endpoint and payload reference.
- `references/fal-video-providers.md`: provider comparison notes for Seedance, Kling O3 Standard, MiniMax, and Luma.
- `scripts/generate_fal_video_clip.mjs`: provider-aware local fal.ai generation helper.
- `scripts/generate_seedance_clip.mjs`: legacy Seedance-focused local helper.
- `agents/openai.yaml`: display metadata for OpenAI/Codex-style skill UIs.

## Local Generation

Copy `.env.example` to `.env`, add `UGC_FAL_API_KEY`, then run the helper from a project with `@fal-ai/client` installed.

Example:

```bash
node skills/fal-seedance-video/scripts/generate_fal_video_clip.mjs \
  --provider kling-o3-standard \
  --prompt-file ./prompts/chunk-01.txt \
  --image ./assets/creator-reference.png \
  --duration 6 \
  --generate-audio true \
  --out-json ./generated/chunk-01-kling.json
```
