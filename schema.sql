-- Active: 1669072513712@@127.0.0.1@3306@mailingcult
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE, 
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) ,
    created_at DATETIME NOT NULL DEFAULT NOW()
);

DESC users;

INSERT INTO users (email, fname ) VALUES ('sqizzo@blackmail.com', 'sqizzo');

INSERT INTO users (email, fname ) VALUES ('blackdove@blackmail.com', 'bdove');

SELECT * FROM users;

