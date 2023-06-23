import {Router} from 'express'; 
import {
    crearUsuario,
    estudiante,
    login,
} from '../controllers/UsuarioController.js'

const router = Router();


router.get("" , estudiante)

router.post("/auth/register" ,crearUsuario )

router.post("/auth/login" ,login )

export default router;