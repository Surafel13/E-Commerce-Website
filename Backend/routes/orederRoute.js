import express from 'express'
import {orderController, updateStatus,SelectOrders} from '../controllers/orderController.js'

const orderRoute = express.Router();
orderRoute.post('/CreateOrder', orderController)
orderRoute.post('/updateOrderStatus', updateStatus)
orderRoute.get('/SelectOrders', SelectOrders)

export default orderRoute;