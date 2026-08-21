"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function AffiliateCta({
  href,
  external,
  contentName,
  className,
  children,
}: {
  href: string;
  external: boolean;
  contentName: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href={href}
      data-affiliate-link={contentName}
      onClick={() => {
        window.fbq?.("trackCustom", "AffiliateClick", { content_name: contentName });
      }}
      {...(external ? { target: "_blank", rel: "sponsored noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
