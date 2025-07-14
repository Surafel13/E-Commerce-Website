import express from 'express'
import {createCategory, getCatagories} from '../controllers/catagoryController.js'

const catagoryRoute = express.Router();
catagoryRoute.post('/createCategory', createCategory)
catagoryRoute.get('/getCatagories', getCatagories)

export default catagoryRoute;