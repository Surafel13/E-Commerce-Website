import connection from "../config/db.js";
import userTable from "../models/userTable.js";
import expasyncHandler from "express-async-handler"

export const userSignIn = expasyncHandler(async (req, res) => {
    const { fname, lname, email, password, address, phoneNumber, country, city } = req.body;


    let insertUserInfo = `INSERT INTO User
    (name, email, password, phoneNumber, address) VALUES 
    (?,?,?,?,?)`

    let selctUserId = `SELECT userId FROM User where name = (?)`


    try {
        await connection.execute(insertUserInfo, [fname + " " + lname, email, password, phoneNumber, country + " /" + city + " /" + address])
        const [result] = await connection.execute(selctUserId, [fname + " " + lname])
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: "Invalid credentials" })
    }
})




export const GetUser = expasyncHandler(async (req, res) => {
    const { userId } = req.body;

    let user = `SELECT name FROM User WHERE userId = ? `;

    try {
        const [result] = await connection.execute(user, [userId]);

        if (result.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json("Unable to fetch users data");
    }
});

export const UserAuthentication = expasyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let query = `SELECT userId FROM User WHERE email = ? AND password = ?`;

    try {
        const [result] = await connection.execute(query, [email, password]);

        if (result.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(result[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to fetch user data" });
    }
});

