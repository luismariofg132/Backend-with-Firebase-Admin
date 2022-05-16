import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from "dotenv"
import router from './routes/routeUser';
import cors from 'cors';
import { decodeToken } from './firebase/adminTokens';
dotenv.config()

const app: Application = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(decodeToken)
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(' \{^_^}/ Server running on port', app.get('port'));
})

