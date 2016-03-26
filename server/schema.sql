CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /*The first table is for the 'Users' - will keep track of 'user-id' and 'Username.'*/
  userid int PRIMARY KEY,
  username varchar(25) NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  /*The second table is for 'Messages' - will store 'message-id', 'message', and 'user-id_Users' which is a foreign key.*/

  messageid int PRIMARY KEY,
  message varchar(100) NOT NULL,
  userref int NOT NULL,
  FOREIGN KEY (userref) REFERENCES users(userid)

);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

