import {engine} from 'express-handlebars'
import express  from 'express';
import cors from 'cors';
import coon from './db/coon.js' 

//import rotas
import UserRoutes from "./routes/UserRoutes.js";
import NewsRoutes from "./routes/newsRouter.js";


coon();
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//read body
app.use(
    express.urlencoded({
        extended: true
    })
)

//config json response

app.use(express.json());

//solve cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

//public folder for images ; 

//Routes 

app.use('/users', UserRoutes);

app.use('/newsletters', NewsRoutes); 

app.listen(5000, function(){
    console.log("Servidor Online!!");
});