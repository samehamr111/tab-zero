# Systeme.io — Meta/Facebook Ads Publishing Plan

**Program:** Systeme.io | 60% lifetime recurring commission | instant, free approval
**Landing page:** https://tab-zero.com/all-in-one-marketing (chromeless bridge page, single CTA)
**Destination in every ad:** the bridge page above — never the raw affiliate link
**Brand name in ad creative:** never — see Compliance Checklist below

---

## 1. Campaign objective

- **Objective:** Conversions (or Traffic, if the pixel doesn't have enough signup events yet to leave Conversions out of learning phase)
- **Conversion event:** outbound click to Systeme.io from the bridge page (proxy event) until a pixel/conversion API is wired up for actual signups
- **Funnel role:** cold traffic → bridge page → Systeme.io signup. tab-zero.com/all-in-one-marketing is the only destination; the bridge page is what carries the disclosure and reveals the real brand name.

## 2. Ad creative set (this folder)

| File | Angle | Best placement |
|---|---|---|
| `angle1-everything-included.png` | Value-density checklist — "8 tools, 1 free plan" | Feed (static, scannable) |
| `angle2-chaos-clarity.png` | Chaos-tags → clarity-card contrast | Feed, retargeting |
| `angle3-pov-tabs.png` | Relatable POV ("6 tabs open, still not launched") + 500K+ stat | Feed, Reels-adjacent |
| `angle4-stat-callout.png` | Bold stat callout, dark mode | Stories/Reels (high contrast reads well full-screen) |

All 1080×1080 (Feed-safe square). For Stories/Reels placements, re-export `angle4-stat-callout` at 1080×1920 before launch — it's the only one built dark/bold enough to hold up full-screen; the other three are feed-first.

## 3. Ad copy per angle (Meta character limits: primary text ~125 visible / headline ~40 / description ~30)

### Angle 1 — Everything Included
- **Primary text:** "Funnels, email, courses, a CRM, and more — bundled into one plan that's free to start. No card required." (109 chars)
- **Headline:** "One Free Plan, Eight Tools Included" (36 chars)
- **Description:** "No credit card required" (24 chars)

### Angle 2 — Chaos → Clarity
- **Primary text:** "Stop paying for a funnel tool, an email tool, a course host, and a CRM separately. One free plan replaces all of it." (118 chars)
- **Headline:** "Replace 6 Subscriptions With $0" (32 chars)
- **Description:** "Free plan, no card needed" (26 chars)

### Angle 3 — POV Tabs
- **Primary text:** "Six tabs open, six logins, still not launched. 500,000+ entrepreneurs run their business on one free plan instead." (116 chars)
- **Headline:** "500,000+ Run On One Free Plan" (30 chars)
- **Description:** "See the all-in-one platform" (28 chars)

### Angle 4 — Stat Callout
- **Primary text:** "500,000+ entrepreneurs already run funnels, email, and courses from one free plan. No credit card required to start." (119 chars)
- **Headline:** "Join 500,000+ On One Free Plan" (31 chars)
- **Description:** "Free to start, no card needed" (30 chars)

Every claim above traces to Systeme.io's own published homepage copy (free-forever plan, no card required, "Powering 500,000+ entrepreneurs") — nothing invented.

## 4. Audience & targeting (2026 Andromeda-era Meta — corrected)

**This section was rewritten.** The earlier draft used interest-stack targeting (online course creation, email marketing software, "digital marketing," entrepreneurship). Under Meta's current Andromeda algorithm, stacking interest filters on Meta actively *hurts* delivery — the platform now rewards broad targeting paired with specific creative, because the algorithm finds the right person far better than manual interest filters do. The correct split is roughly **80% of audience knowledge → into the creative, 20% → into targeting filters** (source: this project's `ads` skill, "Modern Meta playbook").

- **Geo:** US, UK, Canada, Australia (Tier-1 English) — one campaign covering all four, not four separate campaigns; Meta will naturally allocate more delivery to whichever geo performs, and splitting them at this budget size would just recreate the ad-count/starvation problem described below. Language: English.
- **Targeting filters:** the four countries above only. Do not layer interests, behaviors, or demographics on top — that narrows delivery and raises CPMs for no benefit at this algorithm generation.
- **Where the audience knowledge actually goes — the creative itself:** each angle already encodes who it's for (funnel/email/course/CRM juggling, "6 tabs open," solo-creator framing). That targeting work is done; don't duplicate it in the filters.
- **Identity-trigger keyword test (once angle 1 or 2 shows signal):** duplicate the winning ad and insert a niche identifier into the headline/body — e.g. "...for course creators" / "...for coaches" / "...for local service businesses." This acts as both a relevance trigger for the viewer and a targeting signal for Andromeda, and typically outperforms adding a manual interest filter for the same audience.
- **Lookalikes:** still worth building, but only once there's a real source audience — minimum 100 events, ideally 1,000+, sourced from actual outbound-clicks (see the measurement gap below), not from impressions or reach.
- **Retargeting — genuinely not available yet.** This is a cold-start account with no prior visitors, so there is no custom audience to retarget *at launch*. Retargeting becomes viable only after the bridge page has accumulated real traffic (Meta's website-visitor custom audiences look back up to 180 days). Once it does: don't just re-show the same offer — the skill's retargeting framework specifically recommends retargeting non-converters with a *different* offer. Since tab-zero has 8 other product bridge pages, the natural version of this once traffic exists: retarget Systeme.io-page visitors who didn't click through with a different tool's bridge page (e.g. Surfer SEO or Writesonic), not another Systeme.io ad.
- **Exclusions:** exclude confirmed customers/converters once that data exists (avoids wasted spend and self-referral risk under Systeme.io's terms) — nothing to exclude at launch since there's no existing audience.

## 5. Budget & testing approach (corrected)

**Important caveat this plan can't resolve on its own:** the skill's budget/kill-rule framework (TCPL — target cost per qualified lead) is built for funnels with a trackable qualified-conversion event and known deal economics. This is a single-tier affiliate click funnel with no CRM and no visibility into actual Systeme.io signups from our side — so there is no defensible target CPA to anchor hard kill/scale thresholds to yet. Don't treat any dollar figure below as a real budget recommendation; treat it as a starting structure to generate the missing data.

- **Before spending anything:** install a Meta Pixel (and ideally Conversions API) on the tab-zero site, and fire a custom event (e.g. `AffiliateClick`) on the two "Start My Free Trial" CTA clicks on the bridge page — that's the one conversion signal we actually control. Optimize the campaign toward that event, not toward Systeme.io's own signup (which we can't see). Periodically reconcile ad spend against the real commission dashboard to sanity-check that clicks are actually converting off-platform.
- **Geo mix affects pacing, not just targeting:** US CPMs run meaningfully higher than UK/Canada/Australia — expect the blended CPM across all four to sit below a US-only campaign but above what any one non-US market alone would cost, and expect Meta's delivery to skew spend toward whichever geo is cheapest to convert rather than splitting evenly. Don't read an uneven country split as a problem to fix — read it against the day-7 delivery check below like any other signal.
- **Structure — two campaigns over the same (broad) audience, not one flat CBO with 4 equal-weighted ads:**
  - *Testing campaign (~20% of budget):* all 4 angles live here first. This is a protected budget so new creative isn't starved by whichever angle Meta happens to favor early — the earlier plan's "one ad set, 4 ads, equal budget" would let CBO's own bias suppress 2–3 of the angles before they get a fair read.
  - *Scaling campaign (~80% of budget):* stays empty until an angle graduates out of testing.
- **Delivery check (day 7):** for each angle, expected spend ≈ (daily budget ÷ 4 active ads) × 7 × 0.5. An angle spending meaningfully under that by day 7 has been deprioritized by Meta's own pre-screening — don't wait longer to iterate its hook/visual.
- **Judging window:** let each ad clear 1,000+ impressions before any kill/keep call — don't judge on day 2.
- **Scaling discipline once a winner is clear:** increase budget +20% at a time, no more, and wait 3–5 days between increases — a 30%+ jump resets Meta's delivery learning and throws away the signal you just built.
- **Fatigue watch:** for a cold-prospecting campaign, frequency 1.0–2.5 is safe, 2.5–4.0 is a warning (stage a fresh execution of the winning concept), >4.0 means retire that creative rather than keep pushing it.
- **After the first real read:** keep the top 1–2 angles, retire the rest, and — per the skill's creative-volume principle — don't stop at 4 static angles. Andromeda rewards a steady drip of fresh creative over a single polished batch; budget roughly an hour a week to produce 1–2 new static variations on whatever's winning (new hook first, then visual treatment — those two levers matter far more than new body copy).

## 6. Compliance checklist (from the program's own affiliate restrictions)

- [x] Real brand name never appears in any ad image, primary text, headline, or description — confirmed across all 4 creatives and all copy above.
- [x] Destination URL is the bridge page (`tab-zero.com/all-in-one-marketing`), never a raw affiliate link.
- [x] Bridge page discloses the affiliate relationship (chromeless header shows "Independent review · affiliate link"; footer links to `/disclosure`).
- [x] One landing page for this program only — not mixed with any other product's offer.
- [ ] **Before spending real budget:** confirm Systeme.io's current affiliate terms haven't changed since this plan was written (self-referral is explicitly disallowed — don't click your own ads to "test" the funnel from an account tied to your own affiliate cookie).
- [ ] Brand bidding: not applicable to Meta (that's a Google Ads / search concern), but if this program is ever extended to Google Ads, do not bid on "Systeme.io," "Systeme io," or close misspellings as keywords.

## 7. Tracking

- **Meta Pixel + Conversions API on the bridge page itself** (not on Systeme.io's domain, which we don't control) — fire a custom `AffiliateClick` event on both "Start My Free Trial" CTAs. This is the real optimization event for the campaign; see the budget section above for why (we have no visibility into actual Systeme.io signups from our side).
- Add UTM parameters per angle so performance is attributable at the creative level, e.g.:
  `https://tab-zero.com/all-in-one-marketing?utm_source=meta&utm_medium=paid-social&utm_campaign=systeme-io&utm_content=angle1-everything-included`
- Swap `utm_content` per angle (`angle2-chaos-clarity`, `angle3-pov-tabs`, `angle4-stat-callout`).
- The affiliate link is now live in `src/lib/products.ts` (`affiliateUrl`) — the bridge page's CTA buttons carry it automatically, so no ad creative changes are needed since ads never point to it directly.
- Periodically cross-check ad spend against Systeme.io's real commission dashboard — it's the only ground truth for whether `AffiliateClick` events are actually converting into signups, since the pixel can't see past our own domain.
