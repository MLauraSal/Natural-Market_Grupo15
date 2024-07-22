const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const syncModels = require('./models/sincModels.js');
// Importar las rutas

const usuarioRoutes = require('./routes/usuarios.routes.js');
const categoriaRoutes = require('./routes/categorias.routes.js');
const proveedorRoutes = require('./routes/proveedores.routes.js');
const productoRoutes = require('./routes/products.routes.js');

const app = express();
const port = 3000;

// Middlwares
app.use(cors());
app.use(morgan("dev"))
app.use(express.json()) // Para que el servidor comprenda datos en formato json

// Sincronizar los modelos
syncModels();




// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/productos', productoRoutes);




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
