-- CREATE TABLE `ADMIN` (
--   `AdminID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `Username` varchar(100) NOT NULL,
--   `Password` varchar(255) NOT NULL
-- );

-- CREATE TABLE `LOGINLOG` (
--   `LoginLogID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `Timestamp` datetime NOT NULL,
--   `Status` varchar(20) NOT NULL COMMENT 'SUCCESS or FAILED',
--   `AdminID` int NOT NULL
-- );

-- CREATE TABLE `USERTRANSACTION` (
--   `UserTransactionID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `Timestamp` datetime NOT NULL,
--   `TargetField` varchar(100) NOT NULL,
--   `Operation` varchar(20) NOT NULL COMMENT 'INSERT, UPDATE, or DELETE',
--   `OldValue` text,
--   `NewValue` text,
--   `MakeAdminID` int NOT NULL,
--   `AffectAdminID` int
-- );

-- CREATE TABLE `BOOK` (
--   `BookID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `BookName` varchar(255) NOT NULL,
--   `QuantityInStock` int NOT NULL COMMENT '0 or greater',
--   `Barcode` varchar(50) UNIQUE,
--   `Price` decimal(10,2) NOT NULL COMMENT '0 or greater',
--   `Description` text,
--   `PublishDate` date,
--   `Size` varchar(50) NOT NULL,
--   `PublisherID` int
-- );

-- CREATE TABLE `PUBLISHER` (
--   `PublisherID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `PublisherName` varchar(150) UNIQUE NOT NULL
-- );

-- CREATE TABLE `CATEGORY` (
--   `CategoryID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `CategoryName` varchar(100) NOT NULL
-- );

-- CREATE TABLE `AUTHOR` (
--   `AuthorID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `AuthorName` varchar(150) NOT NULL
-- );

-- CREATE TABLE `PICTURE` (
--   `PicID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `Name` varchar(255) NOT NULL,
--   `URL` varchar(500) NOT NULL,
--   `FileSize` int COMMENT '0 or greater',
--   `BookID` int NOT NULL
-- );

-- CREATE TABLE `BOOKTRANSACTION` (
--   `BookTransactionID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `OldValue` text,
--   `NewValue` text,
--   `TargetField` varchar(100) NOT NULL,
--   `Timestamp` datetime NOT NULL,
--   `Operation` varchar(20) NOT NULL COMMENT 'INSERT, UPDATE, or DELETE',
--   `AdminID` int NOT NULL,
--   `BookID` int NOT NULL
-- );

-- CREATE TABLE `IN` (
--   `BookID` int NOT NULL ,
--   `CategoryID` int NOT NULL,
--   PRIMARY KEY (`BookID`, `CategoryID`)
-- );

-- CREATE TABLE `WRITE` (
--   `BookID` int NOT NULL,
--   `AuthorID` int NOT NULL,
--   PRIMARY KEY (`BookID`, `AuthorID`)
-- );

-- ALTER TABLE `LOGINLOG` ADD FOREIGN KEY (`AdminID`) REFERENCES `ADMIN` (`AdminID`);

-- ALTER TABLE `USERTRANSACTION` ADD FOREIGN KEY (`MakeAdminID`) REFERENCES `ADMIN` (`AdminID`);

-- ALTER TABLE `USERTRANSACTION` ADD FOREIGN KEY (`AffectAdminID`) REFERENCES `ADMIN` (`AdminID`);

-- ALTER TABLE `BOOK` ADD FOREIGN KEY (`PublisherID`) REFERENCES `PUBLISHER` (`PublisherID`);

-- ALTER TABLE `PICTURE` ADD FOREIGN KEY (`BookID`) REFERENCES `BOOK` (`BookID`);

-- ALTER TABLE `BOOKTRANSACTION` ADD FOREIGN KEY (`AdminID`) REFERENCES `ADMIN` (`AdminID`);

-- ALTER TABLE `BOOKTRANSACTION` ADD FOREIGN KEY (`BookID`) REFERENCES `BOOK` (`BookID`);

-- ALTER TABLE `IN` ADD FOREIGN KEY (`BookID`) REFERENCES `BOOK` (`BookID`);

-- ALTER TABLE `IN` ADD FOREIGN KEY (`CategoryID`) REFERENCES `CATEGORY` (`CategoryID`);

-- ALTER TABLE `WRITE` ADD FOREIGN KEY (`BookID`) REFERENCES `BOOK` (`BookID`);

-- ALTER TABLE `WRITE` ADD FOREIGN KEY (`AuthorID`) REFERENCES `AUTHOR` (`AuthorID`);



-- ------------------------------------






-- CREATE TABLE `BOOK` (
--   `BookID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `BookName` varchar(255) NOT NULL,
--   `QuantityInStock` int NOT NULL COMMENT '0 or greater',
--   `Barcode` varchar(50) UNIQUE,
--   `Price` decimal(10,2) NOT NULL COMMENT '0 or greater',
--   `Description` text,
--   `PublishDate` date,
--   `Size` varchar(50) NOT NULL,
--   `PublisherID` int
-- );

-- INSERT INTO BOOK (BookName, QuantityInStock, Price, Size)
-- VALUES ("The Stranger", 10, 30.99 , 999)

SELECT * FROM BOOK;