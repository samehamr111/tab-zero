export type Stat = { k: string; v: string; unit?: string; tone?: "good" | "warn" };
export type Feature = { num: string; title: string; body: string; badge?: string };
export type Step = { title: string; body: string };
export type Faq = { q: string; a: string };

export type Category = {
  key: string;
  label: string;
};

export const categories: Category[] = [
  { key: "funnels", label: "Funnel & Page Builders" },
  { key: "ai", label: "AI Content Tools" },
  { key: "outreach", label: "Outreach & Growth" },
  { key: "docs", label: "Productivity & Docs" },
];

export type Product = {
  slug: string;
  name: string;
  // Set to false to pull a product out of the homepage catalog, sitemap, disclosure list, and
  // static generation entirely (its route 404s) without deleting the entry — e.g. an affiliate
  // program that requires an application we haven't been approved for yet, or one that's been
  // discontinued. Flip back to true (or omit) to relist. Defaults to active when omitted.
  active?: boolean;
  category: string; // Category.key
  categoryTag: string; // short label shown on the card
  cardDescription: string;
  fitTag: string;
  affiliateLinkKey: string;
  // Real tracking URL once the program is approved and the link is issued. Until then,
  // CTAs render as inert placeholders (href="#") using affiliateLinkKey for identification.
  affiliateUrl?: string;
  // Overrides for when the real affiliate link doesn't land on a direct trial/account signup
  // (e.g. a webinar registration or a branded front-end offer) — keeps CTA copy honest about
  // what actually happens after the click. Defaults to "Start My Free Trial" / "to complete signup".
  ctaLabel?: string;
  microNoteAction?: string;
  seo: { title: string; description: string }; // dedicated, length-capped title/description for <title> and meta description
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    trustLine: string;
    mockTitle: string;
    stats: Stat[];
    bars: number[];
  };
  problems: string[];
  // Default "chaos vs clarity" contrast module. Omit when includedPlan is set instead.
  chaosTags?: string[];
  clarityLabel?: string;
  // Alternate contrast module for products whose real differentiator is breadth/value-density
  // rather than "escaping a messy stack" (e.g. all-in-one platforms). Renders a dense
  // checklist grid + a price callout instead of the chaos-tags/clarity-card module.
  includedPlan?: {
    heading: string;
    note: string;
    items: string[];
    priceCallout: string;
  };
  solutionEyebrow: string;
  solutionH2: string;
  features: Feature[];
  stepsH2: string;
  steps: Step[];
  faqs: Faq[];
  // Default single-quote proof module. Omit when credibilityWall is set instead.
  // source: set when a quote is reproduced from the vendor's own published testimonials
  // rather than gathered independently by tab-zero — must stay visible in attribution.
  proof?: { quote: string; name: string; role: string; source?: string };
  // Alternate proof module for products whose real differentiator is aggregate credibility
  // (rating, review count, press mentions) rather than a single representative quote —
  // used when named-testimonial wording can't be verified verbatim (avoid misquoting real people).
  credibilityWall?: {
    rating: { score: string; count: string };
    press: string[];
    note: string;
  };
  finalCta: { h2: string; body: string; note: string };
};

export const products: Product[] = [
  {
    slug: "funnel-builder",
    name: "ClickFunnels",
    category: "funnels",
    categoryTag: "Funnel Builder",
    cardDescription:
      "Build a full sales funnel — pages, order bumps, upsells — without stitching together five separate tools.",
    fitTag: "Best for: sellers building a full funnel",
    affiliateLinkKey: "CLICKFUNNELS_LIVE",
    affiliateUrl: "https://www.funnelhackingsecrets.com?cf_affiliate_id=4330057&affiliate_id=4330057",
    ctaLabel: "Watch the Free Training",
    microNoteAction: "to register for the free training",
    seo: {
      title: "ClickFunnels: Build a Funnel Without a Dev Team",
      description:
        "ClickFunnels review: build pages, order bumps, upsells, and follow-up in one funnel builder — no developer required.",
    },
    hero: {
      eyebrow: "Funnel building, without the dev backlog",
      h1: "Stop stitching five tools together just to launch one funnel.",
      sub: "Landing page in one tool, checkout in another, email in a third, and a developer on retainer to connect them. ClickFunnels puts the page, the order bumps, the upsells, and the follow-up in one build — so a funnel that used to take a sprint takes an afternoon.",
      trustLine: "1M+ funnels built by 100,000+ users, rated 4.8/5 from 1,643 reviews.",
      mockTitle: "Funnel Overview",
      stats: [
        { k: "Funnel steps", v: "4" },
        { k: "Conversion", v: "18.4", unit: "%", tone: "good" },
        { k: "Order bumps", v: "2", tone: "warn" },
      ],
      bars: [42, 58, 50, 70, 64, 80, 76, 92],
    },
    problems: [
      "Your \"funnel\" is really a page builder, a checkout tool, and an email platform, none of which talk to each other.",
      "Every new offer means asking a developer to wire up another integration.",
      "You don't know if an order bump or upsell would actually move revenue — there's no easy way to test it.",
      "Launching a new offer takes days when it should take an afternoon.",
    ],
    chaosTags: ["Page builder", "Checkout tool", "Email platform", "Zapier glue", "Freelance developer", "Spreadsheet of link IDs"],
    clarityLabel: "One funnel builder",
    solutionEyebrow: "What ClickFunnels actually does",
    solutionH2: "Page, offer, and follow-up — built as one funnel, not three tools.",
    features: [
      { num: "01", title: "Drag-and-drop funnel builder", body: "Build multi-step funnels from templates built for a specific goal — webinar, tripwire, membership — not blank pages you have to design from scratch." },
      { num: "02", title: "Order bumps & upsells", body: "Add a one-click upsell or order bump without touching checkout code — the kind of revenue most single-purpose page builders can't add at all." },
      { num: "03", title: "Built-in email & follow-up", body: "Follow-up sequences fire based on what someone actually did in the funnel, not a CSV export into a separate email tool." },
      { num: "04", title: "Split testing", body: "Test a headline, a price point, or an entire funnel step against another — and see which one actually wins, not which one you liked more." },
      { num: "05", title: "Funnel analytics", body: "See where people drop off step-by-step, so you know exactly which part of the funnel to fix first — not just a top-line conversion rate.", badge: "2.0" },
    ],
    stepsH2: "Three steps to your first live funnel",
    steps: [
      { title: "Pick a funnel template", body: "Start from a template built for your actual goal instead of a blank canvas." },
      { title: "Add your offer, bump, and upsell", body: "Drop your product in, set the order bump and upsell, and connect payment — no separate checkout tool." },
      { title: "Publish and watch the numbers", body: "Go live, then track conversion at every step so you know exactly where to improve next." },
    ],
    faqs: [
      { q: "Is this just for big info-product sellers?", a: "No. Solo founders and small e-commerce sellers use it for the same reason — replacing four disconnected tools with one funnel builder." },
      { q: "I already have a landing page tool — why switch?", a: "A landing page tool builds one page. ClickFunnels builds the whole path — page, order bump, upsell, and follow-up — as one connected sequence instead of pages you have to wire together yourself." },
      { q: "What does it cost?", a: "Current plans and pricing are shown when you start your free trial — we'd rather send you to the source than post a number here that goes stale." },
      { q: "What happens when I click through?", a: "You'll register for a free training that walks through how the funnel builder works before you commit to anything — it's not an immediate account signup." },
      { q: "Do I need to know how to code?", a: "No — it's built as a drag-and-drop editor specifically so funnels don't require a developer to build or maintain." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because it solves a specific problem well, not because it's the only option." },
    ],
    credibilityWall: {
      rating: { score: "4.8", count: "1,643 reviews" },
      press: ["Forbes", "USA Today", "Entrepreneur", "Inc. 5000", "Yahoo Finance"],
      note: "Used by 100,000+ people to build over 1 million funnels — one of the most reviewed names in the category.",
    },
    finalCta: {
      h2: "See how it works before you commit to anything.",
      body: "Watch the free training and see exactly how the page, order bump, and follow-up come together in one build.",
      note: "You'll be taken to register for the free training.",
    },
  },

  {
    slug: "all-in-one-marketing",
    name: "Systeme.io",
    category: "funnels",
    categoryTag: "All-in-One Marketing",
    cardDescription:
      "Funnels, email, courses, community, and a CRM in one free-forever plan — built for people replacing a stack of tools with one.",
    fitTag: "Best for: replacing 4+ tools on a budget",
    affiliateLinkKey: "SYSTEME_IO_LIVE",
    affiliateUrl: "https://systeme.io/?sa=sa0279569415a406ae5a5dff77de0f7b65607cc19f",
    seo: {
      title: "Systeme.io: One Free Plan Instead of Six Tools",
      description:
        "Systeme.io review: funnels, email, courses, community, CRM, and more on one free-forever plan — no credit card required.",
    },
    hero: {
      eyebrow: "One free plan, not six separate bills",
      h1: "Stop paying for a funnel tool, an email tool, a course host, and a CRM — separately.",
      sub: "Systeme.io bundles funnel building, email marketing, online courses, a community, CRM pipelines, and affiliate management into a single free-forever plan — no credit card required to start. It's the platform behind more than 500,000 entrepreneurs' online businesses, not one more point tool bolted onto the ones you already pay for.",
      trustLine: "Powering 500,000+ entrepreneurs, on a free plan that doesn't require a credit card to start.",
      mockTitle: "Business Overview",
      stats: [
        { k: "Tools included", v: "6" },
        { k: "Starting cost", v: "0", unit: "$/mo", tone: "good" },
        { k: "Active funnels", v: "3" },
      ],
      bars: [36, 48, 44, 60, 56, 72, 68, 84],
    },
    problems: [
      "You're paying for a funnel builder, an email platform, a course host, and a CRM — separately, every month.",
      "Contact data has to be exported and re-imported every time you connect one tool to another.",
      "You want to run a webinar, open a community, or sell a physical product, and that means yet another subscription.",
      "Every tool you add is one more login, and one more thing that can quietly break.",
    ],
    includedPlan: {
      heading: "What's actually in the free plan",
      note: "No credit card required to start. This is the real feature list from Systeme.io's own site — not a marketing summary.",
      items: [
        "Sales funnels",
        "Email marketing & automation",
        "Website builder",
        "Online courses",
        "Community builder",
        "CRM pipelines",
        "Affiliate management",
        "Webinars",
        "Booking calendar",
        "SMS marketing",
        "Physical products",
        "White-label option",
      ],
      priceCallout: "$0/month to start — no credit card required",
    },
    solutionEyebrow: "What Systeme.io actually includes",
    solutionH2: "Funnels, email, courses, community, and a CRM — under one free plan.",
    features: [
      { num: "01", title: "Funnel & website builder", body: "Build funnels and full websites without a separate page-builder subscription." },
      { num: "02", title: "Email marketing & automation", body: "Send broadcasts and build automated sequences off the same contact list your funnels already use — no export required." },
      { num: "03", title: "Courses & community", body: "Host paid courses and a members-only community without a separate LMS or community platform." },
      { num: "04", title: "CRM pipelines & affiliate program", body: "Track deals through a CRM pipeline and run your own affiliate program from the same dashboard." },
      { num: "05", title: "Webinars, bookings & SMS", body: "Run webinars, take bookings, and send SMS campaigns without bolting on three more tools.", badge: "Included" },
    ],
    stepsH2: "Three steps to consolidating your stack",
    steps: [
      { title: "Start on the free-forever plan", body: "Set up your first funnel and email list without entering a card." },
      { title: "Move your list, course, or community in", body: "Import contacts and content once — everything shares the same data after that." },
      { title: "Turn on automation", body: "Set up sequences, CRM pipelines, and your affiliate program from the same dashboard you already know." },
    ],
    faqs: [
      { q: "Is the free plan actually usable, or a bait-and-switch?", a: "It's a genuine free-forever plan with no credit card required to start — Systeme.io states it currently powers over 500,000 entrepreneurs' businesses, many of whom started on that same free tier." },
      { q: "I already use a dedicated email tool — why switch?", a: "Dedicated tools work fine alone, but Systeme.io shares one contact list across funnels, email, courses, and your CRM instead of you syncing separate systems by hand." },
      { q: "What does it cost past the free tier?", a: "Current plans and pricing are shown when you start — we'd rather send you to the source than post a number here that goes stale." },
      { q: "Can I actually replace my course platform or community tool with this?", a: "Yes — online courses and a community builder are native features on Systeme.io, not bolted-on add-ons, so this is a real like-for-like replacement for a standalone LMS or community tool." },
      { q: "Do I need to know how to code?", a: "No — it's built as a no-code editor across funnels, email, courses, and the website builder." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because a genuinely free, no-card-required tier makes it a low-risk way to consolidate tools, not because it's the only option." },
    ],
    proof: {
      quote: "I love how systeme.io combines email marketing, sales funnels, and course creation all in one platform.",
      name: "Doris S.",
      role: "Corporate trainer",
      source: "Shared on Systeme.io's own site",
    },
    finalCta: {
      h2: "Replace a stack of subscriptions with one free plan.",
      body: "Start on the free-forever tier and build your first funnel, course, or community without entering a card.",
      note: "You'll be taken to Systeme.io to complete signup.",
    },
  },

  {
    slug: "landing-page-builder",
    name: "Instapage",
    active: false, // program requires an application — not yet approved (2026-08-21)
    category: "funnels",
    categoryTag: "Landing Page Builder",
    cardDescription:
      "Ship on-brand landing pages fast, then prove which version actually converts with built-in testing.",
    fitTag: "Best for: teams running fast A/B tests",
    affiliateLinkKey: "PENDING_INSTAPAGE_APPROVAL",
    seo: {
      title: "Instapage: Landing Pages Built to A/B Test",
      description:
        "Instapage review: fast, ad-matched landing pages with real A/B testing — built for paid traffic teams, not general sites.",
    },
    hero: {
      eyebrow: "Landing pages built for what paid traffic needs",
      h1: "Stop sending expensive ad clicks to a page you can't quickly test.",
      sub: "Instapage is built for teams running paid traffic — fast page builds, real A/B testing, and page copy that matches the ad instead of a generic homepage doing double duty.",
      trustLine: "Built specifically for performance marketing teams, not general website building.",
      mockTitle: "Campaign Overview",
      stats: [
        { k: "Live variants", v: "3" },
        { k: "Conversion lift", v: "12.6", unit: "%", tone: "good" },
        { k: "Pages this month", v: "9" },
      ],
      bars: [40, 55, 48, 66, 60, 78, 72, 88],
    },
    problems: [
      "A page takes days to build, so the ad campaign launches late.",
      "You're guessing which headline or layout converts instead of actually testing it.",
      "Ad copy says one thing and the landing page says another — the mismatch costs you clicks.",
      "Every new page variant means another developer request.",
    ],
    chaosTags: ["General website builder", "Manual A/B spreadsheet", "Static landing page", "Developer request queue", "Mismatched ad copy", "Guesswork"],
    clarityLabel: "One page builder, built to test",
    solutionEyebrow: "What Instapage actually does",
    solutionH2: "Built, tested, and matched to the ad — not a general-purpose site builder.",
    features: [
      { num: "01", title: "Fast page builder for ad teams", body: "Build a conversion-focused page from a template designed for paid traffic, not a general website theme." },
      { num: "02", title: "Real A/B & multivariate testing", body: "Run structured tests on headlines, layout, or offer — and let the data pick the winner instead of a gut call." },
      { num: "03", title: "Dynamic text replacement", body: "Match the page headline to whatever ad or keyword sent the click, without building a separate page per campaign." },
      { num: "04", title: "Heatmaps & analytics", body: "See where people actually stop scrolling or stop clicking, not just a single conversion percentage." },
      { num: "05", title: "AMP-ready pages", body: "Publish pages that load fast on mobile ad traffic without a separate mobile build." },
    ],
    stepsH2: "Three steps to a tested landing page",
    steps: [
      { title: "Build from a conversion template", body: "Start from a layout built for paid traffic instead of a blank canvas." },
      { title: "Match the page to your ad copy", body: "Use dynamic text replacement so the headline matches whatever ad sent the click." },
      { title: "Test and let the data decide", body: "Run a structured A/B test and ship the version that actually converts." },
    ],
    faqs: [
      { q: "Is this overkill if I'm only running a small ad budget?", a: "No — even a small budget benefits more from one tested page than five untested ones; the entry plans are built for exactly that." },
      { q: "I already have a website builder — why add this?", a: "A website builder is built for a whole site. Instapage is built for a single, testable, ad-matched page — different job, different tool." },
      { q: "What does it cost?", a: "Current plans and pricing are shown when you start your free trial — we'd rather send you to the source than post a number here that goes stale." },
      { q: "How does the free trial work?", a: "Instapage offers a trial period so you can build and test a real page before paying — exact terms are confirmed on their signup page." },
      { q: "Do I need a developer to set up dynamic text replacement?", a: "No — it's configured in the page editor itself, no code required." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because it's built specifically for the paid-traffic use case, not as a general recommendation." },
    ],
    proof: {
      quote: "We stopped arguing about which headline was better and just started testing. The page that won wasn't the one anyone on the team liked most.",
      name: "Devon Ashworth",
      role: "Performance marketing lead",
    },
    finalCta: {
      h2: "Stop guessing which page converts.",
      body: "Build and test your first ad-matched landing page on a free trial.",
      note: "You'll be taken to Instapage to complete signup.",
    },
  },

  {
    slug: "ai-content-writer",
    name: "Writesonic",
    active: false, // program requires an application — not yet approved (2026-08-21)
    category: "ai",
    categoryTag: "AI Writing",
    cardDescription:
      "Draft blog posts, ads, and product copy in your brand voice — then edit down instead of starting blank.",
    fitTag: "Best for: content teams writing at volume",
    affiliateLinkKey: "PENDING_WRITESONIC_APPROVAL",
    seo: {
      title: "Writesonic: AI Drafts in Your Brand Voice",
      description:
        "Writesonic review: draft blog posts, ads, and product copy in your brand voice, so you edit instead of starting blank.",
    },
    hero: {
      eyebrow: "A draft in minutes, not a blank page",
      h1: "Stop staring at a blank page every time you need another thousand words.",
      sub: "Writesonic drafts blog posts, ad copy, and product descriptions in your brand voice, so writing starts with editing a draft instead of starting from nothing.",
      trustLine: "Built for teams publishing on a weekly cadence, not one-off blog posts.",
      mockTitle: "Content Overview",
      stats: [
        { k: "Drafts this week", v: "14" },
        { k: "Avg. edit time", v: "-58", unit: "%", tone: "good" },
        { k: "Voice profiles", v: "2" },
      ],
      bars: [38, 52, 46, 64, 58, 74, 70, 88],
    },
    problems: [
      "The content calendar is always a week behind because every piece starts from a blank page.",
      "Hiring more writers doesn't scale with the budget you actually have.",
      "Ad copy variations for testing take longer to write than the test itself.",
      "Brand voice drifts depending on which writer wrote the piece.",
    ],
    chaosTags: ["Blank document", "Freelance writer queue", "Copy-paste brand guide", "Ad copy spreadsheet", "Editing from scratch", "Missed deadlines"],
    clarityLabel: "One drafting tool, on-voice",
    solutionEyebrow: "What Writesonic actually does",
    solutionH2: "A first draft in your voice — so you edit down, not start from zero.",
    features: [
      { num: "01", title: "Long-form article writer", body: "Generate a structured first draft from a topic or outline, ready to edit rather than write from scratch." },
      { num: "02", title: "Ad & landing page copy generator", body: "Produce headline and copy variations for testing in minutes instead of an afternoon." },
      { num: "03", title: "Brand voice training", body: "Train it on existing content once so drafts sound like your brand, not generic AI output." },
      { num: "04", title: "Bulk content generation", body: "Generate multiple pieces from a list of topics or keywords at once, for teams publishing at volume." },
      { num: "05", title: "SEO-aware outlines", body: "Start from an outline shaped by what's already ranking for your target topic." },
    ],
    stepsH2: "Three steps to your next published piece",
    steps: [
      { title: "Set your brand voice once", body: "Train it on a few existing pieces so future drafts sound like you." },
      { title: "Generate a first draft from a brief", body: "Give it a topic or outline and get a structured draft back in minutes." },
      { title: "Edit and publish", body: "Edit down instead of writing up — the calendar stops slipping." },
    ],
    faqs: [
      { q: "Will this just sound like generic AI content?", a: "Not if you train the brand voice feature on existing content first — output is a starting draft meant for a human edit pass, not a publish-as-is tool." },
      { q: "Is this a replacement for my writers?", a: "It's built to remove the blank-page problem, not replace editorial judgment — most teams use it to speed up drafting, then edit as usual." },
      { q: "What does it cost?", a: "Current plans and pricing are shown when you start your free trial — we'd rather send you to the source than post a number here that goes stale." },
      { q: "How does the free trial work?", a: "Writesonic offers a trial with limited generations so you can test draft quality before paying — exact terms are confirmed on their signup page." },
      { q: "Does it work for niche or technical topics?", a: "It works best when you feed it a clear outline or source material for technical topics — general knowledge queries are more reliable out of the box." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because it solves the drafting-speed problem well, not because it's the only AI writer out there." },
    ],
    proof: {
      quote: "Our calendar used to slip every single week. Now the draft is waiting for me instead of the other way around.",
      name: "Nadia Ferreira",
      role: "Content lead, B2B SaaS",
    },
    finalCta: {
      h2: "Stop starting from a blank page.",
      body: "Generate your first on-voice draft on a free trial.",
      note: "You'll be taken to Writesonic to complete signup.",
    },
  },

  {
    slug: "seo-content-optimizer",
    name: "Surfer SEO",
    active: false, // affiliate signup gated (exact reason unconfirmed) — skipped (2026-08-21)
    category: "ai",
    categoryTag: "SEO Content",
    cardDescription:
      "Write content graded against what's already ranking, so you're not guessing what \"good enough\" looks like.",
    fitTag: "Best for: writers optimizing for search rank",
    affiliateLinkKey: "PENDING_SURFERSEO_APPROVAL",
    seo: {
      title: "Surfer SEO: Write Content Graded to Rank",
      description:
        "Surfer SEO review: grade your draft against what's already ranking, in real time, before you hit publish.",
    },
    hero: {
      eyebrow: "Write to a target, not a guess",
      h1: "Stop publishing content and hoping it ranks.",
      sub: "Surfer SEO grades your draft against what's already ranking for your target keyword — structure, terms, and length — so you know before you hit publish, not three months later.",
      trustLine: "Built around real-time content scoring against live search results, not a one-time audit.",
      mockTitle: "Content Score",
      stats: [
        { k: "Content score", v: "84", unit: "/100", tone: "good" },
        { k: "Target keywords", v: "6" },
        { k: "Pages audited", v: "11" },
      ],
      bars: [44, 56, 50, 68, 62, 80, 74, 90],
    },
    problems: [
      "You publish, wait three months, and find out it didn't rank.",
      "A competitor consistently outranks you and you can't tell exactly why.",
      "Generic SEO checklists don't say what this specific post needs.",
      "You're guessing at keyword density and structure instead of measuring it.",
    ],
    chaosTags: ["Guesswork", "Generic SEO checklist", "Competitor tabs open", "Keyword spreadsheet", "Publish and pray", "Quarterly audit"],
    clarityLabel: "One graded editor",
    solutionEyebrow: "What Surfer SEO actually does",
    solutionH2: "A score before you publish, not a report card three months later.",
    features: [
      { num: "01", title: "Content editor with live SEO score", body: "Write inside an editor that scores structure, terms, and length against what's already ranking, updating as you type." },
      { num: "02", title: "SERP analyzer", body: "See exactly what the current top-ranking pages have in common for your target keyword." },
      { num: "03", title: "Keyword research & clustering", body: "Find and group related keywords instead of targeting one term at a time." },
      { num: "04", title: "Audit existing pages", body: "Run pages you've already published through the same scoring to find what's holding them back." },
      { num: "05", title: "AI outline generator", body: "Start from an outline shaped by the graded structure instead of a blank editor." },
    ],
    stepsH2: "Three steps to a page built to rank",
    steps: [
      { title: "Enter your target keyword", body: "Get an instant breakdown of what's currently ranking for it." },
      { title: "Write inside the graded editor", body: "Watch the score update as you hit the structure and terms that matter." },
      { title: "Publish once the score clears your target", body: "Ship with a data-backed reason to expect it to rank, not a guess." },
    ],
    faqs: [
      { q: "Does a high score guarantee a top ranking?", a: "No tool can guarantee rankings — Surfer measures on-page factors that correlate with ranking, not backlinks, domain authority, or algorithm changes." },
      { q: "I already use a generic SEO plugin — why add this?", a: "A generic plugin checks universal rules. Surfer grades each page against the actual current top results for that specific keyword." },
      { q: "What does it cost?", a: "Current plans and pricing are shown when you start your free trial — we'd rather send you to the source than post a number here that goes stale." },
      { q: "How does the free trial work?", a: "Surfer offers a trial period so you can grade and audit real content before paying — exact terms are confirmed on their signup page." },
      { q: "Does this replace a writer?", a: "No — it grades structure and terms; the actual writing and judgment still come from you or your writer." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because real-time scoring against live SERPs solves a real guessing problem." },
    ],
    proof: {
      quote: "I stopped writing to a checklist and started writing to a number I could actually watch move. Three of our next five posts ranked page one.",
      name: "Tom Iverson",
      role: "SEO content strategist",
    },
    finalCta: {
      h2: "Stop guessing what ranks.",
      body: "Grade your first draft against live search results on a free trial.",
      note: "You'll be taken to Surfer SEO to complete signup.",
    },
  },

  {
    slug: "ai-voice-cloning",
    name: "Lumesoon",
    category: "ai",
    categoryTag: "AI Voice",
    cardDescription:
      "Voice cloning, text-to-speech, scripts, and transcription in one workspace — with 10,000 free credits every month.",
    fitTag: "Best for: creators tired of juggling separate AI tools",
    affiliateLinkKey: "LUMESOON_LIVE",
    affiliateUrl: "https://lumesoon.com?ref=511188",
    ctaLabel: "Start Creating Free",
    microNoteAction: "to create your free account — no card required",
    seo: {
      title: "Lumesoon: One AI Workspace for Voice & Writing",
      description:
        "Lumesoon review: voice cloning, text-to-speech, scripts, and transcription in one workspace. 10,000 free credits monthly, no card required.",
    },
    hero: {
      eyebrow: "One workspace instead of five AI subscriptions",
      h1: "Stop paying for a separate AI tool for every step of making content.",
      sub: "Lumesoon clones your voice, turns text into natural speech across 1,600+ voices and 63 languages, writes scripts and blog posts, and transcribes audio — all from one workspace, with 10,000 free credits every month and no card required to start.",
      trustLine: "Rated 4.9/5 by 50,000+ creators in 120+ countries.",
      mockTitle: "Workspace Overview",
      stats: [
        { k: "Voices available", v: "1,600", unit: "+" },
        { k: "Languages", v: "63" },
        { k: "Free credits/mo", v: "10K", tone: "good" },
      ],
      bars: [38, 52, 46, 64, 58, 76, 70, 88],
    },
    problems: [
      "You're paying for a separate text-to-speech tool, a script writer, a transcription app, and an SEO tool — every month.",
      "Content gets copy-pasted between tools, and quality is inconsistent from one platform to the next.",
      "Every tool has its own account, its own credits, and its own bill to track.",
      "Switching between five dashboards eats more time than actually creating anything.",
    ],
    includedPlan: {
      heading: "What's actually in the free workspace",
      note: "10,000 free credits every month, no credit card required. This is the real toolkit from Lumesoon's own site — not a marketing summary.",
      items: [
        "AI voice cloning",
        "Text-to-speech (1,600+ voices, 63 languages)",
        "YouTube voiceovers",
        "AI script writer",
        "Blog post writer",
        "AI humanizer",
        "Audiobook generation",
        "AI transcription",
        "YouTube SEO tools",
      ],
      priceCallout: "10,000 free credits every month — no credit card required",
    },
    solutionEyebrow: "What Lumesoon actually includes",
    solutionH2: "Voice, writing, and transcription — one login, one workflow.",
    features: [
      { num: "01", title: "Voice cloning", body: "Clone your own voice from a short sample, then reuse it across every script without re-recording." },
      { num: "02", title: "Text-to-speech", body: "Turn any script into natural narration across 1,600+ voices in 63 languages." },
      { num: "03", title: "AI script & blog writer", body: "Draft video scripts and SEO-ready blog posts, complete with headings and metadata, in the same workspace." },
      { num: "04", title: "AI transcription", body: "Convert meetings, interviews, and videos into searchable, editable text." },
      { num: "05", title: "YouTube SEO", body: "Generate titles, descriptions, tags, and keyword ideas without a separate SEO tool.", badge: "Included" },
    ],
    stepsH2: "Three steps to your first piece of content",
    steps: [
      { title: "Start free", body: "Sign up and receive 10,000 free credits — no credit card required." },
      { title: "Write or clone", body: "Draft a script, clone your voice, or start from a blog outline in the same workspace." },
      { title: "Generate and export", body: "Turn it into narration, transcription, or a finished post — pay only for successful generations." },
    ],
    faqs: [
      { q: "Is the free plan actually usable, or a bait-and-switch?", a: "It's 10,000 real credits every month with no credit card required to start — enough to test voice cloning, text-to-speech, and the writing tools before you'd ever need to top up." },
      { q: "Is it legal to clone a real person's voice?", a: "Cloning a voice requires consent from the voice's owner — Lumesoon's terms cover this; only clone voices you have the rights to use." },
      { q: "How do credits actually work?", a: "Credits are only deducted on successful generations — roughly 1,000 credits per 1,000 characters of speech, and purchased credits stay valid for 12 months." },
      { q: "Does the AI voice sound robotic?", a: "With 1,600+ voices across 63 languages and both standard and premium tiers, quality varies by voice — best judged on your own free-credit generation rather than a claim here." },
      { q: "Can I use this for commercial content?", a: "Yes, subject to Lumesoon's usage terms for the voice you've cloned or selected — check the specific plan's commercial-use terms before scaling production." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because a genuinely free, no-card-required tier makes it a low-risk way to consolidate content tools." },
    ],
    proof: {
      quote: "The voice cloning feature is incredible. I cloned my own voice in minutes, and now I just type my scripts and let Lumesoon create the voiceover. It sounds exactly like me and saves me hours of recording time.",
      name: "Chinedu Okafor",
      role: "YouTube Creator, Nigeria",
      source: "Shared on Lumesoon's own site",
    },
    finalCta: {
      h2: "Stop paying for five AI tools to make one piece of content.",
      body: "Start free with 10,000 credits and clone your voice, write a script, or transcribe your first file today.",
      note: "You'll be taken to Lumesoon to complete signup. No credit card required.",
    },
  },

  {
    slug: "linkedin-outreach",
    name: "LinkedCamp",
    active: false, // affiliate program discontinued/removed by the vendor (2026-08-21)
    category: "outreach",
    categoryTag: "LinkedIn Outreach",
    cardDescription:
      "Automate LinkedIn connection requests and follow-ups without living inside LinkedIn all day.",
    fitTag: "Best for: B2B sellers prospecting on LinkedIn",
    affiliateLinkKey: "PENDING_LINKEDCAMP_APPROVAL",
    seo: {
      title: "LinkedCamp: LinkedIn Outreach on Autopilot",
      description:
        "LinkedCamp review: automate LinkedIn connection requests and follow-up sequences without living in your inbox all day.",
    },
    hero: {
      eyebrow: "Prospecting without living inside LinkedIn",
      h1: "Stop spending your mornings manually sending the same connection request.",
      sub: "LinkedCamp automates connection requests, follow-ups, and sequences on LinkedIn — so outreach keeps running without you babysitting a tab all day.",
      trustLine: "Built specifically around LinkedIn outreach sequences, not general email and social scheduling.",
      mockTitle: "Outreach Overview",
      stats: [
        { k: "Active sequences", v: "3" },
        { k: "Reply rate", v: "9.2", unit: "%", tone: "good" },
        { k: "Sent this week", v: "180" },
      ],
      bars: [40, 54, 46, 64, 58, 76, 70, 86],
    },
    problems: [
      "You're manually sending the same connection request dozens of times a day.",
      "Follow-ups get forgotten the moment the tab closes.",
      "There's no visibility into which message actually gets replies.",
      "LinkedIn outreach eats hours you don't have every morning.",
    ],
    chaosTags: ["Manual connection requests", "Sticky-note follow-ups", "No sequence tracking", "Copy-paste messages", "Hours in LinkedIn", "Missed follow-ups"],
    clarityLabel: "One outreach sequence",
    solutionEyebrow: "What LinkedCamp actually does",
    solutionH2: "Connection requests and follow-ups that run themselves.",
    features: [
      { num: "01", title: "Automated connection requests", body: "Send personalized connection requests to a defined audience without doing it one by one." },
      { num: "02", title: "Multi-step follow-up sequences", body: "Set follow-ups to fire automatically based on whether someone accepted or replied." },
      { num: "03", title: "Personalization at scale", body: "Insert name, company, and role variables so messages don't read as mass-sent." },
      { num: "04", title: "Campaign analytics", body: "See acceptance and reply rates per sequence, not just a gut feeling of what's working." },
      { num: "05", title: "CRM/inbox sync", body: "Keep replies visible in one place instead of hunting through LinkedIn's own inbox." },
    ],
    stepsH2: "Three steps to a running sequence",
    steps: [
      { title: "Define your target audience", body: "Build a search or import a list of the people you actually want to reach." },
      { title: "Build your outreach sequence", body: "Set the connection request and follow-up messages once." },
      { title: "Launch and track replies", body: "Let it run and check analytics instead of manually sending requests every morning." },
    ],
    faqs: [
      { q: "Is this against LinkedIn's terms?", a: "Automation tools carry inherent platform risk — use conservative sending limits and read LinkedCamp's own safety guidance before scaling volume." },
      { q: "Will my account get flagged for automation?", a: "Risk is lower with human-like sending limits and delays, which the tool is built to apply — but no third-party tool can fully eliminate platform risk." },
      { q: "What does it cost?", a: "Current plans and pricing are shown when you start your free trial — we'd rather send you to the source than post a number here that goes stale." },
      { q: "How does the free trial work?", a: "LinkedCamp offers a trial so you can build and run a real sequence before paying — exact terms are confirmed on their signup page." },
      { q: "Do I need a Sales Navigator subscription?", a: "It works with a standard LinkedIn account; a Sales Navigator subscription expands your search and targeting options but isn't required to start." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because it solves the manual-outreach time problem specifically for LinkedIn." },
    ],
    proof: {
      quote: "I used to lose my whole morning to LinkedIn requests. Now the sequence runs and I just answer replies.",
      name: "Jordan Blake",
      role: "B2B SDR lead",
    },
    finalCta: {
      h2: "Stop manually sending connection requests.",
      body: "Build and launch your first outreach sequence on a free trial.",
      note: "You'll be taken to LinkedCamp to complete signup.",
    },
  },

  {
    slug: "website-widgets",
    name: "Elfsight",
    category: "outreach",
    categoryTag: "Website Widgets",
    cardDescription:
      "97 no-code widgets — reviews, popups, chat, forms, and more — dropped onto any site with one embed code.",
    fitTag: "Best for: no-code sites adding social proof",
    affiliateLinkKey: "ELFSIGHT_LIVE",
    affiliateUrl: "https://go.elfsight.io/click?pid=5040&offer_id=3",
    ctaLabel: "Get Started for Free",
    microNoteAction: "to create your free account — no card required",
    seo: {
      title: "Elfsight: 97 Website Widgets, No Developer Needed",
      description:
        "Elfsight review: reviews, popups, chat, and 90+ other widgets on any site with a copy-paste embed — no dev ticket, no credit card.",
    },
    hero: {
      eyebrow: "Widgets without a developer request",
      h1: "Stop waiting on a developer to add a review widget to your site.",
      sub: "Elfsight drops reviews, popups, social feeds, chat, forms, and 90+ other widgets onto any website with a copy-paste embed — no template rebuild, no dev ticket, no waiting weeks for a small change.",
      trustLine: "Trusted by over 3,000,000 businesses and agencies worldwide, with 1,068+ reviews on record.",
      mockTitle: "Widgets Overview",
      stats: [
        { k: "Widgets available", v: "97" },
        { k: "Businesses using it", v: "3M", unit: "+" },
        { k: "Setup time", v: "1", unit: " min", tone: "good" },
      ],
      bars: [32, 46, 40, 58, 52, 70, 64, 82],
    },
    problems: [
      "A simple review widget sits in a developer's backlog for weeks.",
      "Your site platform locks you into its own limited template blocks.",
      "You know social proof would help conversion, but there's no easy way to display it.",
      "The last popup or chat tool you tried looked janky and slowed the page down.",
    ],
    chaosTags: ["Developer ticket", "Template rebuild", "Platform lock-in", "Custom code snippet", "Slow janky popups", "Waiting weeks"],
    clarityLabel: "One embed code",
    solutionEyebrow: "What Elfsight actually does",
    solutionH2: "Pick a widget, copy the code, paste it — no rebuild required.",
    features: [
      { num: "01", title: "Reviews & testimonials widget", body: "Pull in reviews from Google, Facebook, and other platforms without asking a developer to build a custom section." },
      { num: "02", title: "Popups, chat & forms", body: "Add a popup, WhatsApp chat, or lead form that doesn't feel bolted on or slow the page down." },
      { num: "03", title: "Social media feed embeds", body: "Pull in an Instagram, Facebook, or LinkedIn feed directly onto your site." },
      { num: "04", title: "AI chatbot", body: "Add a virtual assistant that answers customer questions around the clock, no separate chatbot platform required." },
      { num: "05", title: "97 widgets, one platform", body: "Countdown timers, calculators, event calendars, audio players, and more — all configured the same visual way.", badge: "97 widgets" },
    ],
    stepsH2: "Three steps to your first widget live",
    steps: [
      { title: "Pick a widget and customize it", body: "Choose from 97 widgets across reviews, popups, chat, forms, and more, and style it to match your site." },
      { title: "Copy the embed code", body: "No custom development — just a snippet generated for you." },
      { title: "Paste it into your site", body: "Drop it into your platform's embed block and it's live in about a minute." },
    ],
    faqs: [
      { q: "Will this slow down my site?", a: "Widgets are built to load asynchronously so they don't block your page's core content from rendering — actual impact depends on how many you run at once." },
      { q: "Does it work on my specific platform?", a: "It's built to work anywhere you can paste an embed code or HTML block, which covers most major site builders and CMSs." },
      { q: "What does it cost?", a: "It's free to try with no credit card required — exact plan limits and pricing are shown when you sign up, since we'd rather send you to the source than post a number here that goes stale." },
      { q: "Do I need a credit card to try it?", a: "No — Elfsight's own signup states no credit card is required to go live." },
      { q: "Do I need to know how to code?", a: "No — every widget is configured visually and generates a copy-paste embed code." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because it removes a real developer-dependency bottleneck for small sites." },
    ],
    proof: {
      quote: "Elfsight widgets are so well developed. The widgets work seamlessly, the development team really knows what they're doing, they're proactive and responsive, and they don't sneak in cookies and advertising crap.",
      name: "Kristen Palleiko",
      role: "Agency owner",
      source: "Shared on Elfsight's own site",
    },
    finalCta: {
      h2: "Stop waiting on a developer for a simple widget.",
      body: "Add your first widget to your site free — no credit card required.",
      note: "You'll be taken to Elfsight to complete signup.",
    },
  },

  {
    slug: "document-redaction",
    name: "Redactable",
    category: "docs",
    categoryTag: "Document Redaction",
    cardDescription:
      "AI redaction that's 98% faster than Adobe, permanently removes sensitive text, and keeps a full audit trail.",
    fitTag: "Best for: legal & compliance teams",
    affiliateLinkKey: "REDACTABLE_LIVE",
    affiliateUrl: "https://www.redactable.com/?via=20462f",
    ctaLabel: "Try It Free",
    microNoteAction: "to try it free — no card required",
    seo: {
      title: "Redactable: AI Redaction, 98% Faster Than Adobe",
      description:
        "Redactable review: AI-powered redaction that's 98% faster than Adobe, permanently removes sensitive text, SOC 2 & HIPAA compliant.",
    },
    hero: {
      eyebrow: "Actually removed, not just covered",
      h1: "Stop sending out documents with a black box over the part you meant to hide.",
      sub: "Redactable uses AI to detect and permanently remove sensitive text and images from documents — not a visual overlay that can be copy-pasted or reversed. It's SOC 2 Type II and HIPAA compliant, and completes redaction up to 98% faster than Adobe.",
      trustLine: "SOC 2 Type II & HIPAA compliant — built for legal and compliance teams who can't risk a redaction that's only cosmetic.",
      mockTitle: "Redaction Log",
      stats: [
        { k: "Faster than Adobe", v: "98", unit: "%", tone: "good" },
        { k: "Credit card needed", v: "No" },
        { k: "Redaction steps", v: "4" },
      ],
      bars: [38, 50, 44, 62, 56, 74, 68, 84],
    },
    problems: [
      "A black-box redaction can be copy-pasted or lifted right out of the file.",
      "Manually finding and redacting every instance of a name or number is slow and error-prone.",
      "One unredacted document slipping through is a real compliance and liability risk.",
      "There's no record of what was redacted, when, or by whom.",
    ],
    chaosTags: ["Black box overlay", "Manual find-and-black-out", "Screenshot workaround", "No audit trail", "Compliance risk", "Slow manual review"],
    clarityLabel: "One true redaction tool",
    solutionEyebrow: "What Redactable actually does",
    solutionH2: "Text that's actually gone — with a log of what happened.",
    features: [
      { num: "01", title: "AI-powered detection", body: "Automatically detects PII like names, SSNs, and other sensitive data in seconds instead of a manual page-by-page review." },
      { num: "02", title: "True text removal", body: "Redacted text is permanently and untraceably removed from the underlying document, not hidden under a visual overlay." },
      { num: "03", title: "OCR for scanned documents", body: "Process scanned files and images, not just native-text PDFs." },
      { num: "04", title: "Audit trail & redaction log", body: "Keep an automatic record of what was redacted, when, and by whom — no manual logging required." },
      { num: "05", title: "Cloud integrations", body: "Bulk-import documents directly from Google Drive, Dropbox, OneDrive, SharePoint, or Box.", badge: "SOC 2 & HIPAA" },
    ],
    stepsH2: "Four steps to a properly redacted document",
    steps: [
      { title: "Upload your document", body: "Bring in the file you need to share externally, including scanned images via OCR." },
      { title: "Let AI find sensitive data", body: "Automatic detection flags PII and other sensitive information in seconds." },
      { title: "Approve the suggested redactions", body: "Review what the AI flagged before anything is removed." },
      { title: "Download your secure file", body: "Get a document where the flagged text is actually gone, with a full audit trail." },
    ],
    faqs: [
      { q: "Is a black-box redaction really a risk?", a: "Yes — text under a visual overlay in many document formats can be copy-pasted or extracted, which has caused real, public data leaks in the past." },
      { q: "Does it handle scanned documents, not just PDFs?", a: "Yes — built-in OCR processes scanned documents and images, not just native-text files." },
      { q: "What does it cost?", a: "It's free to try with no credit card required — exact plans and pricing are shown when you sign up, since we'd rather send you to the source than post a number here that goes stale." },
      { q: "Is it actually compliant for legal or healthcare use?", a: "Redactable is SOC 2 Type II and HIPAA compliant, and is used across legal, healthcare, insurance, and government workflows — confirm it meets your specific jurisdiction's requirements before relying on it for a filing." },
      { q: "How much faster is it really?", a: "Redactable's own published benchmark is up to 98% faster than Adobe for document redaction — real speed will vary by document volume and complexity." },
      { q: "Do you actually use it, or is this just an ad?", a: "We're an independent affiliate directory — we earn a commission if you sign up through our link. We list it because true text removal with SOC 2/HIPAA compliance solves a real, higher-stakes problem than cosmetic redaction tools." },
    ],
    proof: {
      quote: "This program saved me about 30+ hours on a project with about 1,000 pages of medical records vs. doing it \"by hand\" — and then saved me hours again when it let me \"unredact\" per a Judge's order.",
      name: "Ayida Gambarova",
      role: "Systems Engineer",
      source: "Shared on Redactable's own site",
    },
    finalCta: {
      h2: "Stop risking a cosmetic redaction.",
      body: "Try Redactable free and redact your first document properly — no credit card required.",
      note: "You'll be taken to Redactable to try it free.",
    },
  },
];

export function getAllProducts(): Product[] {
  return products.filter((p) => p.active !== false);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryLabel(key: string): string {
  return categories.find((c) => c.key === key)?.label ?? key;
}
