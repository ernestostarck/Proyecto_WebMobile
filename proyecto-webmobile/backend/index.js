// Importar dependencias
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env
const express = require('express'); // Framework para el servidor
const mysql = require('mysql2'); // Cliente para la conexión a MySQL
const cors = require('cors'); // Para permitir solicitudes desde el frontend
const bodyParser = require('body-parser'); // Para parsear los datos del cuerpo de la solicitud

// Crear una instancia de Express
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Habilitar CORS para permitir solicitudes desde el frontend
app.use(bodyParser.json()); // Parsear el cuerpo de las solicitudes JSON

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta de prueba para verificar la conexión a la base de datos
app.get('/api/test', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
      return;
    }
    res.json({ message: 'Conexión exitosa', result: results[0].result });
  });
});

// Endpoint para obtener datos de una tabla (por ejemplo, 'usuarios')
app.get('/api/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
      return;
    }
    res.json(results);
  });
});

// Endpoint para crear un nuevo usuario (ejemplo)
app.post('/api/usuarios', (req, res) => {
  const { nombre, correo, telefono } = req.body;
  if (!nombre || !correo || !telefono) {
    res.status(400).json({ error: 'Faltan datos para crear el usuario' });
    return;
  }

  // Inserción de un nuevo usuario en la base de datos
  const query = 'INSERT INTO usuarios (nombre, correo, telefono) VALUES (?, ?, ?)';
  db.query(query, [nombre, correo, telefono], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al insertar el usuario' });
      return;
    }
    res.status(201).json({ message: 'Usuario creado exitosamente', userId: results.insertId });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
