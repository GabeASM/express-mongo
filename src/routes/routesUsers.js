import { Router } from 'express';
import {
    obtenerUsuarios,
    obtenerMensajePorId,
} from '../controllers/UsuarioController.js'

const router = Router();

router.get("/", obtenerUsuarios)

router.get("/:userId/messages", obtenerMensajePorId);

export default router;