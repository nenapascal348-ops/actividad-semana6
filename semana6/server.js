const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/registro', (req, res) => {
  const { nombre, mensaje } = req.body;

  res.json({
    estado: 'Datos recibidos',
    nombre,
    mensaje,
  });
});

app.post('/incidencia', (req, res) => {
  const { tipo, descripcion } = req.body;

  res.json({
    estado: 'Incidencia recibida',
    tipo,
    descripcion,
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


