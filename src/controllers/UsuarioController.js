import MensajeModel from "../models/mensaje.js";
import UsuarioModel from "../models/usuario.js"
import bcrypt from "bcrypt";




async function crearUsuario(req, res) {
    try {
        const contraseñaEncriptada = await bcrypt.hash(req.body.password, 10);
        const usuarioCreado = await UsuarioModel.create(
            {
                ...req.body,
                password: contraseñaEncriptada
            }
        );

        res.status(201).send(true)
    } catch (err) {
        if (err.name === 'ValidationError') {
            // Error de validación: faltan datos requeridos
            res.status(400).send({
                status: false,
                mensaje: 'Faltan datos requeridos.'
            });
        }
        res.status(500).send({
            status: false,
            mensaje: 'Error en el servidor'
        })
    }
}

async function obtenerUsuarios(req, res) {
    try {
        const usuarios = await UsuarioModel.find();
        res.status(200).send(usuarios)
    } catch (err) {
        res.status(500).send('Error interno del servidor.')
    }
}


async function login(req, res) {
    const { email, password } = req.body
    try {
        const usuario = await UsuarioModel.findOne({ email })
        if (usuario) {
            const contraseñaValida = await bcrypt.compare(password, usuario.password)
            if (contraseñaValida) res.status(200).send(true)
            else res.status(401).send({
                status: false,
                mensaje: 'Contraseña incorrecta.'
            })
        }
        else res.status(404).send({
            status: false,
            mensaje: 'Usuario no encontrado'
        })
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).send('Faltan datos requeridos.');
            return ; 
        }
        res.status(500).send({
            status: false,
            mensaje: 'Error en el servidor.'
        })
        
    }
}



async function estudiante(req, res) {
    try {
        res.status(200).send("Estudiante que desarrollo la API : Gabriel Aillapan San Martin")
    } catch (err) {
        res.status(500).send(err)
        
    }
}



async function crearMensaje(req, res) {
    const { userId, message } = req.body
    try {
        const usuario = await UsuarioModel.findById(userId)
        if (!usuario) {
            res.status(404).send("usuario no encontrado")
            return;
        }
        const mensaje = await MensajeModel.create({
            userId,
            message
        })
        res.status(200).send(true)
    } catch (err) {
        res.status(500).send({
            status: false,
            mensaje: 'Error en el servidor.'
        })
    }
}

async function obtenerMensajePorId(req, res) {
    const { userId } = req.params

    try {
        const usuario = await UsuarioModel.findById(userId)
        if (!usuario) {
            res.status(404).send('El usuario no existe');
            return;
        }
        const mensajes = await MensajeModel.find({ userId: userId })
        res.status(200).send(mensajes)
    } catch (err) {
        res.status(500).send(err)
    }
}


async function eliminarMensajePorId(req, res) {
    const { messageId } = req.params;

    try {
        const mensaje = await MensajeModel.findById(messageId);
        if (!mensaje) {
            res.status(404).send('El mensaje no existe');
            return;
        }
        await MensajeModel.findByIdAndDelete(messageId);

        res.status(204).send('Mensaje eliminado correctamente');
    } catch (error) {
        res.status(500).send('Error al eliminar el mensaje');
    }
}

export {
    crearUsuario,
    obtenerUsuarios,
    login,
    crearMensaje,
    obtenerMensajePorId,
    eliminarMensajePorId,
    estudiante
}