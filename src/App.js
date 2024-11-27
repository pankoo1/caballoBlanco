import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import LoginPage from './views/LoginPage'; // Nueva página de login

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/login" element={<LoginPage />} /> {/* Ruta para iniciar sesión */}
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
    minHeight: '100vh',  // Esto asegura que el contenedor ocupe toda la altura de la ventana
  },
};

export default App;
