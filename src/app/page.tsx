import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { CatalogBrowser } from "@/components/CatalogBrowser";
import { SiteFooter } from "@/components/SiteFooter";
import { categories, getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const products = getAllProducts();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "tab-zero SaaS directory",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://tab-zero.com/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <header className="topbar">
        <div className="wrap topbar-inner">
          <Logo />
          <nav className="topbar-nav">
            <a href="#directory">Directory</a>
            <a href="#how-we-work">How we work</a>
            <Link href="/disclosure">Disclosure</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="catalog-hero">
          <div className="wrap">
            <p className="eyebrow">Independent SaaS directory</p>
            <h1>The marketing tools worth adding to your stack.</h1>
            <p className="sub">
              Every tool listed here gets one dedicated page and one job: solve the specific
              problem it claims to. We test the free tier or trial ourselves before anything gets
              listed — funnels, AI writing, outreach, and more.
            </p>
            <div className="cta-row">
              <a className="btn btn-ghost hero-scroll-cue" href="#directory">
                Browse the directory ↓
              </a>
              <a className="btn-text-link" href="#how-we-work">
                See how we pick →
              </a>
            </div>
          </div>
        </section>

        <CatalogBrowser products={products} categories={categories} />

        <section className="trust-strip" id="how-we-work">
          <div className="wrap">
            <h2 className="trust-strip-heading">How we pick what&apos;s listed</h2>
            <div className="trust-strip-items">
              <div className="trust-item">
                <h3>How a tool gets listed</h3>
                <p>
                  We test the free tier or trial ourselves before it goes up. If it can&apos;t do the
                  one job its category promises, it doesn&apos;t get a page.
                </p>
              </div>
              <div className="trust-item">
                <h3>How a tool gets removed</h3>
                <p>
                  If a program changes terms, ships a worse product, or stops holding up, we pull
                  the listing. This directory is a living list, not a one-time launch.
                </p>
              </div>
              <div className="trust-item">
                <h3>Questions about a specific listing?</h3>
                <p>
                  Every product page links back here, plus its own disclosure line. Full program
                  terms are on our <Link href="/disclosure">disclosure page</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="catalog" />
    </>
  );
}
