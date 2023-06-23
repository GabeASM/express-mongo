import {Router} from 'express'; 
import {
    crearUsuario,
    estudiante,
    obtenerUsuarios,
    login,
    crearMensaje,
    obtenerMensajePorId,
    eliminarMensajePorId
} from '../controllers/UsuarioController.js'

const router = Router();


router.get("/users" , obtenerUsuarios)

router.get("" , estudiante)

router.get("/users/:userId/messages", obtenerMensajePorId);


router.post("/auth/register" ,crearUsuario )

router.post("/auth/login" ,login )

router.post("/messages" , crearMensaje)

router.delete("/messages/:messageId" , eliminarMensajePorId)



export default router;