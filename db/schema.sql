-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;
-- CREATE DATABASE
CREATE DATABASE ecommerce_db;
USE ecommerce_db;
CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL (10, 0) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT NOT NULL,
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category(id)
);
CREATE TABLE tag (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    tag_name VARCHAR(30) NOT NULL
);
CREATE TABLE producttag (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_id INT NOT NULL,
    tag_id INT NOT NULL,
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product(id),
    CONSTRAINT fk_tag FOREIGN KEY (tag_id) REFERENCES tag(id)
);