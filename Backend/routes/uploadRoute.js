import { uploadController, getImage } from "../controllers/UploadController.js";
import express from 'express'
import upload from "../config/multerConfig.js";

const uploadRoute = express.Router();

uploadRoute.post("/uplaodImages", upload.single('image'),uploadController);
uploadRoute.get("/getImage", getImage);


export default uploadRoute