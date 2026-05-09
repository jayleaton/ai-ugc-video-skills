# fal Video Provider Candidates

Use this reference when comparing fal.ai video models for AI UGC clips.

## Recommended Test Candidate

### Kling O3 Standard Image-to-Video

- Endpoint: `fal-ai/kling-video/o3/standard/image-to-video`
- Best use: lower-cost image-to-video UGC scene tests with optional native audio
- Supports: start image, optional end image, prompt, 3-15 second duration, generated audio
- Default test settings:
  - Aspect ratio: controlled by source image framing
  - Duration: match the original scene duration
  - Audio: `true` when comparing against Seedance talking clips
- Pricing reference from fal model page:
  - Audio off: `$0.084/s`
  - Audio on: `$0.112/s`
  - 5s with audio: about `$0.56`
- Tradeoffs:
  - Cheaper than Seedance 2.0 for multi-scene tests
  - Strong candidate for UGC proof-of-concept runs
  - May need separate voiceover replacement if native speech quality is weaker than Seedance
  - Default concurrency can be low, so queue jobs rather than assuming fast parallel generation

## Baseline

### Seedance 2.0 Image-to-Video

- Endpoint: `bytedance/seedance-2.0/image-to-video`
- Best use: high-quality talking UGC clips with synchronized dialogue
- Default test settings:
  - Aspect ratio: `9:16`
  - Resolution: `720p`
  - Audio: `true`
- Pricing note:
  - Previously used for the AutoVisuals wheels/wraps ad.
  - More expensive than Kling O3 Standard for 720p audio-on scene tests.

## Cheaper But Less Direct Candidates

### MiniMax Video 01 Image-to-Video

- Endpoint: `fal-ai/minimax/video-01/image-to-video`
- Price: about `$0.50/video`
- Output: 720p, usually 6 seconds
- Best use: cheap visual motion tests
- Main limitation: weaker direct fit for synchronized talking UGC ads compared with Seedance or Kling O3.

### Luma Ray 2 Image-to-Video

- Endpoint: `fal-ai/luma-dream-machine/ray-2/image-to-video`
- Best use: realistic motion and visual coherence
- Main limitation: 720p cost can scale above the cheapest options, and it is less directly focused on generated dialogue UGC.

## Recommendation

For the AutoVisuals wheels/wraps comparison, test this order:

1. Kling O3 Standard with audio on.
2. Kling O3 Standard with audio off plus external voiceover, if native speech is poor.
3. MiniMax Video 01 for low-cost visual-only motion comparison.

Keep Seedance 2.0 as the quality baseline, not the default iteration model.
