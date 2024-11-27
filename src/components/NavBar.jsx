import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <h1>MiAplicación</h1>
      </div>
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}> {/* Enlace a la página de login */}
          <Icon icon="mdi:login" style={styles.icon} />
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    backgroundColor: '#121212',
    color: '#fff',
  },
  logoContainer: {
    fontSize: '24px',
  },
  linksContainer: {
    display: 'flex',
    gap: '20px',
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

