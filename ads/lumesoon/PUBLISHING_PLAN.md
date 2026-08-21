# Lumesoon — Meta/Facebook Ads Publishing Plan

**Program:** Lumesoon | 20% lifetime recurring commission | 60-day cookie | brand bidding explicitly prohibited on Google Ads (not applicable to this Meta plan, but hold the rule if ever extended there)
**Landing page:** https://tab-zero.com/ai-voice-cloning (chromeless bridge page, single CTA)
**Destination in every ad:** the bridge page above — never the raw affiliate link
**Brand name in ad creative:** never — see Compliance Checklist below (this is the product where a draft violation was actually caught and fixed — see section 2)

---

## 1. Campaign objective

- **Objective:** Conversions, optimizing toward a custom `AffiliateClick` event fired on the bridge page's own CTA clicks — same tracking approach as Systeme.io and ClickFunnels, extended with a third `content_name` value.
- **Funnel role:** cold traffic → bridge page → Lumesoon free account (10,000 credits/month, no card required — genuinely the lowest-friction offer of the three products live so far).

## 2. Ad creative set (this folder) — four new templates, not reused

Per the standing note to vary ad formats across products, none of these four reuse the chaos/clarity, stat-callout, POV-panel, or press-mention formats already used for Systeme.io/ClickFunnels:

| File | Template (from the `ad-creative` skill's 15-template library) | Grounded in |
|---|---|---|
| `angle1-numbered-list.png` | **Numbered List** | The real toolkit breadth — TTS, voice cloning, script/blog writer, transcription, each a separate line item |
| `angle2-feature-spotlight.png` | **Feature Spotlight** (hub-and-spoke) | Same four capabilities, radiating from a center "AI Workspace" node — dark mode, first hub-diagram layout used in this rollout |
| `angle3-testimonial-stack.png` | **Testimonial Stack** | Three real, verbatim testimonial fragments from Lumesoon's own site (Chinedu O., Sarah M., Priya P.) |
| `angle4-faq-card.png` | **FAQ Card** | The real "no credit card required" free-tier fact, framed as the objection a cold viewer would actually have |

**Compliance catch worth flagging:** the first draft of `angle3-testimonial-stack` used two quote fragments that included the word "Lumesoon" directly in the testimonial text — a real violation of the never-name-the-brand rule, caught during review and fixed by re-selecting different verbatim fragments from the same three testimonials that don't contain the brand name. Worth double-checking on every future testimonial-based ad — real customer quotes often say the product name mid-sentence, and it's easy to lift a fragment without noticing.

## 3. Ad copy per angle (Meta limits: primary text ~125 visible / headline ~40 / description ~30)

### Angle 1 — Numbered List
- **Primary text:** "A text-to-speech tool. A voice cloner. A script writer. A transcription app. Now it's one workspace, free to start." (119 chars)
- **Headline:** "Stop Paying for 4 Separate AI Tools" (36 chars)
- **Description:** "10,000 free credits/month" (26 chars)

### Angle 2 — Feature Spotlight
- **Primary text:** "Clone your voice, generate speech in 63 languages, write scripts, and transcribe audio — all from one workspace." (114 chars)
- **Headline:** "Everything for Content, One Workspace" (38 chars)
- **Description:** "Free to start, no card needed" (30 chars)

### Angle 3 — Testimonial Stack
- **Primary text:** "\"It sounds exactly like me and saves me hours of recording time.\" Real creators on what switching actually feels like." (119 chars)
- **Headline:** "Rated 4.9/5 by 50,000+ Creators" (32 chars)
- **Description:** "See what they're using" (23 chars)

### Angle 4 — FAQ Card
- **Primary text:** "Do you need a credit card to try an AI voice and writing workspace? No — 10,000 free credits every month, no card required." (125 chars)
- **Headline:** "No Card Required — 10K Free Credits" (36 chars)
- **Description:** "Start free today" (16 chars)

Every number and quote traces to Lumesoon's own published homepage (1,600+ voices, 63 languages, 50,000+ creators, 4.9/5 rating, 10,000 free credits/month, the three testimonials) — nothing invented.

## 4. Audience & targeting (2026 Andromeda-era Meta)

Same corrected approach used for Systeme.io and ClickFunnels:

- **Geo:** US, UK, Canada, Australia (Tier-1 English), one combined campaign — same basis as the other two live campaigns. Lumesoon's real testimonials skew global (Nigeria, USA, Spain, India), which is a signal the product travels well beyond Tier-1 English — worth testing a broader-English or additional-market expansion later once this campaign has data, but starting narrow and consistent with the rest of the portfolio for now.
- **Targeting filters:** those four countries only, no interest/behavior layering.
- **Where the audience knowledge goes:** into the creative — four structurally different angles covering four different hooks (cost-consolidation, feature breadth, social proof, objection-handling), which is itself a form of audience segmentation Andromeda can route on.
- **Identity-trigger keyword test:** once a winner emerges, duplicate it with a niche identifier — "...for YouTubers," "...for podcasters," "...for course creators" — Lumesoon's own site explicitly segments by these personas, so the identifiers are grounded in their real ICP breakdown, not guessed.
- **Lookalikes / retargeting:** not available at launch, same cold-start caveat as the other two products. Once real traffic exists, retarget non-clickers with a different tab-zero product rather than another Lumesoon ad — Writesonic or Surfer SEO would be the natural adjacent picks once either is live, given the audience overlap with content creators.
- **Exclusions:** none possible at launch.

## 5. Budget & testing approach

Same structure as the other two live campaigns, applied consistently:

- **Before spending anything:** confirm the `AffiliateClick` pixel event fires on this page's two CTAs with `content_name: "lumesoon"`.
- **No defensible target CPA yet** — same caveat as Systeme.io and ClickFunnels.
- **Structure:** Testing campaign (~20% of budget, all 4 angles) → Scaling campaign (~80%, empty until an angle graduates).
- **Delivery check (day 7):** expected spend per angle ≈ (daily budget ÷ 4 active ads) × 7 × 0.5.
- **Judging window:** 1,000+ impressions minimum.
- **Scaling discipline:** +20% every 5 days, never +30%+.
- **Fatigue watch:** cold-prospecting frequency 1.0–2.5 safe, 2.5–4.0 warning, >4.0 retire.
- **Portfolio note:** three products now have live campaigns (Systeme.io, ClickFunnels, Lumesoon) — once all three have real data, compare cost-per-`AffiliateClick` across all three before concentrating budget, rather than optimizing each in isolation.

## 6. Compliance checklist (from the program's own affiliate restrictions)

- [x] Real brand name never appears in any ad image, primary text, headline, or description — confirmed across all 4 creatives and all copy above, including the testimonial-stack fix described in section 2.
- [x] Destination URL is the bridge page (`tab-zero.com/ai-voice-cloning`), never a raw affiliate link.
- [x] Paid social explicitly allowed by this program, but only to tab-zero's own landing page — confirmed the bridge page is the destination, not a raw link.
- [x] Bridge page discloses the affiliate relationship (chromeless header, footer link to `/disclosure`).
- [x] One landing page for this program only.
- [x] Real affiliate link already live in `src/lib/products.ts` (`affiliateUrl`) — no placeholder-link blocker for this one, unlike ClickFunnels was until its link arrived.
- [ ] Brand bidding on Google Ads is explicitly prohibited by this program — not applicable here, hold the rule if this program is ever extended past Meta.

## 7. Tracking

- Extend the shared Meta Pixel + Conversions API `AffiliateClick` event to this page's two CTAs, `content_name: "lumesoon"`.
- UTM parameters per angle:
  `https://tab-zero.com/ai-voice-cloning?utm_source=meta&utm_medium=paid-social&utm_campaign=lumesoon&utm_content=angle1-numbered-list`
  Swap `utm_content` per angle (`angle2-feature-spotlight`, `angle3-testimonial-stack`, `angle4-faq-card`).
- No commission dashboard reconciliation done yet — add this once the campaign has real spend, same as the other two products.
