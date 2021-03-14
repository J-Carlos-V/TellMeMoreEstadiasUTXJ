import { getRepository } from 'typeorm';
import { Request, response, Response } from 'express';
import { tb_usuarios } from '../entity/tb_usuarios';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import { validate } from 'class-validator';

class AuthController{
    static login = async (req: Request, res: Response)=>{
        const {Email, Contrasena} = req.body;

        if (!(Email && Contrasena)) {
            res.status(400).json({message: 'Username & Pasword are required'});
        }
        const userRepository = getRepository(tb_usuarios);
        let usuario : tb_usuarios;


        try {

            usuario = await userRepository.findOneOrFail({where:{Email}})
        } catch (e) {
            return res.status(400).json({message: 'Usuario o contraseña incorrecta'});
        }

        //Check Contraseña
        if (!usuario.checkPassword(Contrasena)) {
            return res.status(400).json({message: 'Usuario o Contraseña es Incorrecto'})
        }
        
        const token =  jwt.sign({userId: usuario.id, email: usuario.Email}, config.jwtSecret, {expiresIn: '1h'});
        
        res.json({message: 'Ok', token});
    };

    
    static cambiarContra = async (req: Request, res: Response)=>{
        const {userId} = res.locals.jwtPayload;
        const {oldPassword, newPassword} = req.body;

        if (!(oldPassword && newPassword)) {
            res.status(400).json({ message: 'Se necesitan la contraseña anterior y la nueva contraseña'});
        }

        const userRepository = getRepository(tb_usuarios);
        let usuario : tb_usuarios;

        try {
            usuario = await userRepository.findOneOrFail(userId);
        } catch (e) {
            res.status(400).json({ message: 'Error'});
        }

        if (!usuario.checkPassword(oldPassword)){
            return res.status(401).json({ message: 'Revisa tu Contraseña Pasada'});
        }

        usuario.Contrasena = newPassword;
        const validationOps = {validationError: {target: false, value: false}};
        const errors = await validate(usuario, validationOps);

        if (errors.length > 0) {
            return  res.status(400).json(errors);
        }

        //hash password
        usuario.hashPassword();
        userRepository.save(usuario);

        res.json({message: 'La Contraseña se ha cambiado correctamente'})
    }
    

}
export default AuthController