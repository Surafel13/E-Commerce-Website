import express from 'express'
import cors from 'cors'
import connection from './config/db.js';

// Models
import CategoryTable from './models/catagoryTable.js';
import orderTable from './models/orderTable.js';
import userTable from './models/userTable.js';
import ProductTable from './models/productTable.js';
import AdminTable from './models/AdminTable.js';

//Routes
import catagoryRoute from './routes/catagoryRoute.js';
import orderRoute from './routes/orederRoute.js';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import AdminRouter from './routes/AdminRoute.js';




const app = express();
const PORT = 3000;
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors())


connection.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.stack);
        return;
    }
    console.log('✅ Connected to MySQL as id ' + connection.threadId);
})


try {
    await connection.execute(userTable);
    await connection.execute(ProductTable);
    await connection.execute(CategoryTable);
    await connection.execute(orderTable);
    await connection.execute(AdminTable);

    console.log("✅ Tables created or already exist");
} catch (error) {
    console.error("❌ Table creation error:", error.message)
}






app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/uploads', express.static('uploads'));
app.use('/api/catagory', catagoryRoute);
app.use('/api/order', orderRoute);
app.use('/api/product', productRoute);
app.use('/api/user', userRoute);
app.use('/api/Admin', AdminRouter);