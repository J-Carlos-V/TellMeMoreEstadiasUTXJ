import { Response, Request, NextFunction } from 'express';
import { tb_usuarios } from '../entity/tb_usuarios';
import { getRepository } from 'typeorm';





export const checkRole = (roles : Array<string>)=>{
    return async (req: Request, res: Response, next: NextFunction)=>{
        const {userId} = res.locals.jwtPayload;
        const userRepository = getRepository(tb_usuarios);
        let usuario : tb_usuarios;

        try {
            usuario = await userRepository.findOneOrFail(userId);
        } catch (error) {
            return res.status(401).send();
        }

        //Check
        const {Tipo} = usuario;
        if (roles.includes(Tipo)) {
            next();
        } else {
            res.status(401).json({ message: 'Acceso Denegado'});
            
        }
    };

};