const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Acá se conecta a la base de datos
connectDB();

// Acá están las rutas
app.use('/api/equipos', require('./routes/equipos'));
app.use('/api/jugadores', require('./routes/jugadores'));
app.use('/api/partidos', require('./routes/partidos'));
app.use('/api/usuarios', require('./routes/usuarios'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
