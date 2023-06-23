import mongoose from 'mongoose'

const mensajeSchema = new mongoose.Schema(
    {
        userId : {
            type: String, 
            required: true
        },
        message : {
            type: String , 
            required: true
        }
    }
)
const MensajeModel = mongoose.model('mensajes' , mensajeSchema)

export default MensajeModel; 