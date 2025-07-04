const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./config/db');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz para testear conexión con la DB
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    res.json({ status: 'OK', db_test: rows[0].result });
  } catch (error) {
    console.error('DB Query Error:', error);
    res.status(500).json({ error: 'DB connection failed', details: error.message });
  }
});

// Montar rutas de autenticación
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
