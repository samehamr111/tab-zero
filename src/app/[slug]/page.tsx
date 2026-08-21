import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import { AffiliateCta } from "@/components/AffiliateCta";
import { getAllProducts, getProductBySlug } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: `/${product.slug}` },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `https://tab-zero.com/${product.slug}`,
    },
    twitter: {
      title: product.seo.title,
      description: product.seo.description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `https://tab-zero.com/${product.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "tab-zero", item: "https://tab-zero.com/" },
      { "@type": "ListItem", position: 2, name: product.name, item: `https://tab-zero.com/${product.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="chromeless-header">
        <div className="wrap">
          <Logo chromeless />
          <span className="disclosure-flag">Independent review · affiliate link</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">{product.hero.eyebrow}</p>
              <h1>{product.hero.h1}</h1>
              <p className="sub">{product.hero.sub}</p>
              <div className="cta-row">
                <AffiliateCta
                  className="btn btn-primary"
                  href={product.affiliateUrl ?? "#"}
                  external={Boolean(product.affiliateUrl)}
                  contentName={product.slug}
                >
                  <span>
                    {product.ctaLabel ?? (
                      <>
                        Start My <strong>Free</strong> Trial
                      </>
                    )}
                  </span>
                </AffiliateCta>
                <a className="btn btn-ghost" href="#how">
                  See how it works
                </a>
              </div>
              <p className="trust-line">{product.hero.trustLine}</p>
              <p className="micro-note">
                You&apos;ll be taken to {product.name} {product.microNoteAction ?? "to complete signup"}.
                Independent review site — we earn a commission if you sign up through our link, see{" "}
                <a href="/disclosure">disclosure</a>.
              </p>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="mock-card">
                <div className="mock-card-head">
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-title">{product.hero.mockTitle}</span>
                </div>
                <div className="mock-stats">
                  {product.hero.stats.map((stat) => (
                    <div className="mock-stat" key={stat.k}>
                      <span className="mock-k">{stat.k}</span>
                      <span className={`mock-v${stat.tone ? ` ${stat.tone}` : ""}`}>
                        {stat.v}
                        {stat.unit && <span className="mock-unit">{stat.unit}</span>}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mock-bars">
                  {product.hero.bars.map((h, i) => (
                    <div className="mock-bar" style={{ ["--h" as string]: `${h}%` }} key={i} />
                  ))}
                </div>
                <p className="mock-caption">Illustrative dashboard preview</p>
              </div>
            </div>
          </div>
        </section>

        <section className="problem">
          <div className="wrap">
            <h2>If any of this sounds familiar —</h2>
            <div className="problem-grid">
              {product.problems.map((p, i) => (
                <div className="problem-item" key={i}>
                  <span className="problem-mark">?</span>
                  <p>{p}</p>
                </div>
              ))}
            </div>

            {product.includedPlan ? (
              <div className="included">
                <div className="included-head">
                  <h3>{product.includedPlan.heading}</h3>
                  <p>{product.includedPlan.note}</p>
                </div>
                <ul className="included-grid">
                  {product.includedPlan.items.map((item) => (
                    <li className="included-item" key={item}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7.3L5.6 10.4L11.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="included-callout">{product.includedPlan.priceCallout}</div>
              </div>
            ) : (
              product.chaosTags &&
              product.clarityLabel && (
                <div className="contrast">
                  <div className="contrast-side">
                    <span className="contrast-label">Right now</span>
                    <div className="chaos-cluster">
                      {product.chaosTags.map((tag) => (
                        <span className="chaos-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="contrast-arrow" aria-hidden="true">
                    →
                  </div>
                  <div className="contrast-side">
                    <span className="contrast-label">With {product.name}</span>
                    <div className="clarity-card">{product.clarityLabel}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        <section className="solution" id="how">
          <div className="wrap">
            <p className="eyebrow">{product.solutionEyebrow}</p>
            <h2>{product.solutionH2}</h2>

            <div className="feature-grid">
              {product.features.map((f) => (
                <div className="feature" key={f.num}>
                  <span className="feature-num">{f.num}</span>
                  <div>
                    <h3>
                      {f.title}
                      {f.badge && <span className="feature-badge">{f.badge}</span>}
                    </h3>
                    <p>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="steps">
          <div className="wrap">
            <p className="eyebrow">Getting started</p>
            <h2>{product.stepsH2}</h2>
            <ol className="step-list">
              {product.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-index">{i + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="faq">
          <div className="wrap">
            <p className="eyebrow">Before you start</p>
            <h2>Questions worth asking</h2>

            <div className="faq-list">
              {product.faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {product.credibilityWall ? (
          <section className="credibility">
            <div className="wrap">
              <div className="credibility-rating">
                <span className="credibility-score">{product.credibilityWall.rating.score}</span>
                <span className="credibility-stars" aria-hidden="true">★★★★★</span>
                <span className="credibility-count">{product.credibilityWall.rating.count}</span>
              </div>
              <p className="credibility-note">{product.credibilityWall.note}</p>
              <div className="credibility-press">
                <span className="credibility-press-label">As featured in</span>
                <div className="credibility-press-row">
                  {product.credibilityWall.press.map((p) => (
                    <span className="credibility-press-item" key={p}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : product.proof ? (
          <section className="proof">
            <div className="wrap">
              <p className="eyebrow" style={{ textAlign: "center" }}>
                From real teams using {product.name}
              </p>
              <blockquote className="proof-quote">
                <span className="quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <p>{product.proof.quote}</p>
                <footer className="proof-attribution">
                  <span className="proof-name">{product.proof.name}</span>
                  <span className="proof-role">{product.proof.role}</span>
                  {product.proof.source && <span className="proof-source">{product.proof.source}</span>}
                </footer>
              </blockquote>
            </div>
          </section>
        ) : null}

        <section className="final-cta" id="cta">
          <div className="wrap final-cta-inner">
            <h2>{product.finalCta.h2}</h2>
            <p>{product.finalCta.body}</p>
            <AffiliateCta
              className="btn btn-primary btn-lg"
              href={product.affiliateUrl ?? "#"}
              external={Boolean(product.affiliateUrl)}
              contentName={product.slug}
            >
              <span>
                {product.ctaLabel ?? (
                  <>
                    Start My <strong>Free</strong> Trial
                  </>
                )}
              </span>
            </AffiliateCta>
            <p className="micro-note">{product.finalCta.note}</p>
          </div>
        </section>
      </main>

      <SiteFooter variant="product" />
    </>
  );
}
