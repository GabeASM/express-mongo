import UsuarioModel from "../models/usuario.js"
import bcrypt from "bcrypt"; 


function holandaQueTalca(req,res){
    res.send("holanda que talca como andamios")
}

async function crearUsuario(req, res){
    try{
        const contraseñaEncriptada = await bcrypt.hash(req.body.password, 10);
        const usuarioCreado = await UsuarioModel.create(
            {
                ...req.body,
                password:contraseñaEncriptada
            }
        );

        res.status(201).send(true)
    }catch(err){
        res.status(500).send(err)
    }
}

export{
    holandaQueTalca,
    crearUsuario
}