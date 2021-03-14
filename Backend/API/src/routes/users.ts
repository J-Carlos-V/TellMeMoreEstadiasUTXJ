import { checkJwt } from '../middlewares/jwt';
import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { tb_usuarios } from '../entity/tb_usuarios';
import { checkRole } from '../middlewares/roles';



const router = Router();


 //router
 //Get all users
 router.get('/',[checkJwt], UserController.getAll);
//get one user
 router.get('/:id',[checkJwt], UserController.getById);
 //get create user
 router.post('/',[checkJwt,checkRole(['Admin','Visitante'])], UserController.newUser);
 //Edit user
 router.patch('/:id',[checkJwt,checkRole(['Admin','Logueado'])], UserController.editUser);
 //Delete
 router.delete('/:id',[checkJwt,checkRole(['Admin','Logueado'])], UserController.deleteUser);

 export default router;
