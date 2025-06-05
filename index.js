const express = require('express');
const datos = require('./datos.json'); 
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API CI/CD funcionando correctamente');
});


app.get('/estudiantes', (req, res) => {
  res.json(datos);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
