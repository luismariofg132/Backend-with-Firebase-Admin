CREATE DATABASE tiendaJM WITH  
ENCODING = 'UTF8' 
TABLESPACE = curso_backend_1_2022;


CREATE SCHEMA adm; 

DROP TABLE IF EXISTS adm.usuarios;

CREATE TYPE enum_genero AS ENUM ('Femenino', 'Masculino');

CREATE TABLE adm.usuarios (
    id SERIAL,
    documento VARCHAR(20) NOT NULL,
    tipo_documento VARCHAR(3) NOT NULL,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    contrasena VARCHAR(80) NOT NULL,
    correo VARCHAR(100),
    telefono_celular VARCHAR(30),
    genero enum_genero NULL,
    fecha_nacimiento DATE,
    fecha_creacion TIMESTAMP DEFAULT current_timestamp,
    fecha_actualizacion TIMESTAMP,
    CONSTRAINT pk_usuarios PRIMARY KEY (id)
);


INSERT INTO adm.usuarios (documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, genero, fecha_nacimiento) VALUES 
('1152188863', 'CC', 'Oscar', 'Mesa', '34c958e8afa723e3806b37fffa2d64d2ee0ceef9', 'oscarmesa.elpoli@elpoli.edu.co', '3023458976', 'Masculino', '1999-10-09'), 
('11348473389', 'TI', 'Carlos', 'Meneses', '047cf3044503d764a4e8ccf00edb03fb67454986', 'carlosmeneses@gmail.com', '3013984758', 'Masculino', '2020-07-09'),
('11437382974', 'TI', 'Maria Victoria', 'Diaz Granados', '9039449fca7dd913d746909bafc3861e616d093c', 'victoriadiaz@gmail.com', '3093283274', 'Femenino', '1999-07-01'),
('30948394823', 'PAP', 'David', 'Cadavid', '9f6397db432e1f6c33556b029b9900158804f885', 'davidcadavid@outlook.com', '3884773732','Masculino', '2002-11-21'),
('83974732638', 'TI', 'Diana', 'Patiño', 'f3812ab06e685886f615b6a8c38533f11fc0311b', 'dianapatiño@outlook.co', '3012938475', 'Femenino', '2003-03-29'),
('45679483', 'CC', 'Juan', 'Perez', 'f08791d5049311667aaa321342da7d662a25ac29', 'juan123@gmail.com', '3012938473', 'Masculino', '1989-02-14');