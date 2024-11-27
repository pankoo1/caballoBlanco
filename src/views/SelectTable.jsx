import React from 'react';

const SelectTablePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seleccionar Mesa</h1>
      <p style={styles.description}>Aquí podrás seleccionar una mesa disponible para tu reserva.</p>
      {/* Aquí agregarás el mapa de las mesas más tarde */}
      <div style={styles.tableContainer}>
        <p style={styles.tableText}>Mesas disponibles: (en espera de implementación)</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '60px auto',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  description: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '30px',
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    border: '1px dashed #ccc',
    marginBottom: '30px',
  },
  tableText: {
    color: '#666',
    fontSize: '18px',
  },
};

export default SelectTablePage;
