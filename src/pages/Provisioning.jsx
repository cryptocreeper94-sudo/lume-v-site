import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Shield, CheckCircle2, Loader2 } from 'lucide-react';

export default function Provisioning() {
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState('provisioning');
  const navigate = useNavigate();

  useEffect(() => {
    const deploymentSteps = [
      { text: "[Sys] Authenticated via Stripe Webhook.", delay: 500 },
      { text: "[Crypto] Generating Ed25519 Root Trust Keys...", delay: 1500 },
      { text: "[Crypto] Keys generated: ed25519:v1:0x7F9B2A...", delay: 2000 },
      { text: "[LGS] Spinning up Legacy Governance Substrate (Lume-V)...", delay: 3500 },
      { text: "[LGS] Enforcing 7 Safety Invariants...", delay: 4000 },
      { text: "[LGS] Substrate Node online. Latency < 4ms.", delay: 4800 },
      { text: "[FLA] Synchronizing with Fractal Ledger Architecture...", delay: 6000 },
      { text: "[FLA] Ledger synced at Block Height: 8,204,911", delay: 7500 },
      { text: "[Sys] Binding Ed25519 Keys to Tenant ID: org_7x9b...", delay: 8500 },
      { text: "[Sys] Enterprise Environment Deployed Successfully.", delay: 9500 },
    ];

    let currentLogIndex = 0;
    const timeouts = [];

    deploymentSteps.forEach((step, index) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, step.text]);
        if (index === deploymentSteps.length - 1) {
          setTimeout(() => {
            setStatus('complete');
            setTimeout(() => {
              navigate('/dashboard/org_7x9b');
            }, 1500);
          }, 1000);
        }
      }, step.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [navigate]);

  return (
    <div style={{ minHeight: '100vh', background: '#020617', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {status === 'provisioning' ? (
          <Loader2 className="animate-spin text-cyan" size={48} />
        ) : (
          <CheckCircle2 color="#10b981" size={48} />
        )}
        <h1 style={{ color: '#fff', fontSize: '2rem' }}>
          {status === 'provisioning' ? 'Deploying Enterprise Node' : 'Deployment Complete'}
        </h1>
        <p style={{ color: '#94a3b8' }}>Please do not close this window.</p>
      </div>

      <div style={{ width: '100%', maxWidth: '800px', background: '#0f172a', borderRadius: '12px', border: '1px solid #1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#1e293b', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #334155' }}>
          <Terminal size={16} color="#94a3b8" />
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'monospace' }}>sys_provision.sh</span>
        </div>
        <div style={{ padding: '1.5rem', minHeight: '300px', fontFamily: 'monospace', color: '#38bdf8', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {logs.map((log, i) => (
            <div key={i} className="fade-in-up" style={{ animationDuration: '0.3s' }}>
              {log.includes('Successfully') || log.includes('online') || log.includes('synced') ? (
                <span style={{ color: '#10b981' }}>{log}</span>
              ) : log.includes('Generating') || log.includes('Spinning') || log.includes('Synchronizing') ? (
                <span style={{ color: '#fcd34d' }}>{log}</span>
              ) : (
                log
              )}
            </div>
          ))}
          {status === 'provisioning' && (
            <div className="animate-pulse" style={{ width: '10px', height: '18px', background: '#38bdf8', marginTop: '0.5rem' }}></div>
          )}
        </div>
      </div>

    </div>
  );
}
