import React from 'react';

export default function Footer() {
  return (
    <footer className="section section-dark reveal" style={{ borderTop: "1px solid var(--border-color)", padding: "64px 0", minHeight: "auto", marginTop: 0 }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ fontFamily: "var(--font-heading)", fontWeight: "900", fontSize: "2rem", letterSpacing: "0.1em", color: "var(--text-secondary)" }}>
          LUME-V.
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "rgba(255,255,255,0.2)", marginBottom: "4px", fontSize: "1rem" }}>
            © 2026 DarkWave Studios LLC. All Rights Reserved.
          </div>
          <div style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.75rem" }}>
            Patent 64/032,339 & 64/047,737 Pending
          </div>
        </div>
      </div>
    </footer>
  );
}
