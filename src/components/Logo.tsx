import Link from "next/link";

export function Logo({ chromeless = false }: { chromeless?: boolean }) {
  return (
    <Link className="logo-mark" href="/" aria-label={chromeless ? "tab-zero" : "tab-zero home"}>
      <svg width={chromeless ? 22 : 24} height={chromeless ? 17 : 19} viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="1.2" width="24" height="18.8" rx="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M9.5 6.1L18.5 15.1M18.5 6.1L9.5 15.1" stroke="var(--accent)" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
      <span className="logo-text">
        tab-<span className="logo-accent">zero</span>
      </span>
    </Link>
  );
}
