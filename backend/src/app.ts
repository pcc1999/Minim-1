let express = require("express");
let cors = require("cors");
let morgan = require("morgan");

const app = express();

import indexRoutes from './routes/institutionService'


//settings
app.set('port', process.env.PORT || 3000); // definim la variable PORT 



// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
app.use('/',indexRoutes); //Configurem qui sera l'autoritat de les rutes que arribin amb /app



export default app;