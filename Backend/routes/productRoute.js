import express from 'express'
import { createProduct , getProduct , getMultipleElements, deleteProduct} from '../controllers/productController.js';
import upload from '../config/multerConfig.js';

const productRoute = express.Router();

productRoute.post('/getProduct', getProduct)
productRoute.get('/getMultipleElements', getMultipleElements)
productRoute.post('/deleteProduct', deleteProduct)
productRoute.post('/createProduct', upload.single('ImgPath'), createProduct)

export default productRoute;
