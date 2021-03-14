import { getRepository, TransactionRepository } from "typeorm";
import { NextFunction, Request, Response, response } from 'express';
import { tb_usuarios } from '../entity/tb_usuarios';
import { validate } from 'class-validator';
import { send } from "process";

export class UserController {
    static getAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(tb_usuarios);
        const usuarios = await userRepository.find();

        if (usuarios.length > 0) {
            res.send(usuarios);
        } else {
            res.status(400).json({ message: 'No hay resultado' });
        }
    };

    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(tb_usuarios);
        try {
            const usuario = await userRepository.findOneOrFail(id);
            res.send(usuario);
        } catch (e) {
            res.status(404).json({ message: 'no hay resultados' });
        }
    }
    static newUser = async (req: Request, res: Response) => {
        const { Matricula,Nombre,Apellido_Paterno,Apellido_Materno,Genero,Email,Contrasena,Tipo,ImagenU} = req.body;
        const usuario = new tb_usuarios();

        usuario.Matricula = Matricula;
        usuario.Nombre = Nombre;
        usuario.Apellido_Paterno = Apellido_Paterno;
        usuario.Apellido_Materno = Apellido_Materno,
        usuario.Genero = Genero;
        usuario.Email = Email;
        usuario.Contrasena = Contrasena;
        usuario.Tipo = Tipo;
        usuario.ImagenU = ImagenU;


        //validacion
        const validationOpt = {validationError:{target: false, value: false}}; 
        const errors = await validate(usuario, validationOpt);

        if (errors.length > 0 ){
            return res.status(400).json(errors);
        }

        //TODO : hash pssword

        const userRepository = getRepository(tb_usuarios)
        try {
            usuario.hashPassword();
            await userRepository.save(usuario);
        } catch (e) {
            return res.status(409).json({ massage: 'El Usuario ya Existe'})
        }

        res.send('Usuario Creado');

    };

    static editUser = async (req: Request, res: Response)=>{
        let usuario;
        const {id} = req.params;
        const {Matricula,Nombre,Apellido_Paterno,Apellido_Materno,Genero,Email,Contrasena,Tipo,ImagenU} = req.body;

        const userRepository = getRepository(tb_usuarios)

        try {
            usuario = await userRepository.findOneOrFail(id);
            usuario.Matricula = Matricula;
            usuario.Nombre = Nombre;
            usuario.Apellido_Paterno = Apellido_Paterno;
            usuario.Apellido_Materno = Apellido_Materno,
            usuario.Genero = Genero;
            usuario.Email = Email;
            usuario.Contrasena = Contrasena;
            usuario.Tipo = Tipo;
            usuario.ImagenU = ImagenU;
        } catch (e) {

            return res.status(404).json({message: 'Usuario no encontrado'});
            
        }



        const validationOpt = {validationError:{target: false, value: false}};
        const errors = await validate(usuario, validationOpt);
        console.log(errors.length)
        if (errors.length > 0) {
            return res.status(400).json(errors); 
        }

        //try to save user

        try {
            usuario.hashPassword();
            await userRepository.save(usuario);
        } catch (e) {
            return res.status(409).json({message: 'El usuario ya Existe'});
            
        }
        res.status(201).json({massage: "Usuario Actualizado"})
    };

    static deleteUser = async (req:Request, res: Response) => {
        const {id}= req.params;
        const userRepository = getRepository(tb_usuarios);
        let usuario: tb_usuarios;

        try {
            usuario = await userRepository.findOneOrFail(id);
        } catch (e) {
            return res.status(404).json({message: 'Usuario no encontrado'})
        }
        //remover usuarios
        userRepository.delete(id);
        res.status(201).json({message: 'Usuario Eliminado'});
    }

}

export default UserController;