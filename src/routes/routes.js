import {Router} from 'express'; 
import {
    holandaQueTalca,
    crearUsuario
} from '../controllers/UsuarioController.js'

const router = Router();

router.get("/usuarios" , holandaQueTalca)

router.post("/register" ,crearUsuario )

export default router;