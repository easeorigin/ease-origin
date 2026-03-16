import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A1628",
          borderRadius: "32px",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "120px",
            fontWeight: 800,
            color: "#D4AF37",
            lineHeight: 1,
            marginTop: "-8px",
          }}
        >
          E
        </span>
        <div
          style={{
            position: "absolute",
            bottom: "18px",
            left: "20px",
            width: "140px",
            height: "12px",
            backgroundColor: "#1E3A5F",
            borderRadius: "6px",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "18px",
            left: "20px",
            width: "80px",
            height: "12px",
            backgroundColor: "#D4AF37",
            borderRadius: "6px",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
