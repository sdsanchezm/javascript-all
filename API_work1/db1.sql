CREATE TABLE `zoologico2`.`animal` (
  	`id` INT NOT NULL AUTO_INCREMENT,
    `animalName` VARCHAR(45) NULL,
    `animalNumber` INT NULL,
  	`animalType` INT NULL,
PRIMARY KEY (`id`));

CREATE TABLE `zoologico2`.`animalType` (
  	`id` INT NOT NULL AUTO_INCREMENT,
    `typeName` VARCHAR(45) NULL,
PRIMARY KEY (`id`))

CREATE TABLE `zoologico2`.`animalenter` (
  	`id` INT NOT NULL AUTO_INCREMENT,
    `animalid` INT NULL,
    `animalenterdate` DATE,
PRIMARY KEY (`id`))

CREATE TABLE `zoologico2`.`animalleave` (
  	`id` INT NOT NULL AUTO_INCREMENT,
    `animalid` INT NULL,
    `animalleavedate` DATE,
PRIMARY KEY (`id`))

CREATE TABLE `zoologico2`.`animalfoodtype` (
  	`id` INT NOT NULL AUTO_INCREMENT,
    `foodType` VARCHAR(45) NULL,
PRIMARY KEY (`id`))

CREATE TABLE `zoologico2`.`animalfeed` (
  	`id` INT NOT NULL AUTO_INCREMENT,
    `animalid` INT NULL,
    `animalFoodType` INT NULL,
    `animalFoodDate` DATETIME,
PRIMARY KEY (`id`))



INSERT INTO zoologico2.animal (animalname, animalnumber, animaltype)
VALUES ('Kraus', '0823', 1),
('Koninber', '2142', 2),
('Schwein', '5464', 2);

INSERT INTO zoologico2.animaltype (typeName)
VALUES ('perro'),
('tigre'),
('gato'),
('conejo'),
('pantera'),
('raton'),
('elefante');

INSERT INTO zoologico2.animalenter (animalid, animalleavedate)
VALUES (1, '2018-8-1'),
(2, '2019-2-20'),
(3, '2020-5-10');

INSERT INTO zoologico2.animalleave (animalid, animalleavedate)
VALUES (1, '2019-7-1'),
(2, '2019-9-25'),
(3, NULL);

INSERT INTO zoologico2.animalfoodtype (foodtype)
VALUES ('hamburguesa'),
('vegetales'),
('pizza'),
('insectos'),
('cerdo');

INSERT INTO zoologico2.animalfeed (animalid, animalfoodtype, animalFoodDate)
VALUES (1, 2, '2018-8-2 14:56:59'),
(1, 8, '2018-8-2 21:21:21'),
(1, 1, '2018-8-3 08:21:21'),
(1, 2, '2018-8-4 09:21:21'),
(1, 3, '2018-8-5 10:21:21'),
(1, 8, '2018-8-6 16:21:21'),
(2, 6, '2019-10-6 15:21:21'),
(2, 6, '2019-10-7 17:33:21'),
(3, 5, '2020-5-11 14:21:21'),
(3, 5, '2020-5-11 20:21:21');



- buscar como putas alterar el tipo de dato de una table
ALTER TABLE `zoologico2`.`animalfeed`
ALTER COLUMN `animalFoodDate` DATETIME;

https://www.w3schools.com/sql/sql_ref_alter_column.asp
https://stackoverflow.com/questions/626899/how-do-you-change-the-datatype-of-a-column-in-sql-server
https://www.w3schools.com/sql/sql_dates.asp

request:
Sistema de admin de zoologico
animales q hay
Tipos de animales
fecha de ingreso
fecha de desceso del animal
cuantas veces se han alimentado
que se le ha dado de comer

reporte diario y mensual no, mejor reporte parametrizable

nada visual, solo api
hacer varios endpoints



