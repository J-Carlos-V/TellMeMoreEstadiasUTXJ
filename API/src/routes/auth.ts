import { Router } from 'express';
import AuthController from '../controller/AuthController'


const router = Router();

router.post('/login', AuthController);

export default router;