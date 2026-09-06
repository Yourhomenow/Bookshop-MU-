-- CREATE TABLE IF NOT EXISTS user_admin(
--   admin_id INT AUTO_INCREMENT,
--   admin_name VARCHAR(100) NOT NULL,
--   email VARCHAR(100) NOT NULL UNIQUE,
--   create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (admin_id)
-- )

-- CREATE TABLE IF NOT EXISTS book(
--   book_id BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
--   book_name VARCHAR(100) NOT NULL UNIQUE,
--   create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (book_id)
-- )

-- SHOW GLOBAL VARIABLES LIKE 'port';

-- INSERT INTO book (book_name)
-- VALUES ('Atomic Habit');


-- INSERT INTO book (book_name)
-- VALUES ('Stranger');



SELECT * FROM book;
