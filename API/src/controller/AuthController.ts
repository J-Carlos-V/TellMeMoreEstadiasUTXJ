import { getRepository } from 'typeorm';
import { Request, response, Response } from 'express';
import { User } from '../entity/User';

class AuthController{
    static login = async (req: Request, res: Response)=>{
        const {username, password} = req.body;

        if (!(username && password)) {
            res.status(400).json({message: 'Username & Pasword are required'});
        }
        const userRepository = getRepository(User);
        let user : User;


        try {
            user = await userRepository.findOneOrFail(where)
        } catch (e) {
            return res.status(400).json({message: 'Usuario o contraseña incorrecta'});
        }

        res.send(user)
    }
}
export default AuthController