# AI UGC Video Skills

Reusable Codex skills and docs for producing realistic AI UGC ads with script writing, scene chunking, and fal.ai Seedance generation.

This repo is intentionally documentation-first. It does not commit generated creator assets, product images, MP4 outputs, audio files, or editor exports. Clone it fresh, add your own `.env`, references, and outputs locally, then keep the reusable skill logic in git.

## Included Skills

- [`ai-ugc-video-pipeline`](skills/ai-ugc-video-pipeline/README.md): end-to-end workflow for turning an ad brief into a chunked AI UGC production plan.
- [`ugc-script-writing`](skills/ugc-script-writing/README.md): script frameworks, viral hooks, chunking rules, captions, and review checks.
- [`fal-seedance-video`](skills/fal-seedance-video/README.md): fal.ai Seedance defaults, payload guidance, local helper script, and generation failure handling.

## Fresh Clone Setup

1. Clone the repo.
2. Copy `.env.example` to `.env` if you want to run fal.ai generation locally.
3. Add your own creator references, product images, and generated videos locally. They are ignored by git.
4. Have your AI generate the skill files for you based on `/skills`. I like to use these as global skills with assets in each project.

## Recommended Workflow

1. Create an AI UGC creator or content creator package. Define the creator's backstory, personality, voice, visual identity, wardrobe, environments, and reference asset prompts.
2. Store creator notes in `content-creators/`, while keeping generated images and videos local to your active project.
3. Use `ugc-script-writing` to choose a viral hook, write the voiceover, and split the ad into chunks.
4. Use `ai-ugc-video-pipeline` to package the creator lock, universal direction block, scene prompts, and review plan.
5. Use `fal-seedance-video` to generate each chunk separately at `9:16`, `720p`.
6. Review clips one by one, regenerate weak scenes only, then assemble in your editor.

## Repository Policy

The `.gitignore` blocks common asset formats including MP4, MOV, PNG, JPG, WEBP, MP3, WAV, editor project exports, and local output folders. This keeps the public repo small and lets each user work with their own local assets.

If a future example genuinely needs a tiny tracked media fixture, add a narrow exception in `.gitignore` and document why.
