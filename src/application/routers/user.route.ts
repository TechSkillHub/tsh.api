import router from 'express'
import * as userController from '../controllers/user.controller'

const userRoute = router.Router();

userRoute.post('/', userController.create)

export = userRoute