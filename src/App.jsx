import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Budgets from './Components/Budgets/Budgets';
import Dashboard from './Components/Dashboard/Dashboard';
import Transactions from './Components/Transactions/Transactions';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '220px', padding: '2rem', flexGrow: 1 }}>
          <Routes>
            {/* Redirect root path to /dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" />} />

            {/* Main routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

