import Link from "next/link";

export function SiteFooter({ variant = "catalog" }: { variant?: "catalog" | "product" }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <span>
            © {year} tab-zero{variant === "catalog" ? " — independent SaaS directory" : ""}
          </span>
          <nav>
            <Link href="/disclosure">Affiliate Disclosure</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
        {variant === "product" && (
          <div className="footer-links-row">
            <Link href="/">↩ Part of the tab-zero directory</Link>
          </div>
        )}
        {variant === "catalog" && (
          <p className="micro-note footer-disclosure-note">
            We&apos;re an independent affiliate directory — some links on this site earn us a
            commission if you sign up. See our <Link href="/disclosure">disclosure</Link>.
          </p>
        )}
      </div>
    </footer>
  );
}
