import React from 'react';
import { Shield, CheckCircle2, Server, Key, Lock, Activity } from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function MarketingPage() {
  return (
    <>
      <nav className="nav-header">
        <div className="nav-logo">
          <Shield className="text-accent" size={28} />
          <span>Lume-V Enterprise</span>
        </div>
        <div className="nav-actions">
          <Link to="/dashboard" style={{ textDecoration: 'none' }}><button style={{ cursor: 'pointer' }}>Dashboard Login</button></Link>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="hero-badge">Validation-as-a-Service (VaaS) API</div>
          <h1 className="hero-title">
            Mathematical Certainty for <br />
            <span className="text-blue-gradient">Legacy Stacks & AI.</span>
          </h1>
          <p className="hero-subtitle">
            Lume-V is an enterprise-grade deterministic middleware. We mathematically secure vulnerable legacy infrastructures and enforce strict safety invariants on AI models without requiring you to rewrite your codebase.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="tier-button primary" style={{ width: 'auto', padding: '1rem 2rem' }}>Get API Key</button>
            <button className="tier-button" style={{ width: 'auto', padding: '1rem 2rem' }}>Read Documentation</button>
          </div>
        </section>

        <section className="pricing-section">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Enterprise API Infrastructure</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Automated provisioning via Stripe. Get your Ed25519-signed API key instantly.</p>
          </div>

          <div className="pricing-grid">
            {/* Startup Tier */}
            <div className="pricing-card glass-panel">
              <img src="/server.png" alt="Server Infrastructure" className="card-image" />
              <div className="card-content">
                <h3 className="tier-name text-gradient">Startup Tier</h3>
                <div className="tier-price">$299<span>/mo</span></div>
                <ul className="tier-features">
                  <li><CheckCircle2 size={18} className="text-accent" /> 100,000 Validations / month</li>
                  <li><CheckCircle2 size={18} className="text-accent" /> Legacy Infrastructure Wrapper</li>
                  <li><CheckCircle2 size={18} className="text-accent" /> AI Safety Invariants API</li>
                  <li><CheckCircle2 size={18} className="text-accent" /> Community Support</li>
                </ul>
                <button className="tier-button">Subscribe via Stripe</button>
              </div>
            </div>

            {/* Professional Tier */}
            <div className="pricing-card glass-panel" style={{ border: '1px solid var(--text-accent)' }}>
              <img src="/boardroom.png" alt="Enterprise Boardroom" className="card-image" />
              <div className="card-content">
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--text-accent)', color: '#000', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>RECOMMENDED</div>
                <h3 className="tier-name text-blue-gradient">Professional Tier</h3>
                <div className="tier-price">$899<span>/mo</span></div>
                <ul className="tier-features">
                  <li><CheckCircle2 size={18} className="text-accent" /> 1,000,000 Validations / month</li>
                  <li><Lock size={18} className="text-accent" /> Full Legacy Stack Wrapping</li>
                  <li><Key size={18} className="text-accent" /> Ed25519 Trust Certificates</li>
                  <li><Activity size={18} className="text-accent" /> Multi-Agent Arbitration API</li>
                </ul>
                <button className="tier-button primary">Subscribe via Stripe</button>
              </div>
            </div>

            {/* On-Premise Tier */}
            <div className="pricing-card glass-panel">
              <img src="/architecture.png" alt="Corporate Architecture" className="card-image" />
              <div className="card-content">
                <h3 className="tier-name text-gradient">On-Premise</h3>
                <div className="tier-price">$5,000+<span>/mo</span></div>
                <ul className="tier-features">
                  <li><Lock size={18} className="text-accent" /> Unlimited Local Validations</li>
                  <li><Server size={18} className="text-accent" /> Zero Network Latency</li>
                  <li><CheckCircle2 size={18} className="text-accent" /> Private VPC Deployment</li>
                  <li><CheckCircle2 size={18} className="text-accent" /> Dedicated Solutions Architect</li>
                </ul>
                <button className="tier-button">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Export handled inline
