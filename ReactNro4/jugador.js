const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Jugador = sequelize.define('Jugador', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    posicion: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    equipoId: DataTypes.INTEGER,
});

module.exports = Jugador;
