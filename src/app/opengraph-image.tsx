import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0F1116",
          color: "#ECEEF3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <svg width="52" height="41" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="1.2" width="24" height="18.8" rx="4" stroke="#ECEEF3" strokeWidth="2.2" />
            <path d="M9.5 6.1L18.5 15.1M18.5 6.1L9.5 15.1" stroke="#F0824B" strokeWidth="2.3" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 600 }}>
            <span>tab-</span>
            <span style={{ color: "#F0824B" }}>zero</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 600, lineHeight: 1.15, maxWidth: 920 }}>
          Marketing tools worth trying — reviewed before we recommend them.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9AA3B2", marginTop: 28 }}>
          An independent SaaS directory
        </div>
      </div>
    ),
    { ...size }
  );
}
