# UGC Script Writing Framework

Use this reference for script generation and audit.

## Brand Input Variables

Required:

- Brand name and exact spelling
- Brand pronunciation if spoken
- Whether brand name is spoken in voiceover
- Product name and exact spelling
- Product pronunciation if spoken
- Product category
- Core mechanism in plain language
- Tactile analogy for the mechanism, preferably "Think of it less like [x] and more like [y]"
- Failed alternatives the audience has tried
- Target avatar demographics
- Reference image or asset name for the product

Conditional:

- Specific deep pain points
- Setting and lighting preferences
- Category words AI may mispronounce
- Product use/application behavior
- Condition/problem the product treats

## Script Formats

Full-stack format:

- Runtime: 28-32 seconds
- Word count: 150-180 words
- Beat structure: hook, problem reframe, mechanism with analogy, payoff, CTA
- Default scene count: 3
- Default chunks: 5
- Use for cold audiences who need the education arc before converting

Mid-funnel punchy:

- Runtime: 18-22 seconds
- Word count: 55-70 words
- Beat structure: sharp hook with reframe folded in, mechanism with analogy, soft payoff and close
- Default scene count: 2, or 3 only if voiceover requires it
- Default chunks: 3
- Use for warmer audiences who know the problem and need a fast credibility signal

## Non-Negotiable Principles

The hook owns the first five words. It must call out the exact person and frustration, not narrate the creator's life.

Sentence flow beats choppy phrasing. Avoid stacked fragments. Use connected, complete thoughts.

Keep the mechanism simple. Use the brand's proprietary mechanism only if a 12-year-old would understand it. Pair it with a one-second tactile analogy.

Soft CTAs outperform direct sales pitches. Default to suggestion-style closes:

- "I'll leave a link to the one I'm using below."
- "I'll drop a link below if you want to look into it."
- "Linking it below so you don't have to go searching for it."
- "Leaving a link in the comments / bio so you can check it out yourself."

No em dashes in voiceover. No bolding in voiceover.

Avoid words AI voiceover tools mispronounce. Common offenders include collagen, hyaluronic, niacinamide, keratosis, and non-standard brand spellings. Replace with plain-language alternatives or include phonetic pronunciation notes.

If the brand is spoken, include a pronunciation block with exact spelling, dictionary phonetics, and an instruction that no shortcuts or variations are permitted. If it still mispronounces, remove brand mentions from voiceover.

## Universal Production Skeleton

Use for a single continuous AI-video prompt:

```text
Create a [STYLE] ad for [PRODUCT CATEGORY]. The creator is a [GENDER] in their [AGE RANGE], [VIBE - 2 to 3 words], [HAIR DESCRIPTION], wearing [OUTFIT]. Natural look, [MAKEUP LEVEL]. They're in [SETTING WITH LIGHTING].

[SKIN DIRECTION BLOCK]

[APPLICATION DIRECTION BLOCK]

@Image 1 is the product, [PRODUCT NAME - what it is]. Use it as a reference for what the [PACKAGE TYPE] looks like when held or interacted with, not as a static image.

[B-ROLL SEQUENCING BLOCK]

[UGC REALISM DIRECTION BLOCK]

Camera style: [CAMERA DIRECTION].

[B-ROLL DIRECTION WITH EXPLICIT NO-PRODUCT OPENING CUTS]

[SCENE COUNT AND PACING NOTE]

Here's the full script:

"[VOICEOVER SCRIPT]"
```

## Universal Direction Blocks

Skin/condition direction:

```text
Important [condition] direction: The creator has naturally beautiful, [after-state descriptor] with no visible [condition the product treats] at any point. They look like they have already been using the product for months, because they have. This applies to every talking-to-camera scene, every product application scene, and every close-up.
```

Category adaptations:

- Skin: naturally beautiful, smooth, clear skin with an even tone and a soft healthy glow; no visible blemishes, texture, or treated condition.
- Hair: naturally beautiful, healthy, full hair; no visible thinning, breakage, or frizz.
- Teeth: naturally bright, white, healthy teeth; no visible staining or yellowing.
- Home/cleaning: clean, lived-in, beautiful home; no visible stains, clutter, or damage.

Application direction:

```text
Important application direction: When the creator [uses the product], it should [desired visual behavior]. No visible [specific failure modes the AI defaults to]. [What it should look like instead]. Their [target area] should look exactly the same after [application/use] as it did before, [description], with only [realistic residual effect] where the product touched.
```

B-roll sequencing:

```text
Important b-roll sequencing: The product must not appear on screen until the voiceover specifically introduces it. During the hook and reframe beats, the camera stays on the creator. No environmental cutaways, no decorative shots of the apartment, no shots of furniture or art. The product is only revealed visually at the exact moment the voiceover names it.
```

UGC realism:

```text
Important UGC realism direction: This is a casually filmed video. The phone is propped somewhere off-camera, so both hands are free throughout. Natural handheld jitter and small micro-movements give it a self-filmed feel. The creator gestures naturally with both hands as they talk, adjusting hair, touching the relevant area when appropriate, using small open-palm gestures, and shifting weight. They are never frozen in a still pose with hands in pockets or behind their back. The energy is "I just want to tell you something" not "I am posing for a commercial."
```

## Voiceover Architecture

Full-stack five-beat structure:

- Hook, 0:00-0:03: Calls out exact person and specific frustration. Usually two sentences.
- Problem reframe, 0:03-0:10: Reveals why previous attempts failed. Moves from "I am doing it wrong" to "I was given the wrong tools."
- Mechanism plus analogy, 0:10-0:20: Introduces product, explains mechanism in plain language, and lands tactile analogy.
- Payoff, 0:20-0:25: Sensory, specific lived experience after product use.
- CTA, 0:25-0:30: Soft suggestion-style close.

Mid-funnel three-beat structure:

- Sharp hook with reframe folded in, 0:00-0:06: Calls out audience and dismisses wrong assumption in one sentence.
- Mechanism with analogy, 0:06-0:16: Compressed mechanism plus tactile analogy. Preserve the analogy.
- Soft payoff and close, 0:16-0:21: One sensory beat plus suggestion-style CTA.

Universal reframe pattern:

```text
Most people think [problem] is a [surface] problem so they keep [surface behavior]. But it is actually a [structural/hidden] problem, which is why [surface solution] physically cannot reach it.
```

## Hook Frameworks

Rotate these to avoid fatigue:

- If you are trying to [result], this is how you finally do it without [hated tradeoff].
- Your [problem] is [hidden cause], and [failed alternative] will not fix it.
- The biggest myth about [problem] is [wrong belief].
- I tested [category] so you do not have to.
- I wish someone had told me this before I started [journey].
- I found this out by accident while [context].
- What nobody warns you about with [problem] is [hidden consequence].
- Why [product/mechanism/category] works when nothing else does.
- Why your [attempt] is not working and how to fix it.
- Do not make this mistake with [category].
- One thing I will never do again in [category].
- Three mistakes keeping you stuck in [problem].
- This one thing changed everything for me in [problem].
- What nobody admits about [problem] is [truth].
- How I stopped [painful behavior or symptom].
- The truth behind my [result].
- If I could go back and tell myself one thing about [problem].

## Variation Types

Confessional:

- First-person, present tense, personal admission.
- Best for emotional categories like beauty, wellness, and parenting.

Tested it so you do not have to:

- Creator as audience surrogate who tried wrong solutions first.
- Best for crowded categories with many competing products.

Myth buster:

- Opens with corrective reframe.
- Best for educational categories where the audience has absorbed wrong information.

Accidental discovery:

- Creator stumbled into the insight.
- Lowest sales-pressure framing.

Animated infomercial:

- No creator, product b-roll plus voiceover.
- Best for scaling output or product-hero ads.

## Pain Point Selection

Start with surface complaints for first scripts, then expand into deeper pain points. Mass-desire pain points outperform niche ones.

Surface complaints:

- Literal visible symptom of the problem.
- Easy entry point but saturated.

Deep pain points:

- Public visibility pain: photos, calls, daylight, unforgiving lighting.
- Mental tax: daily labor of working around the problem.
- Aging or time pain: carrying the problem for years, grief of unresolved issues.
- "I have fixed everything else" pain: frustration for someone who solves problems but cannot fix this.
- Intimacy and close-up pain: private moments with people who look closely.
- Recognition pain: not recognizing yourself, gap between how you feel and how you appear.

Mass-desire filter:

- Prefer pain points almost anyone with the problem has felt.
- Avoid narrow angles that only apply to one job, family status, or lifestyle unless requested.

## Camera and B-Roll Standards

Every shot has movement. Talking-to-camera has natural jitter. Hands-free shots use subtle drift or micro-push-ins. B-roll uses tracking, dolly pushes, orbits, reveals, or hand motion.

Visuals must sync word for word with voiceover. When the narrator says "fridge," show a fridge. When they explain the mechanism, show the mechanism.

Cuts are motivated by physical movement, product reveal, or a specific scripted action. Do not cut to decorative furniture, art, interiors, or aesthetic filler.

Scenes play at normal speed. No slow motion. No sped-up footage.

Scene count:

- Mid-funnel: 2 scenes default, 3 only if required.
- Full-stack: 3 scenes default.
- Animated infomercial: breaks follow voiceover beats.

Setting rotation:

- Warm dim kitchen evening
- Bright sun-drenched morning
- Soft afternoon side window
- Cool clinical product studio
- Lived-in family kitchen
- Sunlit bedroom vanity
- Back patio outdoor light
- Evening warm bathroom

Demographic rotation:

- Ages 19-23
- Ages 24-32
- Ages 32-38
- Ages 35-45
- At least one male equivalent when building a campaign set

## Common Failure Modes

Reject and revise outputs with:

- Rambling hooks that narrate the creator's life before naming the viewer.
- Choppy two-word phrasing.
- Jargon mechanisms.
- Invented or overly salesy CTAs.
- Static b-roll.
- Mismatched visuals.
- Decorative b-roll.
- Over-formatted output when the user asked for a clean prompt.
- Phone in hand when hands-free is more natural.
- Frozen poses or hands in pockets.
- Product visibility before voiceover earns it.
- Visible untreated condition on the present-tense creator.
- Visible residue when the product should be invisible.
