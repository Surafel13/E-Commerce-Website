import express from 'express'

const CategoryTable = `CREATE TABLE IF NOT EXISTS Category(
    CategoryId INT AUTO_INCREMENT,
    CategoryName VARCHAR(250) not null,
    PRIMARY KEY(CategoryId)
)`;


export default CategoryTable;