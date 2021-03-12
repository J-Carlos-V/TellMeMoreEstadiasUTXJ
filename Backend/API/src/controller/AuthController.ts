import { getRepository } from 'typeorm';
import { Request, response, Response } from 'express';
import { tb_usuarios } from '../entity/tb_usuarios';

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

        res.send(usuario)
    }
}
export default AuthController