# Redactable — Meta/Facebook Ads Publishing Plan

**Program:** Redactable | 20% recurring commission for 12 months | brand bidding not explicitly published — treat as prohibited by default; paid traffic not explicitly banned, but verify directly with their affiliate team before scaling spend (per the original program-restrictions doc)
**Landing page:** https://tab-zero.com/document-redaction (chromeless bridge page, single CTA)
**Destination in every ad:** the bridge page above — never the raw affiliate link
**Brand name in ad creative:** never — grep-checked, see section 2

---

## 1. Campaign objective

- **Objective:** Conversions, optimizing toward a custom `AffiliateClick` event fired on the bridge page's own CTA clicks — same shared-pixel approach as the four other live campaigns.
- **Funnel role:** cold traffic → bridge page → Redactable free trial (no credit card required).
- **Before scaling spend specifically on this program:** the original restrictions doc flags Redactable's paid-traffic policy as unconfirmed — worth a direct check with their affiliate team before moving past the Testing-campaign budget tier, even though nothing here blocks starting small.

## 2. Ad creative set (this folder) — four more new mechanics

Continuing the standing rule to vary formats across products — none of these four repeat a mechanic already used elsewhere in this rollout (chaos/clarity, stat-callout, POV-panel, press-mention, includedPlan-checklist, credibilityWall, numbered-list, feature-spotlight/hub-and-spoke, testimonial-stack, FAQ-card, review-card, headline-statement, widget-showcase-mockup, or speed-timer):

| File | Mechanic | Grounded in |
|---|---|---|
| `angle1-before-after.png` | **Before/After document mockup** — two mini "documents" side by side, one with a dashed/hatched black-box overlay, one with a clean solid true-removal bar | The real product distinction (overlay vs. permanent removal) — first literal document-visual metaphor used in this rollout |
| `angle2-compliance-badges.png` | **Compliance Badge Wall** — two shield/checkmark seals for SOC 2 Type II and HIPAA, plus a use-case tag row | Real, verifiable certifications from Redactable's own site — dark mode |
| `angle3-case-study-stat.png` | **Case-Study Stat** — a specific "1,000 pages → 30+ hours saved" number pair plus the real testimonial it's drawn from | A real, verbatim customer story (Ayida G.), not an abstract platform-wide stat like the stat-callouts used for other products |
| `angle4-process-strip.png` | **Process Strip** — a vertical connected 4-step flow (Upload → AI finds → Approve → Download) | The real 4-step process from Redactable's own site |

**Compliance check performed before finalizing:** grepped every ad HTML file in this folder for the string "Redactable" — zero matches. Also deliberately avoided a Competitor Callout–style ad naming "Adobe" directly, even though Redactable's own site publishes a "98% faster than Adobe" claim and a public comparison page — comparative ads naming a specific third-party competitor invite platform restrictions and trademark risk we don't need here; the 98%-faster claim is used only on the landing page (where it's sourced and attributed), not in any ad.

## 3. Ad copy per angle (Meta limits: primary text ~125 visible / headline ~40 / description ~30)

### Angle 1 — Before/After
- **Primary text:** "A black box you can lift right out of the file, or text that's actually gone. See the difference." (100 chars)
- **Headline:** "Real Redaction vs. a Black Box" (31 chars)
- **Description:** "See how it works" (17 chars)

### Angle 2 — Compliance Badges
- **Primary text:** "SOC 2 Type II certified. HIPAA compliant. Built for the documents you can't afford to get wrong." (99 chars)
- **Headline:** "SOC 2 & HIPAA Compliant Redaction" (34 chars)
- **Description:** "Built for legal & healthcare" (28 chars)

### Angle 3 — Case-Study Stat
- **Primary text:** "1,000 pages of sensitive records. 30+ hours saved. One real redaction project, done with AI." (95 chars)
- **Headline:** "30+ Hours Saved on One Project" (30 chars)
- **Description:** "Read the real story" (19 chars)

### Angle 4 — Process Strip
- **Primary text:** "Upload. AI finds the sensitive data. Approve it. Download. Redaction that used to take days now takes minutes." (112 chars)
- **Headline:** "4 Steps to a Properly Redacted File" (36 chars)
- **Description:** "No credit card required" (24 chars)

Every number and quote traces to Redactable's own published homepage (98% faster than Adobe, SOC 2 Type II, HIPAA compliant, the real 4-step process, the Ayida G. testimonial) — nothing invented.

## 4. Audience & targeting (2026 Andromeda-era Meta)

Same corrected approach as the four other live campaigns:

- **Geo:** US, UK, Canada, Australia (Tier-1 English), one combined campaign — consistent with the rest of the portfolio. Redactable's real use cases (legal, healthcare, government, FOIA) are especially US-regulation-flavored (HIPAA is a US statute) — worth watching whether US traffic outperforms the other three geos disproportionately once data comes in, and potentially narrowing to US-only if so.
- **Targeting filters:** those four countries only, no interest/behavior layering.
- **Where the audience knowledge goes:** into the creative — four angles covering trust/compliance, visual proof of the core mechanism, a specific relatable case study, and process/simplicity.
- **Identity-trigger keyword test:** once a winner emerges, duplicate with a niche identifier grounded in Redactable's own published use cases — "...for law firms," "...for healthcare teams," "...for FOIA requests," "...for real estate closings."
- **Lookalikes / retargeting:** not available at launch. Once real traffic exists, retarget non-clickers with a different tab-zero product per the standing rule.
- **Exclusions:** none possible at launch.

## 5. Budget & testing approach

Same structure as the four other live campaigns:

- **Before spending anything:** extend the shared `AffiliateClick` pixel event to this page's two CTAs with `content_name: "redactable"`.
- **No defensible target CPA yet** — same caveat as the other four products.
- **Structure:** Testing campaign (~20% of budget, all 4 angles) → Scaling campaign (~80%, empty until an angle graduates).
- **Delivery check (day 7):** expected spend per angle ≈ (daily budget ÷ 4 active ads) × 7 × 0.5.
- **Judging window:** 1,000+ impressions minimum.
- **Scaling discipline:** +20% every 5 days, never +30%+.
- **Fatigue watch:** cold-prospecting frequency 1.0–2.5 safe, 2.5–4.0 warning, >4.0 retire.
- **Portfolio note:** this is the fifth and final product from the original 9 to get a live campaign (after Systeme.io, ClickFunnels, Lumesoon, Elfsight) — a good point for a full cross-product review of cost-per-`AffiliateClick` before deciding where to concentrate ongoing budget.

## 6. Compliance checklist (from the program's own affiliate restrictions)

- [x] Real brand name never appears in any ad image, primary text, headline, or description — confirmed via grep across all 4 HTML files (see section 2) and all copy above.
- [x] No competitor (Adobe) named in any ad, despite it being available in Redactable's own on-site messaging — comparative-ad and trademark risk avoided deliberately.
- [x] Destination URL is the bridge page (`tab-zero.com/document-redaction`), never a raw affiliate link.
- [x] Bridge page discloses the affiliate relationship (chromeless header, footer link to `/disclosure`).
- [x] One landing page for this program only.
- [x] Real affiliate link already live in `src/lib/products.ts` (`affiliateUrl`).
- [ ] **Paid traffic policy unconfirmed** by the program itself (per the original restrictions doc) — verify directly with Redactable's affiliate team before scaling past the initial Testing-campaign budget.
- [ ] Brand bidding not explicitly published — treat as prohibited by default if this is ever extended to Google Ads.

## 7. Tracking

- Extend the shared Meta Pixel + Conversions API `AffiliateClick` event to this page's two CTAs, `content_name: "redactable"`.
- UTM parameters per angle:
  `https://tab-zero.com/document-redaction?utm_source=meta&utm_medium=paid-social&utm_campaign=redactable&utm_content=angle1-before-after`
  Swap `utm_content` per angle (`angle2-compliance-badges`, `angle3-case-study-stat`, `angle4-process-strip`).
- No commission dashboard reconciliation done yet — add once the campaign has real spend, same as the other four products.
