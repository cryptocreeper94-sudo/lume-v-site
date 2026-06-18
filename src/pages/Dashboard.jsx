import React, { useState } from 'react';
import { Shield, Key, Activity, Settings, Database, AlertTriangle, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [telemetryData, setTelemetryData] = React.useState([]);
  const [totals, setTotals] = React.useState({ validations: 0, blocked: 0 });
  const [apiKeys, setApiKeys] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:4000/v1/dashboard/telemetry')
      .then(res => res.json())
      .then(data => {
        if(data.telemetry) setTelemetryData(data.telemetry);
        if(data.totals) setTotals(data.totals);
      }).catch(err => console.error(err));

    fetch('http://localhost:4000/v1/dashboard/keys')
      .then(res => res.json())
      .then(data => {
        if(data.keys) setApiKeys(data.keys);
      }).catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      
      {/* Sidebar */}
      <div style={{ width: '280px', background: 'rgba(15, 23, 42, 0.8)', borderRight: '1px solid var(--border-color)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Shield className="text-accent" size={28} />
          <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Lume-V</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button onClick={() => setActiveTab('overview')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: activeTab === 'overview' ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: activeTab === 'overview' ? 'var(--text-accent)' : 'var(--text-secondary)', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
            <Activity size={18} /> Telemetry
          </button>
          <button onClick={() => setActiveTab('keys')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: activeTab === 'keys' ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: activeTab === 'keys' ? 'var(--text-accent)' : 'var(--text-secondary)', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
            <Key size={18} /> API Keys
          </button>
          <button onClick={() => setActiveTab('legacy')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: activeTab === 'legacy' ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: activeTab === 'legacy' ? 'var(--text-accent)' : 'var(--text-secondary)', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
            <Database size={18} /> Infrastructure Wrapper
          </button>
          <button onClick={() => setActiveTab('settings')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: activeTab === 'settings' ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: activeTab === 'settings' ? 'var(--text-accent)' : 'var(--text-secondary)', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
            <Settings size={18} /> Settings & Billing
          </button>
        </nav>

        <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <div style={{ marginBottom: '0.5rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={14} /> Systems Operational</div>
          Uptime: 99.998%<br/>Latency: 42ms
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
        
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Deterministic Telemetry</h1>
            
            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Validations (24h)</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>{totals.validations.toLocaleString()}</div>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Invariants Blocked</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f43f5e' }}>{totals.blocked.toLocaleString()}</div>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Trust Confidence</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>99.8%</div>
              </div>
            </div>

            {/* Chart */}
            <div className="glass-panel" style={{ padding: '2rem', height: '400px', marginBottom: '3rem' }}>
              <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>Validation Volume vs. Threats Blocked</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={telemetryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="var(--text-secondary)" />
                  <YAxis stroke="var(--text-secondary)" />
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #06b6d4', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="validations" stroke="#06b6d4" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="blocked" stroke="#f43f5e" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'keys' && (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>API Keys</h1>
              <button className="tier-button primary" style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>Generate New Key</button>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {apiKeys.length === 0 && <div style={{ color: 'var(--text-secondary)' }}>No active keys. Subscribe via Stripe to auto-provision.</div>}
              {apiKeys.map(key => (
                <div key={key.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Lume-V Access Key</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Created: {new Date(key.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem 1rem', borderRadius: '8px', fontFamily: 'monospace', color: 'var(--text-accent)', letterSpacing: '0.05em' }}>
                    {key.keyHash.substring(0, 16)}*****************
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'legacy' && (
          <div className="animate-fade-in">
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Infrastructure Wrappers</h1>
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid #10b981' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px' }}>
                  <Database size={24} color="#10b981" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>Spring Boot Monolith (Core Banking)</h3>
                  <div style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>Active - Protected</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Lume-V is currently wrapping all incoming/outgoing traffic to your legacy infrastructure. Nondeterministic and unauthorized data accesses are being mathematically blocked in real-time.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', cursor: 'pointer' }}>View Reverse Proxy Logs</button>
                <button style={{ padding: '0.5rem 1rem', background: 'transparent', color: '#f43f5e', border: '1px solid rgba(244, 63, 94, 0.5)', borderRadius: '6px', cursor: 'pointer' }}>Disable Wrapper</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
