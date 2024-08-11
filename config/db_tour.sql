-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Aug 11, 2024 at 06:21 PM
-- Server version: 10.11.6-MariaDB-1:10.11.6+maria~ubu2204
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_tour`
--

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `license_id` varchar(100) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `pic_payment_path` text DEFAULT NULL,
  `update_date` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `pic_path` text DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `update_date` datetime(6) DEFAULT NULL,
  `package_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `uid` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `conf_email` text DEFAULT NULL,
  `update_date` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `package_tour`
--

CREATE TABLE `package_tour` (
  `package_id` int(11) NOT NULL,
  `package_name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `max_amount` int(4) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `price_person` decimal(7,2) DEFAULT NULL,
  `discount` int(3) DEFAULT NULL,
  `start_date` datetime(6) DEFAULT NULL,
  `end_date` datetime(6) DEFAULT NULL,
  `update_date` datetime(6) DEFAULT NULL,
  `license_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `booking_id` varchar(30) NOT NULL,
  `amount` int(3) DEFAULT NULL,
  `price_person` decimal(7,2) DEFAULT NULL,
  `discount` int(3) DEFAULT NULL,
  `check_in_date` datetime(6) DEFAULT NULL,
  `check_out_date` datetime(6) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `pic_receipt_path` text DEFAULT NULL,
  `since_date` datetime(6) DEFAULT NULL,
  `update_date` datetime(6) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `package_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`license_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `package_id` (`package_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `package_tour`
--
ALTER TABLE `package_tour`
  ADD PRIMARY KEY (`package_id`),
  ADD KEY `license_id` (`license_id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `uid` (`uid`),
  ADD KEY `package_id` (`package_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `package_tour`
--
ALTER TABLE `package_tour`
  MODIFY `package_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `gallery_ibfk_1` FOREIGN KEY (`package_id`) REFERENCES `package_tour` (`package_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `package_tour`
--
ALTER TABLE `package_tour`
  ADD CONSTRAINT `package_tour_ibfk_1` FOREIGN KEY (`license_id`) REFERENCES `agent` (`license_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `member` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`package_id`) REFERENCES `package_tour` (`package_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
