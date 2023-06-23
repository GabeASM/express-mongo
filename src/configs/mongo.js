import mongoose from 'mongoose';
import mongoURI from './eviroments.js';

function connect(){
    return mongoose.connect(mongoURI)
}

export default connect;