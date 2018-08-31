-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `HomeDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `taskId` int(11) NOT NULL,
  `taskDesc` varchar(50) NOT NULL,
  `taskDate` date NOT NULL,
  `memberId`  int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`taskId`, `taskDesc`, `taskDate`,`memberId`) VALUES
(1212, 'clean', '2018-07-26',111),
(2323, 'shopping','2018-07-30',222),
(3434, 'cook', '2018-07-26',333),
(4545, 'bake', '2018-07-26',444);

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
`memberId` INT(11) NOT NULL,
  `memberName` VARCHAR(45) NOT NULL,
  `memberNickname` VARCHAR(45) NOT NULL,
  `memberDesc` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`memberId`, `memberName`, `memberNickname`,`memberDesc`) VALUES
(111, 'Sara', 'Sari', 'youngest daughter'),
(222, 'Yosef', 'Yossi','daddy'),
(333, 'Miriam', 'Miri','Mummy'),
(444, 'Izahk', 'Itzik','son');




-- --------------------------------------------------------

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`taskId`),
  ADD KEY `memberId` (`memberId`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`memberId`);
  --
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `memberId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `taskId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`memberId`) REFERENCES `members` (`memberId`);
COMMIT;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
