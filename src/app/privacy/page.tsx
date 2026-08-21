import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What data tab-zero collects and how it's used.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
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
        <h1>Privacy Policy</h1>
        <span className="updated">Last updated August 2026</span>

        <p>
          This site does not have a login, does not sell products directly, and does not collect
          email addresses or personal information through any form on the site.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Affiliate tracking</strong> — clicking through to one of the tools we list sets
            a tracking cookie on that company&apos;s own domain, governed by their privacy policy,
            not ours.
          </li>
        </ul>
        <p>
          We don&apos;t currently run analytics or ad-tracking pixels on this site. If that
          changes, we&apos;ll update this section first.
        </p>

        <h2>What we don&apos;t collect</h2>
        <p>
          No account creation, no payment information, no email signup on this site. Anything you
          enter to start a trial with a listed program goes directly to that company, not to us.
        </p>

        <h2>Cookies</h2>
        <p>
          This site itself does not set cookies. Clicking through to a listed program sets a
          tracking cookie on that company&apos;s domain, as described in our{" "}
          <Link href="/disclosure">affiliate disclosure</Link>. You can disable cookies in your
          browser settings at any time.
        </p>
      </main>

      <SiteFooter variant="catalog" />
    </>
  );
}
