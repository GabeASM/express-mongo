import { Router } from 'express';
import {
    crearMensaje,
    eliminarMensajePorId
} from '../controllers/UsuarioController.js'

const router = Router();

router.post("/", crearMensaje)

router.delete("/:messageId", eliminarMensajePorId)

export default router;