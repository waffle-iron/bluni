/**
 * Author:  Samir
 * Created: 7-mag-2017
 */

/** Bluni **/

CREATE TABLE `unibg_users`(
`id_user` INT(10) NOT NULL AUTO_INCREMENT,
`username` VARCHAR(50) NOT NULL UNIQUE,
`password` VARCHAR(50) NOT NULL,
`email` VARCHAR(50) NOT NULL UNIQUE,
`phone_number` INT(15) NOT NULL,
`faculty` VARCHAR(50) NOT NULL,
PRIMARY KEY(`id_user`, `username`, `email`)
);

CREATE TABLE `unibg_books`(
`username` VARCHAR(50) NOT NULL,
`title` VARCHAR(50) NOT NULL,
`author` VARCHAR(50) NOT NULL,
`price` DECIMAL(4,2) NOT NULL,
`description` VARCHAR(500),
`image` BLOB,
`faculty` VARCHAR(50) NOT NULL,
`date` DATETIME NOT NULL,
PRIMARY KEY(`username`, `title`, `date`),
FOREIGN KEY (`username`) REFERENCES `unibg_users`(`username`) ON DELETE CASCADE
);
