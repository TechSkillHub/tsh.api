import User from '../entity/user.entity';
import { prismaClient } from '../../../infra/database'
import { CreateUserDto } from '../dto/create.user.dto';
import moment from 'moment';
import { json } from 'express';

export async function create(userDto: CreateUserDto): Promise<any> {
    const userCreate = await prismaClient.user.create({
        data: {
            name: userDto.name,
            email: userDto.email,
            password: userDto.password,
            added: moment().format(),
            updated: moment().format(),
            excluded: moment().format()
        },
    })

    return {
        data: userCreate,
        sucess: true
    };
}