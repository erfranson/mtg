### Schema
CREATE DATABASE cardinfo_db;
USE cardinfo_db;

CREATE TABLE rare_table
(
	id int NOT NULL AUTO_INCREMENT,
	rarity varchar(255),
	set_name varchar (255),
	type varchar (255),
	name varchar (255),
	price DECIMAL(4,2),
	PRIMARY KEY (id)
);


CREATE TABLE mythic_table
(
	id int NOT NULL AUTO_INCREMENT,
	rarity varchar(255),
	set_name varchar (255),
	type varchar (255),
	name varchar (255),
	price DECIMAL(4,2),
	PRIMARY KEY (id)
);



CREATE TABLE search_history
(
	id int NOT NULL AUTO_INCREMENT,
	set_name varchar (255),
	quantity varchar (255),
	request_date TIMESTAMP,
	PRIMARY KEY (id)
);