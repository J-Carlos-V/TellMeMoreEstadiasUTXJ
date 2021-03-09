import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { User } from '../entity/User';
 const router = Router();


 //router
 //Get all users
 router.get('/', UserController.getAll),
//get one user
 router.get('/:id', UserController.getById);
 //get create user
 router.post('/', UserController.newUser);
 //Edit user
 router.patch('/:id', UserController.editUser);
 //Delete
 router.delete('/:id', UserController.deleteUser);

 export default router;
