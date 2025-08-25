import { DashLayout } from './components/layouts';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/login/LoginPage';
import ProductsTable from './components/dashboard/organization/Table';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<h1 className="text-2xl font-bold">Admin Portal</h1>} />
          <Route path="/dashboard/org" element={<ProductsTable></ProductsTable>} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
