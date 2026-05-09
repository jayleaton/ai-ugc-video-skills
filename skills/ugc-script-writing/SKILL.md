---
name: ugc-script-writing
description: Build production-ready UGC ad scripts and AI-video generation prompts. Use when writing, auditing, varying, chunking, or scaling user-generated-content ads, creator scripts, organic captions, TikTok/Reels/Shorts UGC scripts, AI avatar prompts, product reveal scripts, or chunked AI video production prompts.
---

# UGC Script Writing

Use this skill to create UGC scripts that are ready for AI video generation or creator production. Default to clean deliverables: no meta-commentary, no tables unless the user asks for an audit or strategy, and no explanatory notes inside voiceover.

## Workflow

1. Collect brand inputs before writing. Do not invent required values.
2. Choose the format: `full-stack`, `mid-funnel`, or `animated-infomercial`.
3. Choose the variation type: confessional, tested-it, myth-buster, accidental-discovery, or animated-infomercial.
4. Select one pain point angle and at least one hook from `references/viral-hooks.md`.
5. Write voiceover first, then production prompt, then optional chunks and captions.
6. Audit against failure modes before finalizing.

Read [references/framework.md](references/framework.md) when generating or auditing scripts. Read [references/viral-hooks.md](references/viral-hooks.md) before choosing hooks for any script. Read [references/chunked-production.md](references/chunked-production.md) when the user asks for chunked prompts, AI-video generations, or stitching-ready output. Read [references/captions-testing.md](references/captions-testing.md) when the user asks for organic captions, test sets, or scaling logic.

## Required Inputs

Ask for missing required inputs instead of fabricating them:

- Brand name and exact spelling
- Whether the brand name should be spoken in voiceover
- Brand pronunciation if spoken
- Product name and exact spelling
- Product pronunciation if spoken
- Product category
- Core mechanism in plain language
- Tactile analogy for the mechanism
- Failed alternatives the audience has tried
- Target avatar demographics
- Product reference image or asset name

Ask for these when needed for the angle:

- Specific pain points beyond the surface complaint
- Setting and lighting preferences
- Words AI voiceover tools may mispronounce
- Product application behavior and common visual failure modes
- Condition/problem the product treats

## Format Selection

Use `mid-funnel` for warmer audiences who already know the problem and need a fast credibility signal:

- Runtime: 18-22 seconds
- Voiceover: 55-70 words
- Beats: sharp hook with reframe folded in, mechanism with analogy, soft payoff and close
- Scenes: 2 default, 3 only if voiceover requires it
- Chunked workflow: 3 chunks

Use `full-stack` for cold audiences who need a full education arc:

- Runtime: 28-32 seconds
- Voiceover: 150-180 words
- Beats: hook, reframe, mechanism, payoff, CTA
- Scenes: 3 default
- Chunked workflow: 5 chunks

Use `animated-infomercial` when there is no creator and the product is the hero:

- Mid-funnel: 3-4 chunks
- Full-stack: 5-6 chunks
- Product asset appears in every chunk
- Replace creator continuity with aesthetic continuity

## Non-Negotiables

- Make the first five words identify the exact viewer and their frustration.
- Every script must name the selected viral hook template from `references/viral-hooks.md` and adapt at least one hook into the opening.
- Use complete conversational sentences. Avoid choppy two-word fragments.
- Keep mechanism language simple enough for a 12-year-old.
- Include a tactile analogy. This is the line viewers should remember and repeat.
- Default to soft CTA language.
- Do not use em dashes or bolding in voiceover.
- Avoid words AI voices commonly mispronounce; swap them or add pronunciation notes.
- If the brand or product name is spoken, add a pronunciation lock above the script.
- Do not show the product before the voiceover introduces it.
- Keep every shot moving. No static product photography or decorative cutaways.
- Match visuals to the voiceover word for word.
- Lock the present-tense creator into the "after" state, not the untreated condition.

## Deliverable Shapes

For a single continuous AI-video prompt, output:

```text
Create a [STYLE] ad for [PRODUCT CATEGORY]. The creator is a [GENDER] in their [AGE RANGE], [VIBE], [HAIR DESCRIPTION], wearing [OUTFIT]. Natural look, [MAKEUP LEVEL]. They're in [SETTING WITH LIGHTING].

[Skin direction block]

[Application direction block]

@Image 1 is the product, [PRODUCT NAME], [WHAT IT IS]. Use it as a reference for what the [PACKAGE TYPE] looks like when held or interacted with, not as a static image.

[B-roll sequencing block]

[UGC realism direction block]

Camera style: [CAMERA DIRECTION].

[B-roll direction with no-product opening cuts]

[Scene count and pacing note]

Here's the full script:

"[VOICEOVER SCRIPT]"
```

For chunked production, output:

```text
[Character lock pasted into every chunk]

[Universal direction blocks pasted into every chunk]

[Chunk-by-chunk breakdown with exact voiceover line, runtime, visual direction, continuity notes, and product asset inclusion]
```

## Direction Blocks

Always include adapted versions of these four blocks in AI-video prompts:

- Skin/condition direction: the creator already looks like the successful after state throughout the video.
- Application direction: specify exact desired visual behavior and name the AI's likely visual failure modes.
- B-roll sequencing: product does not appear until the voiceover names it.
- UGC realism: phone is propped off-camera unless selfie style is explicitly needed; both hands are free; creator gestures naturally and is never frozen.

## Voiceover Rules

Use these beat structures:

- Full-stack: hook, problem reframe, mechanism plus analogy, payoff, soft CTA.
- Mid-funnel: sharp hook/reframe, mechanism plus analogy, soft payoff/close.

Use the universal reframe pattern:

```text
Most people think [problem] is a [surface] problem, so they keep [surface behavior]. But it is actually a [structural or hidden] problem, which is why [surface solution] physically cannot reach it.
```

Rotate hook frameworks across scripts. Select from `references/viral-hooks.md`, then adapt the blank to the product, problem, or category. Strong defaults for paid UGC:

- `Watch this before you try ___`
- `Want to save money on ___ Try this`
- `I tested ___ so you don't have to`
- `Why your ___ isn't working and how to fix it`
- `The biggest myth about ___`
- `What nobody warns you about with ___`
- `One thing I'll never do again in ___`
- `The most underrated tool I use for ___`

Use soft CTAs such as:

- "I'll leave a link to the one I'm using below."
- "I'll drop a link below if you want to look into it."
- "Linking it below so you don't have to go searching for it."
- "Leaving a link in the comments so you can check it out yourself."

## Audit Checklist

Before final output, verify:

- First five words call out the right viewer.
- Selected viral hook template is named and appears in adapted form in the opening.
- Hook is not a personal morning/weekend/life narration.
- Sentences flow naturally when read aloud.
- Mechanism is simple and paired with a tactile analogy.
- CTA is suggestion-style, not a hard sales pitch.
- Product reveal happens only when named in voiceover.
- Product asset is omitted from no-product chunks.
- Visuals are motivated by voiceover, not decorative.
- No em dashes or bold formatting in voiceover.
- No visible untreated condition on the present-tense creator.
- No visible residue when the product should be invisible.
- No phone in hand unless selfie style is required.
