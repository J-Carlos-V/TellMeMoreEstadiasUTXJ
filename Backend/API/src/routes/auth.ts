import { Router } from 'express';
import AuthController from '../controller/AuthController';
import { checkJwt } from '../middlewares/jwt';


const router = Router();

router.post('/login', AuthController.login);


//Cambio de Password

router.post('/change-password', [checkJwt], AuthController.cambiarContra);
export default router;