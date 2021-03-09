import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from '../entity/User';
import { validate } from 'class-validator';
import { send } from "process";

export class UserController {
    static getAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
        const users = await userRepository.find();

        if (users.length > 0) {
            res.send(users);
        } else {
            res.status(400).json({ message: 'No hay resultado' });
        }
    };

    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(User);
        try {
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        } catch (e) {
            res.status(404).json({ message: 'no hay resultados' });
        }
    }
    static newUser = async (req: Request, res: Response) => {
        const { username, password, role } = req.body;
        const user = new User();


        user.username = username;
        user.password = password;
        user.role = role;

        //validacion 
        const errors = await validate(user);

        if (errors.length > 0 ){
            return res.status(400).json(errors);
        }

        //TODO : hash

        const userReposito

    };
}