# ClickFunnels — Meta/Facebook Ads Publishing Plan

**Program:** ClickFunnels | tiered 30–40% recurring commission | landing page must never link directly to the raw affiliate link (per program terms) — ads must always route through tab-zero's own bridge page
**Landing page:** https://tab-zero.com/funnel-builder (chromeless bridge page, single CTA)
**Destination in every ad:** the bridge page above — never the raw affiliate link
**Brand name in ad creative:** never — see Compliance Checklist below
**Affiliate link status:** not yet issued — CTA buttons on the bridge page currently render as inert placeholders (`href="#"`, `data-affiliate-link="PENDING_CLICKFUNNELS_APPROVAL"`) until a real link is provided, same pattern as Systeme.io before its link went live.

---

## 1. Campaign objective

- **Objective:** Conversions, optimizing toward a custom `AffiliateClick` event fired on the bridge page's own CTA clicks (see Tracking) — not toward ClickFunnels' actual trial signup, which we can't see from our side.
- **Funnel role:** cold traffic → bridge page → ClickFunnels free trial. One landing page, one offer — never mixed with another product's pitch.

## 2. Ad creative set (this folder)

| File | Angle | Grounded in |
|---|---|---|
| `angle1-chaos-clarity.png` | Chaos-tags → clarity-card ("5 tools → 1 funnel builder") | The real consolidation story — page builder + checkout + email + dev, one build |
| `angle2-stat-callout.png` | Bold dark-mode stat: 1M+ funnels, 100K+ users, 4.8★/1,643 reviews | ClickFunnels' own published stats |
| `angle3-pov-pieces.png` | Relatable "landing page here, checkout there, still not launched" + stat line | Same consolidation pain, softer/native-feeling tone |
| `angle4-press-credibility.png` | "As featured in" press wall (Forbes, USA Today, Entrepreneur) + rating callout | ClickFunnels' real press mentions — this angle didn't exist in the Systeme.io set because Systeme.io doesn't have this kind of press coverage; ClickFunnels does, so it gets its own angle instead of being forced into the same four angles as last time. |

All 1080×1080 (Feed-safe square). Angle 2 (dark, bold, minimal text) is the best candidate to re-export at 1080×1920 for Stories/Reels if that placement is added later.

**Note on real testimonials:** ClickFunnels' own site features several named testimonials (e.g. Trent Shelton, Pace Morby, Eileen Wilder). None are used here or on the landing page — the exact wording available to us was a paraphrased summary, not confirmed verbatim quotes, and misattributing words to real, identifiable public figures is a real liability. The credibility angle (4.8★/1,643 reviews, press mentions) carries the same proof value without that risk. If you can pull exact, verbatim testimonial text directly from ClickFunnels' site later, that's addable as a fifth angle.

## 3. Ad copy per angle (Meta limits: primary text ~125 visible / headline ~40 / description ~30)

### Angle 1 — Chaos → Clarity
- **Primary text:** "Stop juggling a page builder, checkout tool, and email platform that don't talk to each other. One tool builds it all." (118 chars)
- **Headline:** "One Funnel Builder, Not Five Tools" (35 chars)
- **Description:** "See how it works" (17 chars)

### Angle 2 — Stat Callout
- **Primary text:** "Over 1,000,000 funnels built by 100,000+ users. Rated 4.8/5 from 1,600+ reviews. See what the fuss is about." (111 chars)
- **Headline:** "1M+ Funnels Built, 4.8★ Rated" (30 chars)
- **Description:** "See the funnel builder" (23 chars)

### Angle 3 — POV Pieces
- **Primary text:** "Landing page here, checkout there, email somewhere else — still haven't launched. One tool builds it all." (107 chars)
- **Headline:** "Stop Building Funnels In Pieces" (32 chars)
- **Description:** "One tool, every step" (21 chars)

### Angle 4 — Press Credibility
- **Primary text:** "Featured in Forbes, USA Today, and Entrepreneur — see the funnel builder behind 1M+ funnels and 100,000+ users." (114 chars)
- **Headline:** "The Funnel Builder Everyone's Covering" (39 chars)
- **Description:** "As featured in Forbes & more" (29 chars)

Every number above traces to ClickFunnels' own published homepage (100K+ users, 1M+ funnels, 4.8/5 from 1,643 reviews, named press outlets) — nothing invented.

## 4. Audience & targeting (2026 Andromeda-era Meta)

Same corrected approach established for Systeme.io — not re-derived from scratch, applied consistently:

- **Geo:** US, UK, Canada, Australia (Tier-1 English), one combined campaign — same targeting basis already set for the Systeme.io campaign. Flag if this product should target differently (e.g. ClickFunnels' buyer skews more US-heavy given the press mentions are US outlets).
- **Targeting filters:** those four countries only. No interest/behavior/demographic layering — Andromeda rewards broad targeting paired with specific creative over manually stacked interest filters.
- **Where the audience knowledge goes:** into the creative. All four angles already encode who they're for (funnel-builders juggling tools, people who respond to scale/press proof). That's the targeting.
- **Identity-trigger keyword test:** once angle 1 or 3 shows signal, duplicate the winner and insert a niche identifier ("...for course creators," "...for coaches," "...for e-commerce sellers") into the headline/body as both a relevance trigger and a targeting signal.
- **Lookalikes:** not yet — needs a real source audience (100+ events minimum) from `AffiliateClick` clicks, which don't exist until this campaign runs.
- **Retargeting:** not available at launch (cold-start, no prior visitors). Once the bridge page has real traffic, retarget non-clickers with a *different* tab-zero product's bridge page (per the skill's "retarget with a different offer" principle) rather than another ClickFunnels ad — e.g. Instapage or Systeme.io, both also funnel/page-adjacent so the audience overlap is real.
- **Exclusions:** none possible at launch; exclude confirmed converters once tracking exists.

## 5. Budget & testing approach

Same structural correction applied to the Systeme.io plan, used here from the start:

- **Before spending anything:** confirm the Meta Pixel + Conversions API is firing the `AffiliateClick` event on this page's two CTAs (same pixel as Systeme.io's, just a different event value/param so the two products are distinguishable in Ads Manager).
- **No defensible target CPA yet** — same caveat as Systeme.io: this is a single-tier affiliate click funnel with no CRM visibility into actual ClickFunnels trial signups. Treat all budget figures as a starting structure to generate data, not a real forecast.
- **Structure — two campaigns over the same broad (Tier-1 English) audience:**
  - *Testing campaign (~20% of budget):* all 4 angles live here first, protected budget so CBO's early bias doesn't starve 2–3 of them before they get a fair read.
  - *Scaling campaign (~80% of budget):* stays empty until an angle graduates.
- **Delivery check (day 7):** expected spend per angle ≈ (daily budget ÷ 4 active ads) × 7 × 0.5. Meaningfully under that by day 7 → the ad's been deprioritized by Meta's pre-screening; iterate hook/visual, don't wait longer.
- **Judging window:** 1,000+ impressions minimum before any kill/keep call.
- **Scaling discipline:** +20% every 5 days once a winner is clear, never +30%+ in one move.
- **Fatigue watch:** cold-prospecting frequency 1.0–2.5 safe, 2.5–4.0 warning (stage a fresh execution), >4.0 retire.
- **After the first real read:** keep the top 1–2 angles, retire the rest, and keep producing — roughly an hour a week on 1–2 new static variations of whatever's winning, hook first.
- **Portfolio note:** once both this campaign and the Systeme.io campaign have real data, compare cost-per-`AffiliateClick` across products before deciding where to concentrate budget — don't scale either in isolation without checking whether the other is quietly outperforming it.

## 6. Compliance checklist (from the program's own affiliate restrictions)

- [x] Real brand name never appears in any ad image, primary text, headline, or description — confirmed across all 4 creatives and all copy above.
- [x] Destination URL is the bridge page (`tab-zero.com/funnel-builder`), never a raw affiliate link.
- [x] Bridge page discloses the affiliate relationship (chromeless header shows "Independent review · affiliate link"; footer links to `/disclosure`).
- [x] One landing page for this program only — not mixed with any other product's offer.
- [x] No named real-person testimonials used anywhere (ads or landing page) — avoided the verbatim-quote risk entirely (see note in section 2).
- [ ] **Brand bidding:** ClickFunnels' program explicitly prohibits bidding on their trademarked terms — not applicable to this Meta plan, but hold this rule if the program is ever extended to Google Ads.
- [ ] **Before spending real budget:** get the real affiliate link and replace `PENDING_CLICKFUNNELS_APPROVAL` in `src/lib/products.ts` (`affiliateUrl` field, same pattern already used for Systeme.io) — the CTA buttons are inert until that's done, so nothing should launch before this.

## 7. Tracking

- Meta Pixel + Conversions API already needs to exist for Systeme.io — extend the same `AffiliateClick` custom event to this page's two CTAs, with a `content_name` or similar param set to `"clickfunnels"` so the two products are separable in reporting.
- UTM parameters per angle, e.g.:
  `https://tab-zero.com/funnel-builder?utm_source=meta&utm_medium=paid-social&utm_campaign=clickfunnels&utm_content=angle1-chaos-clarity`
  Swap `utm_content` per angle (`angle2-stat-callout`, `angle3-pov-pieces`, `angle4-press-credibility`).
- Once a real affiliate link replaces `PENDING_CLICKFUNNELS_APPROVAL`, the bridge page's CTAs carry it automatically — no ad creative changes needed, same as Systeme.io.
- No commission dashboard to reconcile against yet (no link = no signups to track) — add this step once the link is live, same as the Systeme.io plan's ground-truth check.
