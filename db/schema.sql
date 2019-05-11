/* Create and use the starwars db */
DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;


/* Create a table for all your star wars characters */
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` boolean,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);