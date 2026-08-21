import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How tab-zero earns money and how listings get chosen.",
  alternates: { canonical: "/disclosure" },
};

export default function DisclosurePage() {
  const products = getAllProducts();

  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <Logo />
          <Link className="nav-cta" href="/">
            Back to site
          </Link>
        </div>
      </header>

      <main className="legal">
        <Link className="back-link" href="/">
          ← Back to tab-zero
        </Link>
        <h1>Affiliate Disclosure</h1>
        <span className="updated">Last updated August 2026</span>

        <p>
          tab-zero is an independent directory. We are not owned by, operated by, or officially
          affiliated with any of the programs listed on this site.
        </p>

        <h2>How we make money</h2>
        <p>
          When you click a link on this site and sign up for a trial or subscription with one of
          the tools we list, we may earn a commission from that company at no additional cost to
          you. This is how the site is funded — we don&apos;t run ads on the page itself or charge
          visitors anything to read it.
        </p>

        <h2>What we currently list</h2>
        <ul>
          {products.map((p) => (
            <li key={p.slug}>
              <strong>{p.name}</strong> — <Link href={`/${p.slug}`}>{p.categoryTag.toLowerCase()}</Link>
            </li>
          ))}
        </ul>

        <h2>Does this affect what we write?</h2>
        <p>
          Category order on the homepage is alphabetical, not sorted by commission size, and we
          turn down programs whose free tier or trial doesn&apos;t hold up when we test it
          ourselves. The commission is why we cover a tool at all — it isn&apos;t payment for
          positive coverage, and none of the companies listed here have paid us to write anything
          specific about them.
        </p>

        <h2>Your trial and purchase</h2>
        <p>
          Any trial, subscription, billing, cancellation, or support issue is between you and the
          company whose product you signed up for. We don&apos;t process payments, store your
          payment details, or have access to your account with them.
        </p>

        <h2>Questions</h2>
        <p className="muted">
          If you have questions about this disclosure, see our{" "}
          <Link href="/privacy">privacy policy</Link> for how to reach us.
        </p>
      </main>

      <SiteFooter variant="catalog" />
    </>
  );
}
