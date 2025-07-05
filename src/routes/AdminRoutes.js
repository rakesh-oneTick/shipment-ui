// Import the upload page
import AdminUploadCase from './pages/AdminUploadCase';
import AdminDashboard from '../pages/AdminDashboard';

// Inside your <Routes> block:
<>
  <Route path="/admin/upload" element={<AdminUploadCase />} />
  <Route path="/admin/dashboard" element={<AdminDashboard />} />
  {/* <Route path="/" element={<AdminDashboard />} /> */}
</>