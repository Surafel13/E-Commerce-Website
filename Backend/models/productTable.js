import express from 'express'

const ProductTable = `CREATE TABLE IF NOT EXISTS Product(
    ProductId INT AUTO_INCREMENT,
    ProductName VARCHAR(250),
    Price INT,
    Description VARCHAR(600),
    ImgPath VARCHAR(500),
    CategoryId INT,
    PRIMARY KEY(ProductId),
    FOREIGN KEY (CategoryId) REFERENCES Category(CategoryId)
)`;

export default ProductTable;