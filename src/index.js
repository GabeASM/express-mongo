import express from "express";
import hasdfs from './routes/routes.js'
import connect from "./bbdd/mongo.js";

const app = express();

app.use(express.json())
app.use('/auth', hasdfs)


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

