---
name: ai-ugc-video-pipeline
description: End-to-end AI UGC ad production workflow for realistic AI creator videos. Use when a user wants Codex to turn a short ad brief into UGC video assets, coordinate UGC script writing, prepare creator/product references, create chunked scene prompts, set fal video generation settings, review clip failures, plan regenerations, and assemble TikTok/Reels/Shorts-ready ads.
---

# AI UGC Video Pipeline

Use this skill to run the transcript-derived workflow for realistic AI UGC ads: prepare references, write a natural script, split it into controllable clips, generate/review/regenerate clips, then produce an edit-ready assembly plan.

## Required inputs

Collect only what is missing:

- Product/app name and landing page or product summary.
- Offer or CTA.
- Target viewer and awareness level.
- Format: `mid-funnel punchy` or `full-stack`.
- Creator persona or reference package. For AutoVisuals, prefer `@imagen/ugc-influencers` and `marcHalePersona`.
- Product/app image assets or screenshots.
- Desired aspect ratio, usually `9:16`.
- Video generator target: default to fal Kling O3 Standard for cost-effective tests when available, with Seedance 2.0 as the higher-cost quality baseline.

If the user gives a brief and the repo already has persona/product assets, proceed using those assets.

## Skill handoffs

- Use `$ugc-script-writing` for the script, hook framework, voiceover, chunking, captions, and natural UGC language.
- Use `$fal-seedance-video` for fal endpoint choices, request payloads, queue execution, clip generation, and output validation.
- Use project persona data when available before inventing a new creator.

## Workflow

1. Define the ad strategy.
   - Pick `mid-funnel punchy` for cheaper 18-22s warm-audience ads.
   - Pick `full-stack` for 28-32s education-led cold-audience ads.
   - Choose one viewer pain, one mechanism/reframe, one soft CTA.
2. Prepare source assets.
   - Creator: use one high-quality consistent avatar/reference image.
   - Product/app: use a clean isolated product image, app screenshot, or app demo frame.
   - Remove references from scene prompts when a chunk says the asset should not appear.
3. Build the script with `$ugc-script-writing`.
   - Require conversational voiceover that sounds spoken, not written.
   - Require chunked output with estimated runtime, scene direction, product inclusion, and continuity notes.
4. Create universal prompt blocks.
   - Character lock: identical creator identity and wardrobe continuity.
   - Product/app lock: exact asset name and when it is allowed to appear.
   - UGC realism: natural camera, off-camera phone unless selfie is required, hand gestures, imperfect-but-believable creator delivery.
   - B-roll sequencing: no product/app reveal before voiceover names it.
5. Generate clip prompts.
   - Each chunk gets one clip prompt.
   - Paste universal blocks into every clip.
   - Replace only the chunk voiceover, framing, runtime, and asset-inclusion line.
   - Keep each clip independently regenerable.
6. Generate clips with `$fal-seedance-video`.
   - Default provider for TikTok/Reels tests: Kling O3 Standard image-to-video with audio on.
   - Seedance fallback/baseline: `aspect_ratio: "9:16"`, `resolution: "720p"`.
   - Prefer short 5-6s chunks unless the line needs more space.
   - Use 10-12s only for longer mechanism or payoff chunks.
7. Review each clip.
   - Keep: natural voice, stable face, matching persona, no unwanted product/app asset, acceptable hand motion.
   - Regenerate: voice changes sharply, product appears when omitted, lip sync is distracting, face drifts, pacing is unusably fast/slow, or hands/product deform badly.
   - First try runtime adjustment before rewriting a good scene.
8. Assembly plan.
   - Order clips by chunk number.
   - Note any speed changes such as 90% for fast lines.
   - Add simple captions: readable sans/classic style, white text with dark outline, raised above platform UI.
   - Add light music only if it helps mask small voice differences.

## Output shape

When asked to produce an ad package, create:

```text
Ad name:
Format:
Target viewer:
Hook framework:
Runtime target:
Creator/persona:
Source assets:

Full voiceover:

Universal direction block:

Chunks:
1. Runtime:
   Include creator asset:
   Include product/app asset:
   Voiceover:
   Scene prompt:
   Review risks:

Generation settings:

Regeneration rules:

Edit assembly notes:
```

## Transcript rules to preserve

- More control beats one-shot generation. Generate separate clips and stitch them.
- A realistic creator is not enough; the script must sound authentic.
- Do not include product/app assets in prompts for chunks where they should not appear.
- Use runtime as a pacing control. If a voice sounds off, try changing duration and regenerating that chunk.
- Expect at least one bad clip; plan review and regeneration into the workflow.
- Prefer 720p for cost-efficient social ads unless the user explicitly requests 1080p.
- Final review is against the assembled video, not isolated clips only.
