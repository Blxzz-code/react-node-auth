import { useState } from 'react';
import styles from './Login.module.css'; 

export default function Register({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !password) {
      setError('Completa todos los campos');
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Error desconocido');

      setSuccess('Usuario creado correctamente');
      onRegister(data); 

      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <svg
        className={styles.overlay}
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="100" />
        <circle cx="200" cy="200" r="60" />
        <line x1="200" y1="20" x2="200" y2="380" />
        <line x1="20" y1="200" x2="380" y2="200" />
        <line x1="60" y1="60" x2="340" y2="340" />
        <line x1="340" y1="60" x2="60" y2="340" />
      </svg>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Crear cuenta</h2>

        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className={styles.input}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Registrarse
        </button>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p style={{ color: '#8bc34a', marginTop: '10px', textAlign: 'center' }}>{success}</p>}
      </form>
    </div>
  );
}
