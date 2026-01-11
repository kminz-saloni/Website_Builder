import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import EmergencyPlumbersPage from './pages/EmergencyPlumbersPage';
import AutoLocksmithPage from './pages/AutoLocksmithPage';
import DentistPage from './pages/DentistPage';
import HouseCleaningPage from './pages/HouseCleaningPage';
import ElectricianPage from './pages/ElectricianPage';
import HVACPage from './pages/HVACPage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="industries/emergency-plumbers" element={<EmergencyPlumbersPage />} />
            <Route path="industries/auto-locksmith" element={<AutoLocksmithPage />} />
            <Route path="industries/dentist" element={<DentistPage />} />
            <Route path="industries/house-cleaning" element={<HouseCleaningPage />} />
            <Route path="industries/electrician" element={<ElectricianPage />} />
            <Route path="industries/hvac" element={<HVACPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;

