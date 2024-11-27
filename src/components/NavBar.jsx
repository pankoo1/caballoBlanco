import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
      <div className="container">
        {/* Contenedor del logo */}
        <Link to="/" style={styles.logoLink} className="navbar-brand">
          <img
            src="./images/logo.png" // Ruta al logo
            alt="Logo de MiAplicación"
            style={styles.logo}
          />
          <span style={styles.logoText}>MiAplicación</span>
        </Link>
        <div className="d-flex ms-auto"> {/* Añadido ms-auto para mover los elementos a la derecha */}
          {/* Contenedor de los enlaces con margen entre ellos */}
          <Link to="/login" style={styles.link} className="nav-link me-3"> {/* me-3 añade margen derecho */}
            <Icon icon="mdi:login" style={styles.icon} />
            Iniciar sesión
          </Link>
          <Link to="/register" style={styles.link} className="nav-link">
            <Icon icon="mdi:account-plus" style={styles.icon} />
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#121212',
    color: '#fff',
  },
  logoLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
  logo: {
    width: '70px',
    height: '70px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    color: '#61dafb',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
  },
};

export default Navbar;





