import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import PatientManagement from './pages/PatientManagement';
import DoctorManagement from './pages/DoctorManagement';
import Appointment from './pages/Appointment';
import MedicalRecord from './pages/MedicalRecord';
import Pharmacy from './pages/Pharmacy';
import Examination from './pages/Examination';
import WardManagement from './pages/WardManagement';
import Billing from './pages/Billing';
import Inventory from './pages/Inventory';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  // 这里可以添加身份验证逻辑
  const isAuthenticated = true; // 假设用户已登录

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* 受保护的路由 */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Layout />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="patient-management" element={<PatientManagement />} />
        <Route path="doctor-management" element={<DoctorManagement />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="medical-record" element={<MedicalRecord />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="examination" element={<Examination />} />
        <Route path="ward-management" element={<WardManagement />} />
        <Route path="billing" element={<Billing />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      
      {/* 404页面 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App; 