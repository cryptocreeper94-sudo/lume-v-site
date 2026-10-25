import React, { useEffect } from 'react';
import {
  Shield, Cpu, Eye, Layers, GitBranch, ShieldCheck, Network,
  Users, History, Radio
} from 'lucide-react';
import HeroSlideshow from '../components/HeroSlideshow';
import Carousel from '../components/Carousel';
import AnimatedCounter from '../components/AnimatedCounter';
import Footer from '../components/Footer';

// Facts on this page are taken from the Lume-V engine (github: lume-v, v2.0.0 README)
// and the founder's master handoff. Do not add metrics, deployments or prices here
// without a source; see Part XXVI of the handoff.
// Images live in public/images. Prefix with the build base so they resolve both at
// lumev.tlid.io (base /) and inside the ecosystem site at invariant.tlid.io/lume-v/.
const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;
const PILOT_MAILTO = 'mailto:team@dwsc.io?subject=Lume-V%20Shadow-Mode%20Pilot';

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
          <Shield size={28} color="#ffffff" />
          <span>Lume-V</span>
        </div>
        <ul className="nav-links">
          <li><a href="#product">Product</a></li>
          <li><a href="#architecture">Pipeline</a></li>
          <li><a href="#safety">Invariants</a></li>
          <li><a href="#integrations">Integrations</a></li>
          <li><a href="#pilot">Pilot</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#pilot"><button>Request a Pilot</button></a>
        </div>
      </nav>

      <HeroSlideshow images={[
        img('hero_1.png'),
        img('hero_2.png'),
        img('hero_3.png'),
        img('hero_4.png')
      ]}>
        <div className="hero-badge fade-in-up">Deterministic AI Governance and Validation Infrastructure</div>
        <h1 className="hero-title fade-in-up" style={{ transitionDelay: '0.1s' }}>
          Stop unsafe AI actions<br />
          <span style={{ color: '#ffffff' }}>before they reach production.</span>
        </h1>
        <p className="hero-subtitle fade-in-up" style={{ transitionDelay: '0.2s' }}>
          You already have AI. Keep it. Lume-V sits between AI-generated proposals and the systems they act on.
          It checks every proposal against configured safety invariants, produces an inspectable reasoning trace,
          and issues a cryptographically verifiable decision certificate.
        </p>
        <div className="hero-cta-group fade-in-up" style={{ transitionDelay: '0.3s' }}>
          <a href="#pilot"><button className="hero-cta-primary">Request a Shadow-Mode Pilot</button></a>
          <a href="#integrations"><button className="hero-cta-secondary">View Integration Patterns →</button></a>
        </div>
      </HeroSlideshow>

      <div className="stats-bar">
        <AnimatedCounter target={7} label="Safety Invariants" />
        <AnimatedCounter target={9} label="Integration Modes" />
        <AnimatedCounter target={5} label="Input Adapters" />
        <AnimatedCounter text="Ed25519" label="Signed Certificates" />
      </div>

      <section id="product" className="section section-light">
        <div className="section-inner section-split">
          <div className="fade-in-up">
            <span className="section-badge">THE PROBLEM</span>
            <h2 className="section-title">"Probably Correct" Is Not Good Enough.</h2>
            <p className="section-subtitle">
              AI models are probabilistic. That is fine for drafting text. It is not fine when a model's output
              moves money, changes a machine's state, or informs a clinical decision. Lume-V does not make the model
              smarter. It puts a deterministic boundary in front of it, so every proposal is checked against your
              rules before anything acts on it, and every decision leaves a record you can verify later.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardsToShow={1}>
              <div className="feature-card">
                <img src={img('problem_medical.png')} alt="Medical Diagnostics" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Medical Decision Support</h3>
                  <p className="feature-card-desc">A diagnostic model that reports different confidence for the same scan on different days needs a boundary between its output and the people relying on it.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('problem_autonomous.png')} alt="Autonomous Systems" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Autonomous Systems</h3>
                  <p className="feature-card-desc">A perception model whose confidence quietly drops under different lighting introduces risk no one sees until something goes wrong.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('problem_financial.png')} alt="Financial Trading" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Financial Systems</h3>
                  <p className="feature-card-desc">A model that proposes an action outside your limits should be stopped by a rule, not caught later in a review.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="architecture" className="section section-dark">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">SIX-STAGE VALIDATION PIPELINE</span>
            <h2 className="section-title">Six Operational Stages. One Deterministic Governance Boundary.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Every AI proposal passes through Lume-V's six-stage operational validation pipeline before reaching a
              downstream system.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={350}>
              <div className="feature-card">
                <img src={img('pipeline_input.png')} alt="Input Adaptation" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">1. Input Adaptation</h3>
                  <p className="feature-card-desc">Five adapters accept output from language models, vision models (bounding boxes), classifiers (confidence vectors), sensor fusion arrays, and control-command systems.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('pipeline_normalize.png')} alt="Normalization" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">2. Normalization</h3>
                  <p className="feature-card-desc">Each output becomes one standard proposal: type, confidence, payload and flags. Danger patterns, bound violations and contradictions are flagged here.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('pipeline_validate.png')} alt="Invariant Validation" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">3. Invariant Validation</h3>
                  <p className="feature-card-desc">The proposal is checked against all seven safety invariants. A critical failure rejects it. Warnings alone apply your configured safe fallback.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('pipeline_explain.png')} alt="Explainability Trace" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">4. Explainability Trace</h3>
                  <p className="feature-card-desc">A deterministic reasoning trace is produced in machine-readable JSON and plain language, showing which invariants passed or failed and why.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('pipeline_certify.png')} alt="Trust Certification" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">5. Trust Certification</h3>
                  <p className="feature-card-desc">Every decision, approved or not, receives an Ed25519-signed Lume Trust Certificate (LTC v1.0). The signer's key id sits inside the signed body, so anyone can verify it.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('pipeline_emit.png')} alt="Governed Emission" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">6. Governed Emission</h3>
                  <p className="feature-card-desc">Your system receives the approved payload or the configured safe fallback. Rejected proposals come back with the reasons attached.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="safety" className="section section-light">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">THE SEVEN INVARIANTS</span>
            <h2 className="section-title">Deterministic Safety Invariant Enforcement.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Every proposal is checked against all seven. A critical failure rejects it. Warnings apply your
              configured safe fallback. Safety failures can never be approved by a human reviewer.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={350}>
              <div className="feature-card">
                <img src={img('safety_confidence.png')} alt="Confidence Threshold" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">1. Confidence Threshold</h3>
                  <p className="feature-card-desc">Rejects any proposal whose confidence falls below the configured minimum.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('safety_contradiction.png')} alt="Contradiction Resolution" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">2. Contradiction Resolution</h3>
                  <p className="feature-card-desc">Rejects proposals when the reporting subsystems contradict each other and the contradiction has not been resolved, such as sensors that disagree.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('safety_override.png')} alt="Safety-First Override" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">3. Safety-First Override</h3>
                  <p className="feature-card-desc">Any danger pattern, forbidden action or out-of-bounds flag stops the proposal. Safety outranks every other consideration.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('safety_ambiguity.png')} alt="Ambiguity Escalation" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">4. Ambiguity Escalation</h3>
                  <p className="feature-card-desc">Near-ties between options, highly uncertain outputs and empty responses are escalated instead of passed through silently.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('safety_temporal.png')} alt="Temporal Consistency" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">5. Temporal Consistency</h3>
                  <p className="feature-card-desc">Flags confidence that swings back and forth across recent proposals in the same stream: one session, one device, one vehicle.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('safety_ood.png')} alt="Domain Boundary" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">6. Domain Boundary</h3>
                  <p className="feature-card-desc">Rejects proposals outside the declared action space, permission scope or configured operating bounds. For language models, it can also reject any number, date or name not supported by your allowed sources.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('safety_multiagent.png')} alt="Multi-Agent Consensus-by-Safety" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">7. Multi-Agent Consensus-by-Safety</h3>
                  <p className="feature-card-desc">When several agents contribute to a decision, any agent's safety flag blocks it. Agreement is decided by safety, not by majority vote.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-inner section-split">
          <div className="fade-in-up">
            <span className="section-badge">LUME TRUST CERTIFICATES</span>
            <h2 className="section-title">Every Decision, Signed and Verifiable.</h2>
            <p className="section-subtitle">
              Each decision produces an Ed25519-signed Lume Trust Certificate (LTC v1.0). The certificate id is a
              SHA-256 hash of its body, so any edit is detectable, and the signer's public key travels inside the
              signed body. A certificate can be verified anywhere, at any time, without calling back to us.
              Certificates are designed to be anchored to an independent ledger for long-term audit.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="code-block">
<pre><code>{`{
  `}
<span className="code-key">"ltc_version"</span>{`: `}<span className="code-string">"1.0"</span>{`,
  `}
<span className="code-key">"cert_type"</span>{`: `}<span className="code-string">"RUNTIME_CELL"</span>{`,
  `}
<span className="code-key">"cert_id"</span>{`: `}<span className="code-string">"&lt;sha256 of canonical body&gt;"</span>{`,
  `}
<span className="code-key">"issued_at"</span>{`: `}<span className="code-string">"&lt;ISO-8601 timestamp&gt;"</span>{`,
  `}
<span className="code-key">"issuer"</span>{`: { `}<span className="code-key">"authority"</span>{`: `}<span className="code-string">"lume-v-governor"</span>{`, `}<span className="code-key">"key_id"</span>{`: `}<span className="code-string">"ed25519:&lt;fingerprint&gt;"</span>{` },
  `}
<span className="code-key">"subject"</span>{`: { `}<span className="code-key">"subject_type"</span>{`: `}<span className="code-string">"ai_proposal_validation"</span>{` },
  `}
<span className="code-key">"security_proofs"</span>{`: [ `}<span className="code-string">"&lt;one result per invariant&gt;"</span>{` ],
  `}
<span className="code-key">"chain"</span>{`: { `}<span className="code-key">"parent_cert"</span>{`: `}<span className="code-string">"ROOT"</span>{`, `}<span className="code-key">"depth"</span>{`: 0 },
  `}
<span className="code-key">"metadata"</span>{`: { `}<span className="code-key">"decision"</span>{`: `}<span className="code-string">"approved"</span>{` },
  `}
<span className="code-key">"signature"</span>{`: `}<span className="code-string">"&lt;base64 Ed25519 signature&gt;"</span>{`
}`}</code></pre>
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Simplified LTC v1.0 example. Field names match the engine; values are placeholders, not a real record.
            </p>
          </div>
        </div>
      </section>

      <section id="integrations" className="section section-light">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">9 INTEGRATION MODES</span>
            <h2 className="section-title">Fits the System You Already Run.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Designed to integrate with existing infrastructure and modern AI systems without replacing your stack.
              All nine modes are implemented in the engine.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={350}>
              {[
                { icon: Layers, title: 'Inline', desc: 'A blocking gate. Nothing reaches your system without passing validation.' },
                { icon: Eye, title: 'Shadow', desc: 'Runs beside your pipeline without blocking. Logs what Lume-V would have stopped.' },
                { icon: GitBranch, title: 'Arbitration', desc: 'Resolves competing proposals from an ensemble of models by safety, not majority.' },
                { icon: Radio, title: 'Sensor Fusion', desc: 'A reality check after sensor fusion, before the fused result is acted on.' },
                { icon: ShieldCheck, title: 'Gatekeeper', desc: 'Anything not cleanly approved waits for manual approval.' },
                { icon: Cpu, title: 'Orchestration', desc: 'Your services run their own pre-checks before the governor makes the final call.' },
                { icon: Network, title: 'Fleet', desc: "Each decision considers every agent's latest state, not just the one proposing." },
                { icon: Users, title: 'Human-in-the-Loop', desc: 'Only reviewable cases reach a person. Unanswered reviews expire to deny, and every human decision is signed.' },
                { icon: History, title: 'Forensics', desc: 'Re-validates a recorded timeline to detect tampering or drift after the fact.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div className="feature-card" key={title}>
                  <div className="integration-icon-container">
                    <div className="integration-icon-bg">
                      <Icon size={64} color="var(--accent)" />
                    </div>
                  </div>
                  <div className="feature-card-body">
                    <h3 className="feature-card-title">{title}</h3>
                    <p className="feature-card-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section id="use-cases" className="section section-dark">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">WHERE IT FITS</span>
            <h2 className="section-title">Built for Decisions With Consequences.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Designed for environments where AI decisions carry real-world consequences.
            </p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={400}>
              <div className="feature-card">
                <img src={img('usecase_robotics.png')} alt="Autonomous Robotics" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Robotics and Autonomous Systems</h3>
                  <p className="feature-card-desc">Check perception and control proposals against configured physical bounds before a command executes.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('usecase_medical.png')} alt="Medical AI Systems" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Medical Decision Support</h3>
                  <p className="feature-card-desc">Apply confidence thresholds and contradiction checks to model output, with a signed record of every recommendation. Clinical decisions stay with clinicians.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('usecase_trading.png')} alt="Financial Systems" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Financial Systems</h3>
                  <p className="feature-card-desc">Enforce limits and domain bounds on model-proposed actions, and keep a verifiable record of each decision for audit.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('usecase_infrastructure.png')} alt="Industrial and Infrastructure" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Industrial and Infrastructure</h3>
                  <p className="feature-card-desc">Place a deterministic check between AI recommendations and existing control systems, without replacing those systems.</p>
                </div>
              </div>
              <div className="feature-card">
                <img src={img('usecase_orchestration.png')} alt="Multi-Agent Orchestration" className="feature-card-image" />
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Multi-Agent Systems</h3>
                  <p className="feature-card-desc">Use fleet and arbitration modes so no single agent can push an unsafe decision into shared state.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="evidence" className="section section-light">
        <div className="section-inner">
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <span className="section-badge">EVIDENCE SO FAR</span>
            <h2 className="section-title">What Is Proven, and What Is Not Yet.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Lume-V is one safety layer inside a defense-in-depth design. It does not improve the underlying
              model's accuracy, and its protection depends on correctly configured thresholds, fallbacks and action spaces.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Carousel cardWidth={380}>
              <div className="feature-card">
                <div className="feature-card-body">
                  <h3 className="feature-card-title">In Use on Our Own Product</h3>
                  <p className="feature-card-desc">Lume-V v2.0 governs every language-model response in AXIOM42, DarkWave's own assistant. Unsourced specifics are labelled or blocked, and safety failures are always blocked.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-card-body">
                  <h3 className="feature-card-title">0.02 ms Average Governance Latency*</h3>
                  <p className="feature-card-desc">Simulation result: 1,000-cycle drone-control simulation. P95 0.03 ms, P99 2.09 ms, maximum 5.90 ms.</p>
                  <p className="feature-card-desc" style={{ fontSize: '0.8rem', opacity: 0.8 }}>*Production performance depends on hardware, integration topology, workload, policy configuration, networking, certificate operations and other deployment factors.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-card-body">
                  <h3 className="feature-card-title">Patent Pending</h3>
                  <p className="feature-card-desc">U.S. Provisional Patent Application No. 64/032,339, assigned to DarkWave Studios LLC.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="pilot" className="section section-dark">
        <div className="section-inner section-split">
          <div className="fade-in-up">
            <span className="section-badge">SHADOW-MODE PILOT</span>
            <h2 className="section-title">See What Lume-V Would Stop Before Giving It Control.</h2>
            <p className="section-subtitle">
              Run Lume-V beside your existing AI pipeline without allowing it to block production decisions. Lume-V
              evaluates proposals, records invariant outcomes, produces deterministic reasoning traces, and shows
              which proposals would have been approved, rejected, escalated, or routed to configured safe fallbacks.
            </p>
            <div className="hero-cta-group" style={{ justifyContent: 'flex-start', marginTop: '2rem' }}>
              <a href={PILOT_MAILTO}><button className="hero-cta-primary">Request a Shadow-Mode Pilot</button></a>
              <a href="#integrations"><button className="hero-cta-secondary">View Integration Patterns →</button></a>
            </div>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="feature-card">
              <div className="feature-card-body">
                <h3 className="feature-card-title">Possible pilot outputs</h3>
                <ul className="feature-card-desc" style={{ paddingLeft: '1.2rem', lineHeight: 1.9, margin: 0 }}>
                  <li>Invariant pass/fail distribution</li>
                  <li>Contradiction and ambiguity events</li>
                  <li>Domain-boundary violations</li>
                  <li>Temporal-consistency findings</li>
                  <li>Multi-agent arbitration outcomes</li>
                  <li>Sample trust certificates</li>
                  <li>Recommended enforcement configuration</li>
                  <li>Integration recommendation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
