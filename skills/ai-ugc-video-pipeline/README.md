# AI UGC Video Pipeline

End-to-end workflow skill for turning a short ad brief into a realistic AI UGC video production package.

## What It Does

- Defines the ad strategy and awareness level.
- Coordinates script creation through `ugc-script-writing`.
- Prepares creator, product, and app reference rules.
- Builds universal direction blocks and chunk-level scene prompts.
- Sets cost-conscious generation defaults, with Kling O3 Standard as the default provider and Seedance 2.0 as the quality baseline.
- Defines clip review and regeneration rules before final assembly.

## Files

- `SKILL.md`: main skill instructions.
- `agents/openai.yaml`: display metadata for OpenAI/Codex-style skill UIs.

## Use It When

Use this skill when you want a complete UGC ad package from a brief: script, chunks, scene prompts, generation settings, review criteria, and assembly notes.

## Typical Handoff

This skill expects to work with:

- `ugc-script-writing` for hooks, scripts, chunking, and captions.
- `fal-seedance-video` for fal.ai Kling/Seedance clip generation.
