import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import Dashboard from './pages/Dashboard';
import Provisioning from './pages/Provisioning';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/provision" element={<Provisioning />} />
        <Route path="/dashboard" element={<Navigate to="/dashboard/org_7x9b" replace />} />
        <Route path="/dashboard/:tenantId" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
