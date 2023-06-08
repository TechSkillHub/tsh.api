import * as userService from '../../domain/user/service/user.service'
import { CreateUserDto } from '../../domain/user/dto/create.user.dto'

export async function create(req: any, res: any) {
    let userDto: CreateUserDto = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    let testeReturn = await userService.create(userDto);
    return res.json(testeReturn)
}