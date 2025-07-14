import express from 'express'
import { userSignIn, UserAuthentication, GetUser} from '../controllers/userController.js'


const userRoute = express.Router();

userRoute.post('/userSignIn', userSignIn);
userRoute.post('/GetUser', GetUser)
userRoute.post('/UserAuthentication', UserAuthentication)

export default userRoute;
