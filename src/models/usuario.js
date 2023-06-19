import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
    {
        name : {
            type: String, 
            required: true
        },
        email : {
            type: String, 
            required: true
        },
        dni : {
            type: String, 
            required: true
        },
        password : {
            type: String, 
            required: true
        },
    }
)
const UsuarioModel = mongoose.model('usuarios' , usuarioSchema)

export default UsuarioModel; 