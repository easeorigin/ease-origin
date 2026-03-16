import { ImageResponse } from "next/og";

export const alt = "EaseOrigin | Federal IT Consulting & Cloud Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: "#0A1628",
          position: "relative",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#D4AF37",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              backgroundColor: "#1E3A5F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "40px", fontWeight: 800, color: "#D4AF37" }}>
              E
            </span>
          </div>
          <span style={{ fontSize: "36px", fontWeight: 700, color: "#ffffff" }}>
            EaseOrigin
          </span>
        </div>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Federal IT Consulting &{" "}
          <span style={{ color: "#D4AF37" }}>Cloud Solutions</span>
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#9CA3AF",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          Enterprise IT expertise for U.S. government agencies and prime
          contractors nationwide.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
