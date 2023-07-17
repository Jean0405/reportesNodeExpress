CREATE DATABASE gestor_reportes;

USE gestor_reportes;

CREATE TABLE
    tipo_incidencia (
        id_tipoIncidencia INT NOT NULL PRIMARY KEY,
        nombre_tipoIncidencia VARCHAR(25) NOT NULL
    );

CREATE TABLE
    categoria(
        id_categoria INT NOT NULL PRIMARY KEY,
        nombre_categoria VARCHAR(20) NOT NULL
    );

CREATE TABLE
    dispositivo(
        id_dispositivo INT AUTO_INCREMENT PRIMARY KEY,
        nombre_dispositivo VARCHAR(70) NOT NULL,
        descripcion_dispositivo VARCHAR(255),
        lugar_id INT
    );

CREATE TABLE
    lugar(
        id_lugar INT AUTO_INCREMENT PRIMARY KEY,
        nombre_lugar VARCHAR(30) NOT NULL,
        area_id INT
    );

CREATE TABLE
    areas(
        id_area INT AUTO_INCREMENT PRIMARY KEY,
        nombre_area VARCHAR(30) NOT NULL
    );

CREATE TABLE
    trainer(
        id_trainer INT NOT NULL PRIMARY KEY,
        nombre_trainer VARCHAR(80) NOT NULL,
        email_personal VARCHAR(80) UNIQUE,
        email_corporativo VARCHAR(80) UNIQUE NOT NULL,
        telefono_movil VARCHAR(10) UNIQUE,
        telefono_residencia VARCHAR(10) UNIQUE,
        telefono_corporativo VARCHAR(10) UNIQUE NOT NULL,
        telefono_movilEmpresarial VARCHAR(10) UNIQUE NOT NULL
    );

CREATE TABLE
    incidencia(
        id_incidencia INT AUTO_INCREMENT PRIMARY KEY,
        descripcion VARCHAR(255) NOT NULL,
        fecha_reporte DATE NOT NULL,
        categoria_id INT,
        tipoIncidencia_id INT,
        lugar_id INT,
        trainer_id INT
    );

ALTER TABLE dispositivo
ADD
    CONSTRAINT fk_lugarDispositivo FOREIGN KEY (lugar_id) REFERENCES lugar(id_lugar);

ALTER TABLE lugar
ADD
    CONSTRAINT fk_areaLugar FOREIGN KEY (area_id) REFERENCES areas(id_area);

ALTER TABLE incidencia
ADD
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES categoria(id_categoria),
ADD
    CONSTRAINT fk_tipoIncidencia FOREIGN KEY (tipoIncidencia_id) REFERENCES tipo_incidencia(id_tipoIncidencia),
ADD
    CONSTRAINT fk_lugar FOREIGN KEY (lugar_id) REFERENCES lugar(id_lugar);

ALTER TABLE incidencia
ADD
    CONSTRAINT fk_trainer FOREIGN KEY (trainer_id) REFERENCES trainer(id_trainer);

CREATE TABLE
    trainer(
        id_trainer INT NOT NULL PRIMARY KEY,
        nombre_trainer VARCHAR(80) NOT NULL,
        email_personal VARCHAR(80) UNIQUE,
        email_corporativo VARCHAR(80) UNIQUE NOT NULL,
        telefono_movil VARCHAR(10) UNIQUE,
        telefono_residencia VARCHAR(10) UNIQUE,
        telefono_corporativo VARCHAR(10) UNIQUE NOT NULL,
        telefono_movilEmpresarial VARCHAR(10) UNIQUE NOT NULL
    );

INSERT INTO
    trainer (
        id_trainer,
        nombre_trainer,
        email_personal,
        email_corporativo,
        telefono_movil,
        telefono_residencia,
        telefono_corporativo,
        telefono_movilEmpresarial
    )
VALUES (
        1005184201,
        "Jeanpierre Angarita",
        "jean0405@gmail.com",
        "jean04@campus.co",
        "3224097916",
        "",
        "336611",
        "3324097917"
    );

/*iNSERTA DATOS A LA TABLA AREA*/

INSERT INTO areas(nombre_area) VALUES ("Review 2");

/*iNSERTA DATOS A LA TABLA LUGAR*/

INSERT INTO
    lugar(nombre_lugar, area_id)
VALUES ("Sputnik", 1), ("Apolo", 1), ("Artemis", 1);

INSERT INTO
    lugar(nombre_lugar, area_id)
VALUES ("Corvus", 2), ("Endor", 3);

/*iNSERTA DATOS A LA TABLA DISPOSITIVO*/

INSERT INTO
    dispositivo(
        nombre_dispositivo,
        descripcion_dispositivo,
        lugar_id
    )
VALUES (
        "Teclado",
        "Teclado de la marca Redragon del modelo Kumara",
        1
    ), (
        "Mouse",
        "Mouse de marca Logitech G203",
        2
    ), (
        "Diadema",
        "Diadema de la marca Logitech G Series G435 negro y amarillo fluorescente",
        3
    ), (
        "Diadema",
        "Diadema de la marca Logitech G Series G435 negro y amarillo fluorescente",
        4
    ), (
        "Diadema",
        "Diadema de la marca Logitech G Series G435 negro y amarillo fluorescente",
        5
    ), (
        "Diadema",
        "Diadema de la marca Logitech G Series G435 negro y amarillo fluorescente",
        1
    );

INSERT INTO
    categoria (
        id_categoria,
        nombre_categoria
    )
VALUES (1, 'LEVE'), (2, 'MODERADA'), (3, 'GRAVE');

INSERT INTO
    tipo_incidencia (
        id_tipoIncidencia,
        nombre_tipoIncidencia
    )
VALUES (1, 'HARDWARE'), (2, 'SOFTWARE');

SELECT * FROM incidencia;

SELECT
    incidencia.descripcion,
    incidencia.fecha_reporte,
    categoria.nombre_categoria AS categoria,
    tipo_incidencia.nombre_tipoIncidencia AS tipo_incidencia,
    lugar.nombre_lugar AS lugar,
    areas.nombre_area AS area,
    trainer.nombre_trainer AS trainer,
    trainer.id_trainer
FROM incidencia
    INNER JOIN categoria ON incidencia.categoria_id = categoria.id_categoria
    INNER JOIN tipo_incidencia ON incidencia.tipoIncidencia_id = tipo_incidencia.id_tipoIncidencia
    INNER JOIN lugar ON incidencia.lugar_id = lugar.id_lugar
    INNER JOIN areas ON lugar.area_id = areas.id_area
    INNER JOIN trainer ON incidencia.trainer_id = trainer.id_trainer;

ALTER TABLE area RENAME TO areas;

SELECT * FROM area;