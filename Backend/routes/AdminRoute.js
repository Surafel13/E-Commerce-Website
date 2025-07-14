import express from 'express'
import { AddAdmin, loginAdmin } from '../controllers/AdminController.js'

const AdminRouter = express.Router();
AdminRouter.post('/AddAdmin', AddAdmin)
AdminRouter.post('/loginAdmin', loginAdmin)

export default AdminRouter;
