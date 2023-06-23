import UsuarioModel from "../models/usuario.js"
import bcrypt from "bcrypt";


function holandaQueTalca(req, res) {
    res.send("holanda que talca como andamios")
}

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
            res.status(400).send('Faltan datos requeridos.');
        }
        res.status(500).send('Error interno del servidor.')
    }
}

async function obtenerUsuarios(req, res){
    try{
        const usuarios = await UsuarioModel.find();
        res.status(200).send(usuarios)
    }catch (err) {
        res.status(500).send('Error interno del servidor.')
    }
}


async function login(req, res){
    const {email , password} = req.body
    try{
        const usuario = await UsuarioModel.findOne({email})
        if(usuario){
            const contraseñaValida = await bcrypt.compare(password , usuario.password)
            if(contraseñaValida) res.status(200).send(true)
            else res.status(401).send("contraseña incorrecta")
        }
        else res.status(404).send("usuario no encontrado")
    }
    catch (err){
        if (err.name === 'ValidationError') res.status(400).send('Faltan datos requeridos.');
        res.status(500).send('Error interno del servidor.')
    }
}



async function estudiante(req, res) {
    try {
        res.status(200).send("Estudiante que desarrollo la API : Gabriel Aillapan San Martin")
    } catch (err) {
        res.status(500).send(err)
    }
}



export {
    holandaQueTalca,
    crearUsuario,
    obtenerUsuarios,
    login,
    estudiante
}