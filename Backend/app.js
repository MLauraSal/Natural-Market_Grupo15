const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const productsRoutes = require('./routes/products.routes.js');


const app = express();
const port = 3000;

// Middlwares
app.use(cors());
app.use(morgan("dev"))
app.use(express.json()) // Para que el servidor comprenda datos en formato json




// Importar las rutas

app.use('/api/products', productsRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
