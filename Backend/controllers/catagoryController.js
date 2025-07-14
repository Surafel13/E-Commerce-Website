import express from 'express'
import connection from '../config/db.js'
import CategoryTable from '../models/catagoryTable.js'
import expressAsyncHandler from 'express-async-handler'


export const createCategory = expressAsyncHandler( async(req, res) => {
    const{CategoryName} = req.body;

    let insertCatagory = `INSERT INTO Category
    (CategoryName) VALUES (?)`

    try{
        await connection.execute(insertCatagory, [CategoryName])
        res.status(200).json("Data inserted succesfully!")
    }catch{
        res.status(400).json("Data is not inserted")
    }

})

export const getCatagories = expressAsyncHandler(async(req , res) =>{
    
    let selectCatagory = `SELECT * FROM Category`


    try {
        const [result] = await connection.execute(selectCatagory)
        res.status(200).json(result)

    } catch (error) {
        console.log(error)
        res.status(500).json("Something went wrong.")
    }

})






