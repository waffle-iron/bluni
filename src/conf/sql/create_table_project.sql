/**
 * Author:  Samir
 * Created: 7-mag-2017
 */

/** Bluni **/

CREATE TABLE `credenziali`(
`username` VARCHAR(50) NOT NULL,
`password` VARCHAR(50) NOT NULL,
PRIMARY KEY(`username`)
);

CREATE TABLE `dipartimento`(
`nome` VARCHAR(50) NOT NULL,
`sede` VARCHAR(50) NOT NULL,
PRIMARY KEY(`nome`)
);

CREATE TABLE `corso`(
`nome_corso` VARCHAR(50) NOT NULL,
`tipo` VARCHAR(50) NOT NULL,
`dipartimento` VARCHAR(50) NOT NULL,
PRIMARY KEY(`nome_corso`),
FOREIGN KEY (`dipartimento`) REFERENCES `dipartimento`(`nome`) ON DELETE CASCADE
);

CREATE TABLE `materia`(
`id_materia` VARCHAR(50) NOT NULL,
`nome` VARCHAR(50) NOT NULL,
PRIMARY KEY(`id_materia`)
);

CREATE TABLE `corso_materia`(
`corso` VARCHAR(50) NOT NULL,
`materia` VARCHAR(50) NOT NULL,
PRIMARY KEY(`corso`, `materia`),
FOREIGN KEY (`corso`) REFERENCES `corso`(`nome_corso`) ON DELETE CASCADE,
FOREIGN KEY (`materia`) REFERENCES `materia`(`id_materia`) ON DELETE CASCADE
);

CREATE TABLE `utenti`(
`id_user` INT(10) NOT NULL AUTO_INCREMENT, 
`username` VARCHAR(50) NOT NULL,
`email` VARCHAR(50) NOT NULL,
`telefono` INT(15) NOT NULL,
`corso` VARCHAR(50) NOT NULL,
PRIMARY KEY(`id_user`),
FOREIGN KEY (`username`) REFERENCES `credenziali`(`username`) ON DELETE CASCADE,
FOREIGN KEY (`corso`) REFERENCES `corso`(`nome_corso`) ON DELETE CASCADE
);

CREATE TABLE `annuncio`(
`id` INT(10) NOT NULL AUTO_INCREMENT, 
`username` VARCHAR(50) NOT NULL,
`titolo` VARCHAR(50) NOT NULL,
`autore` VARCHAR(50) NOT NULL,
`prezzo` DECIMAL(4,2) NOT NULL,
`descrizione` VARCHAR(500),
`materia` VARCHAR(50) NOT NULL,
`dipartimento` VARCHAR(50) NOT NULL,
`data_pub` DATETIME NOT NULL,
`data_vendita` DATETIME,
`data_scadenza` DATETIME NOT NULL,
PRIMARY KEY(`id`),
FOREIGN KEY (`username`) REFERENCES `credenziali`(`username`) ON DELETE CASCADE,
FOREIGN KEY (`materia`) REFERENCES `materia`(`id_materia`) ON DELETE CASCADE,
FOREIGN KEY (`dipartimento`) REFERENCES `dipartimento`(`nome`) ON DELETE CASCADE
);

