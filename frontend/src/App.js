import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import styles from './App.module.css';

function App() {
  const [user, setUser] = useState(null);
  const [activeForm, setActiveForm] = useState('login'); // 'login' o 'register'

  const handleLogin = (data) => {
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const handleRegister = (data) => {
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  if (user) {
    return (
      <div className={styles.app}>
        <div className={styles.welcome}>
          <h2>Bienvenido, {user.name}</h2>
          <button
            className={styles.logoutButton}
            onClick={() => {
              setUser(null);
              localStorage.removeItem('token');
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <div className={styles.toggleButtons}>
        <button
          className={`${styles.toggleButton} ${
            activeForm === 'login' ? styles.activeToggle : ''
          }`}
          onClick={() => setActiveForm('login')}
          type="button"
        >
          Login
        </button>
        <button
          className={`${styles.toggleButton} ${
            activeForm === 'register' ? styles.activeToggle : ''
          }`}
          onClick={() => setActiveForm('register')}
          type="button"
        >
          Register
        </button>
      </div>

      {activeForm === 'login' ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Register onRegister={handleRegister} />
      )}
    </div>
  );
}

export default App;
