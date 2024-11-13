CREATE TABLE Equipos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    escudo VARCHAR(255)
);

CREATE TABLE Jugadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    edad INT,
    posicion VARCHAR(20),
    numero INT,
    equipoId INT,
    FOREIGN KEY (equipoId) REFERENCES Equipos(id)
);
