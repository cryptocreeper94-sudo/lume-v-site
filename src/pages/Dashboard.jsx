import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Shield, Key, Activity, Settings, Database, CheckCircle2, Server, Layers } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock Data Generator for tenant-isolated simulation
const generateTenantData = (tenantId) => {
  const seed = tenantId.length; 
  const validCount = 12400 + (seed * 100);
  const blockedCount = 420 + (seed * 10);
  const telemetry = [
    { time: '00:00', validations: 1200 + seed*10, blocked: 42 + seed },
    { time: '04:00', validations: 900 + seed*10, blocked: 31 + seed },
    { time: '08:00', validations: 2100 + seed*10, blocked: 89 + seed },
    { time: '12:00', validations: 4200 + seed*10, blocked: 210 + seed },
    { time: '16:00', validations: 3800 + seed*10, blocked: 185 + seed },
    { time: '20:00', validations: 2400 + seed*10, blocked: 95 + seed },
  ];
  return { telemetry, totals: { validations: validCount, blocked: blockedCount } };
};

export default function Dashboard() {
  const { tenantId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [telemetryData, setTelemetryData] = useState([]);
  const [totals, setTotals] = useState({ validations: 0, blocked: 0 });
  const [apiKeys, setApiKeys] = useState([]);

  useEffect(() => {
    // Simulate fetching tenant-isolated data
    const data = generateTenantData(tenantId || 'org_default');
    setTelemetryData(data.telemetry);
    setTotals(data.totals);
    
    // Simulate provisioned key
    setApiKeys([{
      id: 'key_1',
      keyHash: `lumev_live_${tenantId}_` + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString()
    }]);
  }, [tenantId]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      
      {/* Sidebar */}
      <div style={{ width: '280px', background: 'rgba(15, 23, 42, 0.8)', borderRight: '1px solid var(--border-color)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Shield className="text-accent" size={28} />
          <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Lume-V Workspace</span>
        </div>
        
        <div style={{ padding: '0.75rem', background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tenant ID</div>
          <div style={{ fontFamily: 'monospace', color: '#38bdf8', fontWeight: 600 }}>{tenantId || 'org_sandbox'}</div>
          <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: '#10b981' }}>
            <Server size={12} /> Dedicated Cloud
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button onClick={() => setActiveTab('overview')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: activeTab === 'overview' ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: activeTab === 'overview' ? 'var(--text-accent)' : 'var(--text-secondary)', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
            <Activity size={18} /> LGS Telemetry
          </button>
          <button onClick={() => setActiveTab('fla')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: activeTab === 'fla' ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: activeTab === 'fla' ? 'var(--text-accent)' : 'var(--text-secondary)', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
            <Layers size={18} /> FLA Nodes
          </button>
          <button onClick={() => setActiveTab('keys')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: activeTab === 'keys' ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: activeTab === 'keys' ? 'var(--text-accent)' : 'var(--text-secondary)', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
            <Key size={18} /> API Keys
          </button>
          <button onClick={() => setActiveTab('legacy')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: activeTab === 'legacy' ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: activeTab === 'legacy' ? 'var(--text-accent)' : 'var(--text-secondary)', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
            <Database size={18} /> Infrastructure Wrappers
          </button>
        </nav>

        <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <div style={{ marginBottom: '0.5rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={14} /> Ecosystem Synchronized</div>
          LGS Latency: 3.8ms<br/>FLA Block Time: 1.2s
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
        
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>LGS Deterministic Telemetry</h1>
            
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

        {activeTab === 'fla' && (
          <div className="animate-fade-in">
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Fractal Ledger Architecture (FLA)</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Tenant Ledger Status</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Sync State</span>
                    <span style={{ color: '#10b981', fontWeight: 600 }}>Fully Synchronized</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Block Height</span>
                    <span style={{ color: 'var(--text-primary)', fontFamily: 'monospace' }}>8,204,912</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>LTC v1.0 Certificates Anchored</span>
                    <span style={{ color: 'var(--text-primary)', fontFamily: 'monospace' }}>{totals.validations.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Layers size={48} color="#38bdf8" style={{ marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem' }}>Whitelabel Nodes Active</h3>
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>Your dedicated FLA nodes are cryptographically securing all deterministic outputs in real-time.</p>
              </div>
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
                    <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Lume-V / FLA Access Key</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Created: {new Date(key.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem 1rem', borderRadius: '8px', fontFamily: 'monospace', color: 'var(--text-accent)', letterSpacing: '0.05em' }}>
                    {key.keyHash.substring(0, 24)}...
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
                Lume-V is currently wrapping all incoming/outgoing traffic to your legacy infrastructure. Nondeterministic and unauthorized data accesses are being mathematically blocked in real-time, and every verified transaction is anchored to your FLA network.
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
