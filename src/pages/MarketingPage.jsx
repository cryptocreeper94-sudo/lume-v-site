import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, CheckCircle2, Server, Key, Lock, Activity, ArrowRight,
  ChevronRight, Cpu, Eye, FileCheck, Zap, AlertTriangle, Radio,
  Layers, GitBranch, ShieldCheck, Globe, Factory, TrendingUp, Network
} from 'lucide-react';
import HeroSlideshow from '../components/HeroSlideshow';
import Carousel from '../components/Carousel';
import AnimatedCounter from '../components/AnimatedCounter';
import Footer from '../components/Footer';

export default function MarketingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="marketing-page">
      <nav className="nav-header">
        <div className="nav-logo">
          <Shield size={28} color="#38bdf8" />
          <span>Lume-V</span>
        </div>
        <ul className="nav-links">
          <li><a href="#product">Product</a></li>
          <li><a href="#architecture">Architecture</a></li>
          <li><a href="#safety">Safety</a></li>
          <li><a href="#integrations">Integrations</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <div className="nav-actions">
          <Link to="/dashboard"><button>Dashboard</button></Link>
        </div>
      </nav>

      <HeroSlideshow images={[
        '/images/hero_1.png',
        '/images/hero_2.png',
        '/images/hero_3.png',
        '/images/hero_4.png'
      ]}>
        <div className="hero-badge fade-in-up">Validation-as-a-Service (VaaS) API</div>
        <h1 className="hero-title fade-in-up" style={{ transitionDelay: '0.1s' }}>
          Mathematical Certainty for<br />
          <span style={{ color: '#38bdf8' }}>Legacy Stacks & AI.</span>
        </h1>
        <p className="hero-subtitle fade-in-up" style={{ transitionDelay: '0.2s' }}>
          Lume-V is an enterprise-grade deterministic middleware that mathematically secures
          vulnerable legacy infrastructures and enforces strict safety invariants on AI models —
          without requiring you to rewrite a single line of your existing codebase.
        </p>
        <div className="hero-cta-group fade-in-up" style={{ transitionDelay: '0.3s' }}>
          <button className="hero-cta-primary">Get API Key</button>
          <button className="hero-cta-secondary">Read Documentation →</button>
        </div>
      </HeroSlideshow>

      <div className="stats-bar">
        <AnimatedCounter target={7} label="Safety Invariants" />
        <AnimatedCounter target={4} suffix="ms" label="Avg Latency" />
        <AnimatedCounter target={9} label="Integration Modes" />
        <AnimatedCounter target={24} label="Demo Decisions" suffix="/24 verified" />
      </div>

      <section id="product" className="section">
        <div className="section-inner section-split">
          <div className="fade-in-up">
            <span className="section-badge">WHY LUME-V EXISTS</span>
            <h2 className="section-title">"Probably Correct" Is Not Good Enough.</h2>
            <p className="section-subtitle">
              The entire industry is rushing to deploy generative AI models that are inherently
              nondeterministic. They change their output based on temperature, random seeds, and
              hidden system prompts that drift over time. You cannot build safe, auditable systems
              on foundations that shift without warning. Lume-V eliminates this uncertainty with
              mathematical invariants that guarantee behavioral correctness — every call, every time.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={400}>
              <div className="feature-card">
                <img src="/images/problem_medical.png" alt="Medical Diagnostics" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Medical Diagnostics</h3>
                  <p className="feature-card-desc">An AI diagnostic model that changes its confidence score for the same scan between Tuesday and Wednesday is not a model you can trust with patient outcomes.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/problem_autonomous.png" alt="Autonomous Systems" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Autonomous Systems</h3>
                  <p className="feature-card-desc">A self-driving perception model that silently degrades its object classification confidence under slightly different lighting conditions introduces invisible risk.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/problem_financial.png" alt="Financial Trading" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Financial Trading</h3>
                  <p className="feature-card-desc">A trading algorithm that produces different risk assessments for identical market states due to floating-point nondeterminism can trigger catastrophic losses.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="architecture" className="section section-dark">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">DETERMINISTIC PIPELINE</span>
            <h2 className="section-title">Six Stages. Zero Ambiguity.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Every AI output passes through a six-stage deterministic pipeline before
              it reaches your system. Each stage is independently auditable and cryptographically verifiable.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={350}>
              <div className="feature-card">
                <img src="/images/pipeline_input.png" alt="Input Adaptation" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">1. Input Adaptation</h3>
                  <p className="feature-card-desc">Five specialized adapters normalize inputs from vision models, LLMs, softmax classifiers, sensor fusion arrays, and control command systems into a unified proposal format.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/pipeline_normalize.png" alt="Normalization" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">2. Normalization</h3>
                  <p className="feature-card-desc">Raw AI outputs are transformed into a deterministic canonical form. Floating-point values are quantized. Confidence scores are bounded. Metadata is extracted and tagged.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/pipeline_validate.png" alt="Invariant Validation" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">3. Invariant Validation</h3>
                  <p className="feature-card-desc">The normalized proposal is evaluated against all 7 safety invariants simultaneously. Any violation triggers an immediate rejection with a structured explanation.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/pipeline_explain.png" alt="Explainability Trace" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">4. Explainability Trace</h3>
                  <p className="feature-card-desc">A deterministic reasoning trace is generated in both machine-readable JSON and human-readable narrative format. Every decision is fully auditable.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/pipeline_certify.png" alt="Trust Certification" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">5. Trust Certification</h3>
                  <p className="feature-card-desc">Approved proposals receive an Ed25519-signed Lume Trust Certificate (LTC v1.0). The certificate chain is cryptographically verifiable and tamper-evident.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/pipeline_emit.png" alt="Governed Emission" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">6. Governed Emission</h3>
                  <p className="feature-card-desc">The certified output is delivered to your system through your chosen integration pattern. Rejected proposals return structured error objects with remediation guidance.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="safety" className="section">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">THE SEVEN INVARIANTS</span>
            <h2 className="section-title">Deterministic Safety Guarantees.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Every AI proposal must pass all seven invariants before Lume-V will certify it.
              A single violation triggers an immediate, documented rejection. No exceptions. No overrides.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={350}>
              <div className="feature-card">
                <img src="/images/safety_confidence.png" alt="Confidence Threshold" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Confidence Threshold</h3>
                  <p className="feature-card-desc">Rejects any proposal whose confidence score falls below the configured minimum. Prevents low-certainty AI outputs from reaching production systems.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/safety_contradiction.png" alt="Contradiction Detection" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Contradiction Detection</h3>
                  <p className="feature-card-desc">Identifies proposals that contradict previously certified outputs within the same session or context window. Ensures logical consistency across decisions.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/safety_override.png" alt="Unauthorized Override" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Unauthorized Override</h3>
                  <p className="feature-card-desc">Blocks any attempt to override safety constraints, escalate privileges, or bypass validation layers. Enforces strict chain-of-authority governance.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/safety_ambiguity.png" alt="Ambiguity Resolution" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Ambiguity Resolution</h3>
                  <p className="feature-card-desc">Rejects proposals with multiple competing interpretations or unclear intent signals. Forces explicit disambiguation before certification.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/safety_temporal.png" alt="Temporal Consistency" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Temporal Consistency</h3>
                  <p className="feature-card-desc">Ensures that identical inputs produce identical outputs across time. Detects temporal drift in model behavior and flags silent degradation.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/safety_ood.png" alt="Out-of-Distribution" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Out-of-Distribution</h3>
                  <p className="feature-card-desc">Identifies inputs that fall outside the model's trained distribution. Prevents hallucinated or fabricated outputs from reaching downstream systems.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/safety_multiagent.png" alt="Multi-Agent Consensus" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Multi-Agent Consensus</h3>
                  <p className="feature-card-desc">When multiple AI agents contribute to a decision, enforces a consensus-by-safety protocol. No single agent can override the collective safety assessment.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-inner section-split">
          <div className="fade-in-up">
            <span className="section-badge">ED25519 CRYPTOGRAPHIC TRUST</span>
            <h2 className="section-title">Every Decision, Signed and Sealed.</h2>
            <p className="section-subtitle">
              Every approved AI decision receives an Ed25519-signed Lume Trust Certificate (LTC v1.0).
              The certificate contains a SHA-256 hash of the input, the full validation result, a timestamp,
              and the governor's digital signature. Certificates are independently verifiable, tamper-evident,
              and form an immutable chain of trust from input to output.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="code-block">
<pre><code>{`{
  `}
<span className="code-key">"type"</span>{`: `}<span className="code-string">"LTC_V1"</span>{`,
  `}
<span className="code-key">"decision"</span>{`: `}<span className="code-string">"APPROVED"</span>{`,
  `}
<span className="code-key">"confidence"</span>{`: 0.94,
  `}
<span className="code-key">"invariants_passed"</span>{`: 7,
  `}
<span className="code-key">"invariants_failed"</span>{`: 0,
  `}
<span className="code-key">"input_hash"</span>{`: `}<span className="code-string">"sha256:a4f2e8..."</span>{`,
  `}
<span className="code-key">"timestamp"</span>{`: `}<span className="code-string">"2026-06-18T06:15:00Z"</span>{`,
  `}
<span className="code-key">"signature"</span>{`: `}<span className="code-string">"ed25519:Mx9k2F..."</span>{`,
  `}
<span className="code-key">"governor_id"</span>{`: `}<span className="code-string">"lumev-gov-prod-01"</span>{`
}`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="section">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">9 INTEGRATION MODES</span>
            <h2 className="section-title">Deploy Your Way.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Lume-V fits into your existing architecture without requiring you to rewrite your stack.
              Choose the integration pattern that matches your infrastructure.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={350}>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <Layers size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Inline Middleware</h3>
                  <p className="feature-card-desc">Drop Lume-V directly into your request pipeline. Every AI call passes through validation before reaching your application logic.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <Eye size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Shadow Mode</h3>
                  <p className="feature-card-desc">Run Lume-V in parallel with your existing pipeline. Monitor and log without blocking. Perfect for evaluation before full deployment.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <Shield size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Gateway Proxy</h3>
                  <p className="feature-card-desc">Deploy as a reverse proxy in front of your AI endpoints. All traffic is validated transparently without modifying your application.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <Cpu size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Sidecar</h3>
                  <p className="feature-card-desc">Run alongside your services in a sidecar container. Kubernetes-native. Zero application code changes required.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <FileCheck size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Batch Validator</h3>
                  <p className="feature-card-desc">Process historical or batch AI outputs in bulk. Retroactively validate decisions and generate trust certificates for audit compliance.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <Zap size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Event-Driven</h3>
                  <p className="feature-card-desc">Subscribe to AI decision events via webhooks or message queues. Validate asynchronously without adding latency to your hot path.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <GitBranch size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Arbitration Hub</h3>
                  <p className="feature-card-desc">Coordinate multiple AI agents through a central arbitration layer. Enforce consensus-by-safety across competing proposals.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <ShieldCheck size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Compliance Layer</h3>
                  <p className="feature-card-desc">Insert between your AI systems and regulatory reporting. Auto-generate audit trails and compliance documentation.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="integration-icon-container">
                  <div className="integration-icon-bg">
                    <Network size={64} color="var(--accent)" />
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Hybrid</h3>
                  <p className="feature-card-desc">Combine any of the above patterns. Run inline for critical paths and shadow mode for experimental models simultaneously.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="use-cases" className="section section-dark">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">INDUSTRY APPLICATIONS</span>
            <h2 className="section-title">Built for the Systems That Cannot Fail.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Lume-V is deployed wherever AI decisions carry real-world consequences.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={400}>
              <div className="feature-card">
                <img src="/images/usecase_robotics.png" alt="Autonomous Robotics" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Autonomous Robotics</h3>
                  <p className="feature-card-desc">Govern perception and control models in real-time. Lume-V validates every decision loop at 4ms latency, ensuring deterministic behavior in safety-critical autonomous systems.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/usecase_medical.png" alt="Medical AI Systems" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Medical AI Systems</h3>
                  <p className="feature-card-desc">Enforce strict confidence thresholds and contradiction detection on diagnostic models. Every AI-assisted clinical recommendation receives a cryptographic trust certificate.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/usecase_trading.png" alt="Quantitative Finance" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Quantitative Finance</h3>
                  <p className="feature-card-desc">Eliminate nondeterministic drift in trading algorithms. Temporal consistency invariants ensure identical market states always produce identical risk assessments.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/usecase_infrastructure.png" alt="Critical Infrastructure" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Critical Infrastructure</h3>
                  <p className="feature-card-desc">Wrap legacy SCADA and ICS systems with deterministic safety governance. Protect industrial control systems from unpredictable AI behavior without replacing existing infrastructure.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src="/images/usecase_orchestration.png" alt="Multi-Agent Orchestration" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Multi-Agent Orchestration</h3>
                  <p className="feature-card-desc">Coordinate swarms of AI agents through consensus-by-safety arbitration. No single agent can make an uncertified decision that affects the collective system state.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">ENTERPRISE PRICING</span>
            <h2 className="section-title">Infrastructure-Grade Governance.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Automated provisioning via Stripe. Get your Ed25519-signed API key instantly.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={350}>
              <div className="pricing-card">
                <img src="/server.png" alt="Startup Tier" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="tier-name">Startup</h3>
                  <div className="tier-price">$299<span className="tier-period">/mo</span></div>
                  <ul className="tier-features">
                    <li><CheckCircle2 size={16} color="var(--accent)" /> 100,000 Validations / month</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Legacy Infrastructure Wrapper</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> AI Safety Invariants API</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Community Support</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Standard SLA</li>
                  </ul>
                  <button className="tier-button">Subscribe via Stripe</button>
                </div>
              </div>
              
              <div className="pricing-card recommended">
                <div className="tier-badge">RECOMMENDED</div>
                <img src="/boardroom.png" alt="Professional Tier" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="tier-name">Professional</h3>
                  <div className="tier-price">$899<span className="tier-period">/mo</span></div>
                  <ul className="tier-features">
                    <li><CheckCircle2 size={16} color="var(--accent)" /> 1,000,000 Validations / month</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Full Legacy Stack Wrapping</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Ed25519 Trust Certificates</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Multi-Agent Arbitration API</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Priority Support + SLA</li>
                  </ul>
                  <button className="tier-button primary">Subscribe via Stripe</button>
                </div>
              </div>

              <div className="pricing-card">
                <img src="/architecture.png" alt="On-Premise Tier" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="tier-name">On-Premise</h3>
                  <div className="tier-price">$5,000+<span className="tier-period">/mo</span></div>
                  <ul className="tier-features">
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Unlimited Local Validations</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Zero Network Latency</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Private VPC Deployment</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Dedicated Solutions Architect</li>
                    <li><CheckCircle2 size={16} color="var(--accent)" /> Custom SLA + 24/7 Support</li>
                  </ul>
                  <a href="mailto:team@dwsc.io">
                    <button className="tier-button">Contact Sales</button>
                  </a>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
