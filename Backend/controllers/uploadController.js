import uploaTable from "../models/uploadTable.js";
import expressAsyncHandler from "express-async-handler";
import connection from "../config/db.js";


export const uploadController = expressAsyncHandler(async (req, res) => {

    const { path, filename } = req.file;

    connection.query(uploaTable, (err, result) => {
        if (err) console.log(err);
        else console.log("Upload table created succesffully!!!");

    })

    const insertImg = `INSERT INTO Images (path, filename) VALUES (?, ?)`;

    connection.query(insertImg, [path, filename], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json("Unable to upload image");
      } else {
        res.status(200).json("Image uploaded successfully");
      }

})

})


export const getImage = expressAsyncHandler(async (req, res) =>{

    let selectElement = `SELECT * FROM Images`

    connection.query(selectElement, (err, result)=>{
        if(err) {
            console.log(err);
            res.status(404).json("Image is not found!");
        }
        else res.status(200).json(result);
    })


})