import {Router} from 'express'; 
import {
    holandaQueTalca,
    crearUsuario,
    estudiante,
    obtenerUsuarios,
    login
} from '../controllers/UsuarioController.js'

const router = Router();

router.get("/usuarios" , holandaQueTalca)

router.post("/auth/register" ,crearUsuario )

router.post("/auth/login" ,login )

router.get("/users" , obtenerUsuarios)

router.get("" , estudiante)


export default router;