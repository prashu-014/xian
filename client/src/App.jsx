import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusinessPartner from './pages/BusinessPartner';
import BusinessPromoter from './pages/BusinessPromoter';
import DashbordData from './components/DashbordData'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<DashbordData />} />
          <Route path="businesspartner" element={<BusinessPartner />} />
          <Route path="businesspromoter" element={<BusinessPromoter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App
