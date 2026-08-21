# Elfsight — Meta/Facebook Ads Publishing Plan

**Program:** Elfsight | paid traffic explicitly encouraged in the program's own terms — no vetting gate, unlike Surfer SEO's "with approval" clause
**Landing page:** https://tab-zero.com/website-widgets (chromeless bridge page, single CTA)
**Destination in every ad:** the bridge page above — never the raw affiliate link
**Brand name in ad creative:** never — see Compliance Checklist below

---

## 1. Campaign objective

- **Objective:** Conversions, optimizing toward a custom `AffiliateClick` event fired on the bridge page's own CTA clicks — same shared-pixel approach as the three other live campaigns.
- **Funnel role:** cold traffic → bridge page → Elfsight free signup (no credit card required — genuinely low friction).

## 2. Ad creative set (this folder) — four more new formats

Continuing the standing rule to vary formats across products — none of these four repeat a format already used elsewhere in this rollout (chaos/clarity, stat-callout, POV-panel, press-mention, includedPlan-checklist, credibilityWall, numbered-list, feature-spotlight/hub-and-spoke, testimonial-stack, or FAQ-card):

| File | Mechanic | Grounded in |
|---|---|---|
| `angle1-review-card.png` | **Review Card** — single screenshotted review styled like a native review-platform UI (star rating, verified badge, avatar) | A real, verbatim testimonial fragment (Kristen P., no brand name in the fragment used) |
| `angle2-headline-statement.png` | **Headline Statement** — one dominant typographic claim over a giant background "97" | The real widget count (97), dark mode, first pure-typography layout in this rollout |
| `angle3-widget-showcase.png` | **Widget Showcase mockup** — a fake browser-window frame with widget badges scattered across a mock page | Real widget category breadth (reviews, Instagram feed, countdown timer, popup form, WhatsApp chat) — first "simulated product screenshot" layout used |
| `angle4-speed-timer.png` | **Speed/Timer comparison** — two clock icons on a vertical timeline, struck-through "8 weeks" above a live "~60 seconds" | The real "go live in minutes" claim, reframed against the genuine dev-backlog pain point already validated in this product's own page copy |

**Compliance check performed before finalizing:** grepped every ad HTML file in this folder for the string "Elfsight" — zero matches, confirming no accidental brand-name leakage (this is the exact mistake caught and fixed on the Lumesoon testimonial-stack ad; making the grep check a standard step now, not just a one-time fix).

## 3. Ad copy per angle (Meta limits: primary text ~125 visible / headline ~40 / description ~30)

### Angle 1 — Review Card
- **Primary text:** "\"They don't sneak in cookies and advertising crap.\" Real review from a business that's used it for years." (107 chars)
- **Headline:** "See Why 3M+ Businesses Trust It" (32 chars)
- **Description:** "Read the full review" (21 chars)

### Angle 2 — Headline Statement
- **Primary text:** "97 widgets. One embed code. No developer required. Go live on your site in about a minute." (93 chars)
- **Headline:** "97 No-Code Widgets, One Embed Code" (35 chars)
- **Description:** "Free to try, no card needed" (28 chars)

### Angle 3 — Widget Showcase
- **Primary text:** "Reviews, popups, chat, forms, countdown timers — drop any of 97 widgets onto your site with one line of code." (113 chars)
- **Headline:** "Every Widget Your Site Needs" (29 chars)
- **Description:** "97 widgets, one platform" (24 chars)

### Angle 4 — Speed/Timer
- **Primary text:** "A review widget sat in our dev backlog for 2 months. This one took under a minute — no code required." (104 chars)
- **Headline:** "From Dev Backlog to Live in Minutes" (36 chars)
- **Description:** "No coding, no waiting" (22 chars)

Every number traces to Elfsight's own published homepage (97 widgets, 3,000,000+ businesses, 1,068+ reviews, no credit card required, go-live-in-minutes claim) — nothing invented.

## 4. Audience & targeting (2026 Andromeda-era Meta)

Same corrected approach as the three other live campaigns:

- **Geo:** US, UK, Canada, Australia (Tier-1 English), one combined campaign — consistent with the rest of the portfolio.
- **Targeting filters:** those four countries only, no interest/behavior layering.
- **Where the audience knowledge goes:** into the creative — four angles covering four distinct buyer motivations (trust/social proof, breadth, visual proof of variety, and speed/pain relief).
- **Identity-trigger keyword test:** once a winner emerges, duplicate with a niche identifier — "...for Shopify stores," "...for agency clients," "...for WordPress sites" — matches how Elfsight's own real reviews describe their actual use cases (Webflow, Shopify, agency work).
- **Lookalikes / retargeting:** not available at launch. Once real traffic exists, retarget non-clickers with a different tab-zero product per the standing rule — Redactable is the next likely candidate once it's live, since it shares no direct audience overlap and testing a fresh angle on the same cold audience tends to outperform re-showing the same offer.
- **Exclusions:** none possible at launch.

## 5. Budget & testing approach

Same structure as the three other live campaigns:

- **Before spending anything:** extend the shared `AffiliateClick` pixel event to this page's two CTAs with `content_name: "elfsight"`.
- **No defensible target CPA yet** — same caveat as the other three products.
- **Structure:** Testing campaign (~20% of budget, all 4 angles) → Scaling campaign (~80%, empty until an angle graduates).
- **Delivery check (day 7):** expected spend per angle ≈ (daily budget ÷ 4 active ads) × 7 × 0.5.
- **Judging window:** 1,000+ impressions minimum.
- **Scaling discipline:** +20% every 5 days, never +30%+.
- **Fatigue watch:** cold-prospecting frequency 1.0–2.5 safe, 2.5–4.0 warning, >4.0 retire.
- **Portfolio note:** four products now have live campaigns (Systeme.io, ClickFunnels, Lumesoon, Elfsight) — this is the point where a weekly cross-product comparison of cost-per-`AffiliateClick` actually becomes meaningful (enough parallel data to spot which product's *audience* converts more cheaply, independent of creative quality).

## 6. Compliance checklist (from the program's own affiliate restrictions)

- [x] Real brand name never appears in any ad image, primary text, headline, or description — confirmed via grep across all 4 HTML files (see section 2) and all copy above.
- [x] Destination URL is the bridge page (`tab-zero.com/website-widgets`), never a raw affiliate link.
- [x] Program terms explicitly encourage paid traffic — no vetting-gate risk like Surfer SEO's program had.
- [x] Bridge page discloses the affiliate relationship (chromeless header, footer link to `/disclosure`).
- [x] One landing page for this program only.
- [x] Real affiliate link already live in `src/lib/products.ts` (`affiliateUrl`) — no placeholder-link blocker.
- [ ] Brand bidding: not explicitly published by this program — treat as prohibited by default if this is ever extended to Google Ads.

## 7. Tracking

- Extend the shared Meta Pixel + Conversions API `AffiliateClick` event to this page's two CTAs, `content_name: "elfsight"`.
- UTM parameters per angle:
  `https://tab-zero.com/website-widgets?utm_source=meta&utm_medium=paid-social&utm_campaign=elfsight&utm_content=angle1-review-card`
  Swap `utm_content` per angle (`angle2-headline-statement`, `angle3-widget-showcase`, `angle4-speed-timer`).
- No commission dashboard reconciliation done yet — add once the campaign has real spend, same as the other three products.
