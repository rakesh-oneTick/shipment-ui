// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages (we’ll build them one by one)
import UploadPage from './pages/UploadPage';
import RuleDefinitionPage from './pages/RuleDefinitionPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUploadCase from './pages/AdminUploadCase';
import UploadCase from './pages/UploadCase';


// import AdminLayout from './layout/AdminLayout';
// import AdminSidebar from './components/AdminSideBar';
// import RulePage from './pages/RulePage';
// import FeedbackPage from './pages/FeedbackPage';
// import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/add-rule" element={<RuleDefinitionPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/upload" element={<AdminUploadCase />} />
        <Route path="/admin/upload-multiple" element={<UploadCase />} />

        {/* <Route path="/rules" element={<RulePage />} />
        <Route path="/feedback" element={<FeedbackPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;



