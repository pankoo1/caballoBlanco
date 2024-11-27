import React from 'react';

const MainSection = () => {
  return (
    <section style={styles.container}>
      {/* Texto en el lado izquierdo */}
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Straight to the Point Restaurant Booking System</h1>
        <div style={styles.buttonContainer}>
          <button style={styles.buttonPrimary}>New Reservation</button>
          <button style={styles.buttonPrimary}>Search</button>
        </div>
      </div>

      {/* Imagen en el lado derecho */}
      <div style={styles.imageContainer}>
        <img
          src="./images/Section.png" // Usa la ruta correcta para tu imagen
          alt="Cheese board"
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    gap: '20px',
    height: '80vh', // Ocupa toda la pantalla
    boxSizing: 'border-box', // Incluye padding en el cálculo del tamaño
  },
  textContainer: {
    flex: 1,
    maxWidth: '50%',
    textAlign: 'left',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#000', // Texto negro
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  buttonPrimary: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  inputSearch: {
    padding: '10px 20px',
    border: '1px solid #000',
    borderRadius: '5px',
    fontSize: '16px',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    textAlign: 'right',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '10px',
  },
};

export default MainSection;

