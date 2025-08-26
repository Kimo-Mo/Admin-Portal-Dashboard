import { DashLayout } from './components/layouts';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/login/LoginPage';

import { UsersPage } from '@/pages/dashboard/usersPage';
import OrganizationPage from './pages/dashboard/organizationPage/OrganizationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<h1 className="text-2xl font-bold">Admin Portal</h1>} />
          <Route path="users" element={<UsersPage />} />

          <Route path="organizations" element={<OrganizationPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
