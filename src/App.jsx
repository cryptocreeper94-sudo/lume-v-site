import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';

// /provision and /dashboard were simulated flows (scripted "Stripe webhook" log,
// fake block height, generated API keys, invented validation counts). Self-service
// provisioning does not exist yet, so both routes now lead to the pilot request.
// Dashboard.jsx and Provisioning.jsx are kept in src/pages, unrouted, for when a
// real hosted API exists.
// Same build is served at lumev.tlid.io/ and invariant.tlid.io/lume-v/.
const BASENAME = typeof window !== 'undefined' && window.location.pathname.startsWith('/lume-v') ? '/lume-v' : undefined;

function App() {
  return (
    <Router basename={BASENAME}>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/provision" element={<Navigate to="/#pilot" replace />} />
        <Route path="/dashboard/*" element={<Navigate to="/#pilot" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
