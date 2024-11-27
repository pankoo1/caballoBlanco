import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión
    console.log(email, password);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
  loginBox: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',  // Ajusta este valor para cambiar el tamaño
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',  // Esto asegura que el input ocupe todo el espacio disponible
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box', // Asegura que el padding no aumente el tamaño del input
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default LoginPage;
