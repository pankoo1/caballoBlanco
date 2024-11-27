import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignPage';
import NewReservation from './views/NuevaReserva'; // Nueva vista
import SelectTablePage from './views/SelectTable'; // Página de selección de mesa
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/new-reservation" element={<NewReservation />} />
          <Route path="/select-table" element={<SelectTablePage />} /> {/* Nueva ruta */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

export default App;


