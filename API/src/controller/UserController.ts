import { getRepository, TransactionRepository } from "typeorm";
import { NextFunction, Request, Response, response } from 'express';
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


        //validacion 
        const errors = await validate(user);

        if (errors.length > 0 ){
            return res.status(400).json(errors);
        }

        //TODO : hash pssword

        const userRepository = getRepository(User)
        try {
            await userRepository.save(user);
        } catch (e) {
            return res.status(400).json({ massage: 'Usuario no encontrado'})
        }

        res.send('Usuario Creado');

    };

    static editUser = async (req: Request, res: Response)=>{
        let user;
        const {id} = req.params;
        const {username, role} = req.body;

        const userRepository = getRepository(User)

        try {
            user = await userRepository.findOneOrFail(id);
            user.username = username;
            user.role = role;
        } catch (e) {

            return res.status(404).json({message: 'Usuario no encontrado'});
            
        }




        const errors = await validate(User);
        if (errors.length > 0) {
            return res.status(400).json(errors); 
        }

        //try to save user

        try {
            await userRepository.save(user);
        } catch (e) {
            return res.status(409).json({message: 'El usuario ya Existe'});
            
        }
        res.status(201).json({massage: "Usuario Actualizado"})
    };

    static deleteUser = async (req:Request, res: Response) => {
        const {id}= req.params;
        const userRepository = getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail(id);
        } catch (e) {
            return res.status(404).json({message: 'Usuario no encontrado'})
        }
        //remover usuarios
        userRepository.delete(id);
        res.status(201).json({message: 'Usuario Eliminado'});
    }

}

export default UserController;