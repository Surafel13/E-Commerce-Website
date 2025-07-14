import connection from "../config/db.js";
import expressAsyncHandler from "express-async-handler";

export const orderController = expressAsyncHandler(async (req, res) => {

    const { userId, Product, status } = req.body;

    const insertOrder = `INSERT INTO Orders (ProductId, userId, quantity, status) VALUES (?,?,?,?)`

    try {

        for (const [ProductId, quantity] of Object.entries(Product)) {
            await connection.execute(insertOrder, [ProductId, userId, quantity, status])
        }
        res.status(200).json("Order Inserted Succesfully.")


    } catch {
        res.json("Order Insertion Failed.")
    }

})


export const SelectOrders = expressAsyncHandler(async (req, res) => {

    const SelectOrder = `SELECT * FROM Orders `

    try {
        const [result] = await connection.execute(SelectOrder)
        res.status(200).json(result)

    } catch {
        res.json("Order Insertion Failed.")
    }

})

export const updateStatus = expressAsyncHandler(async (req, res) => {
    const { orderId, newStatus } = req.body;

    if (!orderId || !newStatus) {
        return res.status(400).json({ error: "Missing orderId or newStatus in request body." });
    }

    const orderIds = Array.isArray(orderId) ? orderId : [orderId];

    const updateQuery = `UPDATE Orders SET status = ? WHERE orderId = ?`;

    try {
        await Promise.all(
            orderIds.map(id => {
                if (!id) throw new Error("Invalid order ID");
                return connection.execute(updateQuery, [newStatus, id]);
            })
        );

        res.status(200).json({message : "Order status updated."});
    } catch (error) {
        console.error("Update failed:", error);
        res.status(500).json({error : "Unable to update order status."});
    }
});
