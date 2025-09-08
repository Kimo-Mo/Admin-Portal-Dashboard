import { DashLayout } from './components/layouts';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/login/LoginPage';
import { OrganizationPage, OrgDetailsPage, UsersPage } from './pages/dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<h1 className="text-2xl font-bold">Admin Portal</h1>} />
          <Route path="users" element={<UsersPage />} />

          <Route path="organizations">
            <Route index element={<OrganizationPage />} />
            <Route path=":key" element={<OrgDetailsPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
