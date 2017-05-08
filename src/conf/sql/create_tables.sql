/**
 * Author:  Samir
 * Created: 7-mag-2017
 */

/** Bluni **/

CREATE TABLE `unibg_users`(
`id_user` INT(10) NOT NULL AUTO_INCREMENT,
`username` VARCHAR(50) NOT NULL,
`password` VARCHAR(50) NOT NULL,
`email` VARCHAR(50) NOT NULL,
`phone_number` INT(15) NOT NULL,
`faculty` VARCHAR(50) NOT NULL,
PRIMARY KEY(`id_user`, `username`, `email`)
);

CREATE TABLE `unibg_books`(
`id_user` INT(10) NOT NULL REFERENCES `unibg_users`(`id_user`),
`title` VARCHAR(50) NOT NULL,
`isb` VARCHAR (17),
`price` DECIMAL(3,2) NOT NULL,
`description` VARCHAR(500),
`image` BLOB,
`date` DATETIME NOT NULL,
PRIMARY KEY(`id_user`)
);