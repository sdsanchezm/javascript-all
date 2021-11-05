-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2021 at 11:58 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zoologico2`
--

-- --------------------------------------------------------

--
-- Table structure for table `animal`
--

CREATE TABLE `animal` (
  `id` int(11) NOT NULL,
  `animalName` varchar(45) DEFAULT NULL,
  `animalNumber` int(11) DEFAULT NULL,
  `animalType` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `animal`
--

INSERT INTO `animal` (`id`, `animalName`, `animalNumber`, `animalType`) VALUES
(1, 'Kraus', 823, 1),
(2, 'Koninber', 2142, 2),
(3, 'Schwein', 5464, 2);

-- --------------------------------------------------------

--
-- Table structure for table `animalenter`
--

CREATE TABLE `animalenter` (
  `id` int(11) NOT NULL,
  `animalid` int(11) DEFAULT NULL,
  `animalenterdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `animalenter`
--

INSERT INTO `animalenter` (`id`, `animalid`, `animalenterdate`) VALUES
(1, 1, '2018-08-01'),
(2, 2, '2019-02-20'),
(3, 3, '2020-05-10');

-- --------------------------------------------------------

--
-- Table structure for table `animalfeed`
--

CREATE TABLE `animalfeed` (
  `id` int(11) NOT NULL,
  `animalid` int(11) DEFAULT NULL,
  `animalFoodType` int(11) DEFAULT NULL,
  `animalFoodDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `animalfeed`
--

INSERT INTO `animalfeed` (`id`, `animalid`, `animalFoodType`, `animalFoodDate`) VALUES
(1, 1, 2, '2018-08-02 14:56:59'),
(2, 1, 8, '2018-08-02 21:21:21'),
(3, 1, 1, '2018-08-03 08:21:21'),
(4, 1, 2, '2018-08-04 09:21:21'),
(5, 1, 3, '2018-08-05 10:21:21'),
(6, 1, 8, '2018-08-06 16:21:21'),
(7, 2, 6, '2019-10-06 15:21:21'),
(8, 2, 6, '2019-10-07 17:33:21'),
(9, 3, 5, '2020-05-11 14:21:21'),
(10, 3, 5, '2020-05-11 20:21:21');

-- --------------------------------------------------------

--
-- Table structure for table `animalfoodtype`
--

CREATE TABLE `animalfoodtype` (
  `id` int(11) NOT NULL,
  `foodType` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `animalfoodtype`
--

INSERT INTO `animalfoodtype` (`id`, `foodType`) VALUES
(1, 'carne'),
(2, 'pollo'),
(3, 'arroz'),
(4, 'hamburguesa'),
(5, 'vegetales'),
(6, 'pizza'),
(7, 'insectos'),
(8, 'cerdo');

-- --------------------------------------------------------

--
-- Table structure for table `animalleave`
--

CREATE TABLE `animalleave` (
  `id` int(11) NOT NULL,
  `animalid` int(11) DEFAULT NULL,
  `animalleavedate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `animalleave`
--

INSERT INTO `animalleave` (`id`, `animalid`, `animalleavedate`) VALUES
(1, 1, '2019-07-01'),
(2, 2, '2019-09-25'),
(3, 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `animaltype`
--

CREATE TABLE `animaltype` (
  `id` int(11) NOT NULL,
  `typeName` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `animaltype`
--

INSERT INTO `animaltype` (`id`, `typeName`) VALUES
(1, 'perro'),
(2, 'tigre'),
(3, 'gato'),
(4, 'conejo'),
(5, 'pantera'),
(6, 'raton'),
(7, 'elefante');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `animalenter`
--
ALTER TABLE `animalenter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `animalfeed`
--
ALTER TABLE `animalfeed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `animalfoodtype`
--
ALTER TABLE `animalfoodtype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `animalleave`
--
ALTER TABLE `animalleave`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `animaltype`
--
ALTER TABLE `animaltype`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `animal`
--
ALTER TABLE `animal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `animalenter`
--
ALTER TABLE `animalenter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `animalfeed`
--
ALTER TABLE `animalfeed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `animalfoodtype`
--
ALTER TABLE `animalfoodtype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `animalleave`
--
ALTER TABLE `animalleave`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `animaltype`
--
ALTER TABLE `animaltype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
