# Chunked UGC Production

Use this reference when generating stitching-ready AI video prompts. Each chunk is a separate generation that gets stitched in post.

## Workflow

1. Decide format: mid-funnel, full-stack, or animated infomercial.
2. Write the full voiceover script first.
3. Lock the character description and paste it into every chunk.
4. Paste the four universal direction blocks into every chunk.
5. Break the voiceover into the default chunk count.
6. Use product asset references only in chunks where the product should appear.
7. Bookend first and last chunk with similar framing.
8. Identify fallback cuts that can be dropped if generation fails.

## Character Lock

Write one detailed paragraph and paste it verbatim into every chunk. Include:

- Age range
- Energy/vibe
- Hair color and style
- Skin tone
- Eyes
- Accessories
- Specific outfit
- Setting or apartment details
- Lighting

## Per-Chunk Specification Template

Each chunk must include:

- Chunk number and beat label
- Exact voiceover text
- Estimated runtime in seconds
- Product asset inclusion: yes or no
- Visual direction
- Continuity notes

Use `@[product asset name]` only in prompts where the product should appear. Omit the asset reference entirely in hook/reframe/closing chunks where the product should not appear.

## Mid-Funnel 3-Chunk Breakdown

Total runtime: 18-22 seconds. Word count: 55-70 words. Product asset pattern: NO, YES, NO.

Chunk 1 - Hook plus reframe:

- Voiceover: Opening line that calls out audience and dismisses the wrong assumption.
- Runtime: 5-7 seconds.
- Product asset: NO.
- Visual: Talking-to-camera in primary setting, both hands free, natural gestures, camera stays on creator, no product visible.
- Continuity: Establish outfit, hair, lighting, and position.

Chunk 2 - Mechanism plus product reveal:

- Voiceover: Compressed mechanism plus tactile analogy. Product is named here for the first time.
- Runtime: 8-10 seconds.
- Product asset: YES.
- Visual: Cut to a new angle motivated by physical movement. Creator walks to a counter or surface. Phone propped. Pick up product, reveal it when named, open it, apply/use it, show result.
- Continuity: Same outfit, hair, and lighting. Product must match reference exactly.

Chunk 3 - Payoff plus soft CTA:

- Voiceover: One sensory payoff beat plus suggestion-style close.
- Runtime: 5-6 seconds.
- Product asset: NO.
- Visual: Return to talking-to-camera, ideally bookending Chunk 1. Genuine smile on payoff, subtle downward gesture on CTA, both hands free.
- Continuity: Match Chunk 1 framing as closely as possible.

## Full-Stack 5-Chunk Breakdown

Total runtime: 28-32 seconds. Word count: 150-180 words. Product asset pattern: NO, NO, NO, YES, NO.

Chunk 1 - Hook:

- Voiceover: Two sentences that call out exact person and frustration.
- Runtime: 5-6 seconds.
- Product asset: NO.
- Visual: Talking-to-camera in primary setting, both hands free, natural gestures, no cuts or environmental shots.
- Continuity: Establish baseline for outfit, hair, lighting, and position.

Chunk 2 - Reframe part 1:

- Voiceover: Name wrong things the audience has tried and set up surface versus structural distinction.
- Runtime: 5-6 seconds.
- Product asset: NO.
- Visual: Same talking-to-camera shot with slight angle shift or drift. Dismissive hand gesture on failed alternatives.
- Continuity: Same setting, outfit, hair, and lighting.

Chunk 3 - Reframe part 2:

- Voiceover: Explain why surface attempts cannot work and set up product reveal.
- Runtime: 5-6 seconds.
- Product asset: NO.
- Visual: Continued talking-to-camera. Optional gesture to affected area. No environmental cutaways. No product.
- Continuity: Same setting, outfit, and lighting. This is the last no-product beat.
- Fallback: Easiest chunk to drop or compress into Chunk 2 if generation fails.

Chunk 4 - Mechanism plus product reveal plus application:

- Voiceover: Product is named, mechanism is explained, tactile analogy lands.
- Runtime: 8-10 seconds.
- Product asset: YES.
- Visual: Cut to new angle motivated by movement. Phone propped on counter. Tight shot of product in hand, reveal/open on product name, macro use/application, push-in close-up of immediate result.
- Continuity: Same outfit, hair, lighting. Product matches reference exactly.
- Note: Hardest chunk to regenerate; plan extra generation time.

Chunk 5 - Payoff plus soft CTA:

- Voiceover: Sensory specific life-after-product description plus suggestion close.
- Runtime: 5-6 seconds.
- Product asset: NO.
- Visual: Return to talking-to-camera, bookending Chunk 1. Soft smile on payoff, subtle downward gesture on CTA, both hands free.
- Continuity: Match Chunk 1 framing.

## Animated Infomercial

No creator. Product cinematography with voiceover.

Mid-funnel:

- 3-4 chunks aligned to voiceover beats.
- Product asset: YES in every chunk.

Full-stack:

- 5-6 chunks aligned to voiceover beats.
- Product asset: YES in every chunk.

Adjust fields:

- Replace visual direction with cinematography direction: orbit, dolly, macro, animated cutaway, hero shot.
- Replace continuity notes with aesthetic continuity: lighting temperature, color grade, surface materials.

## Stitching Notes

The natural mid-funnel transition is between Chunk 1 and Chunk 2, where no-product hook becomes product reveal.

The natural full-stack transition is between Chunk 3 and Chunk 4, where no-product reframe becomes product reveal.

Small inconsistencies are easier to hide when Chunk 1 and the final chunk bookend the framing.
