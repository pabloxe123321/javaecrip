const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

app.use(express.static(__dirname)); // Sirve los archivos estáticos desde la carpeta actual

app.listen(port, () => {
  console.log(`Servidor Express en http://localhost:${port}`);
});
