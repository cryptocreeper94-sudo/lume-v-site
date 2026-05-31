import React from 'react';
import { Shield, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-strong)', padding: '4rem 2rem 2rem', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem', maxWidth: '1200px', margin: '0 auto 4rem' }}>

        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem' }}>
            <div style={{ padding: '6px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '8px' }}>
              <Shield size={20} color="var(--accent-cyan)" />
            </div>
            Lume-V Enterprise
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '250px', lineHeight: 1.6 }}>
            Deterministic governance, Validation-as-a-Service, and safety infrastructure by DarkWave Studios.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
            Patent Pending: US 64/032,339<br/>
            Patent Pending: US 64/047,512
          </p>
        </div>

        {/* Platform */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Platform</h4>
          <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Get API Key</a>
          <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Documentation</a>
          <a href="https://lumescan.tech" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Lume Scan Auto</a>
          <a href="https://trustbook.tlid.io" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>TrustBook</a>
        </div>

        {/* Ecosystem */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ecosystem</h4>
          <a href="https://lume42.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Lume42 Labs</a>
          <a href="https://dwtl.io" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Trust Layer Ledger</a>
          <a href="https://axiomstudio.tech" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Axiom Studio</a>
          <a href="https://trustgen.design" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>TrustGen 3D</a>
          <a href="https://trustshield.tech" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>TrustShield</a>
          <a href="https://darkwavestudios.io" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: '#38bdf8', textDecoration: 'none' }}>DarkWave Studios</a>
        </div>

        {/* Legal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal & Compliance</h4>
          <a href="/terms" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
          <a href="/privacy" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/sms-terms" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>SMS Terms & Conditions</a>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>US Pat. App. 64/047,467</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>US Pat. App. 64/047,496</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>© 2026 DarkWave Studios LLC. All rights reserved.</p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', letterSpacing: '0.03em', margin: 0 }}>
            Proudly made in Gladeville, TN, USA
          </p>
          <svg width="24" height="16" viewBox="0 0 7410 3900" style={{ borderRadius: '2px', overflow: 'hidden' }}>
            <rect width="7410" height="3900" fill="#b22234"/>
            <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
            <rect width="2964" height="2100" fill="#3c3b6e"/>
            <g fill="#fff">
              <g id="s18">
                <g id="s9">
                  <g id="s5">
                    <g id="s4">
                      <path id="s" d="M247,90 317.534,307.084 132.873,172.916H361.127L176.466,307.084z"/>
                      <use href="#s" y="420"/>
                      <use href="#s" y="840"/>
                      <use href="#s" y="1260"/>
                    </g>
                    <use href="#s" y="1680"/>
                  </g>
                  <use href="#s4" x="247" y="210"/>
                </g>
                <use href="#s9" x="494"/>
              </g>
              <use href="#s18" x="988"/>
              <use href="#s9" x="1976"/>
              <use href="#s5" x="2470"/>
            </g>
          </svg>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            System Status: <span style={{ color: '#10b981' }}>● Operational</span>
          </p>
        </div>
      </div>

      {/* Compliance Text */}
      <div className="container" style={{ paddingTop: '1.5rem', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.65rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.3)', maxWidth: '800px', margin: '0 auto' }}>
          By subscribing to Lume-V Enterprise or utilizing our APIs, you agree to our <a href="/terms" style={{ color: 'var(--accent-cyan)' }}>Terms of Service</a>. If you opt-in to SMS alerts for automated system notifications, message and data rates may apply. Reply STOP at any time to cancel. SMS data is strictly governed by our <a href="/sms-terms" style={{ color: 'var(--accent-cyan)' }}>SMS Privacy Policy</a>. Lume-V is an infrastructure-grade determinism engine protected by pending patents.
        </p>
      </div>
    </footer>
  );
}
