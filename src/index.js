import express from "express";
import rutas from './routes/routes.js'
import connect from "./configs/mongo.js";

const app = express();

app.use(express.json())
app.use('/', rutas)



console.log('Connecting to database...');
connect()
    .then(() => {
        console.log('Mongo connected successful');
        app.listen(3000, async () => {
            console.log(`Server is running on PORT: 3000`);
        });
    })
    .catch((err) => {
        console.log(err);
        process.exit(-1);
    });

