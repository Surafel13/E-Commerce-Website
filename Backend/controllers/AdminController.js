import express from 'express'
import connection from '../config/db.js'
import expressAsyncHandler from 'express-async-handler'


export const AddAdmin = expressAsyncHandler( async(req, res) => {
    const{FullName, Email, Password, Phone} = req.body;

    let NewAdmin = `INSERT INTO Admin
    (FullName, Email, Password, Phone) VALUES (?, ?, ?, ?)`

    try{
        await connection.execute(NewAdmin, [FullName, Email, Password, Phone])
        res.status(200).json("Data inserted succesfully!")
    }catch{
        res.status(400).json("Data is not inserted")
    }

})


export const loginAdmin = expressAsyncHandler(async (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({ error: "Email and Password are required." });
    }

    const query = `SELECT * FROM Admin WHERE Email = ?`;

    try {
        const [rows] = await connection.execute(query, [Email]);

        if (rows.length === 0) {
            return res.status(404).json({ error: "Admin not found." });
        }

        const admin = rows[0];

        if (admin.Password !== Password) {
            return res.status(401).json({ error: "Incorrect password." });
        }

        res.status(200).json({ message: "Login successful!", admin });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

