import express from 'express';
import { config } from 'dotenv';
import db from './db/models'
import bodyParser from 'body-parser'; 
import morgan from 'morgan';
import cors from 'cors'
import router from './Routes/index';





config();

const app = express();
const PORT = process.env.PORT || 2000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use(morgan("dev"))

app.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Welcome to Smart Attendance '
    });
});
app.use(router)
app.use((req, res) => {
    res.status(404).json({error: 'route not found'});
});

app.use((error, req, res, next) => {
    res.status(500).json({
        error: error.message,
        next
    })
})

db.sequelize.sync({ alter: false }).then(() => {
    console.log('Database Connected!');
    app.listen(PORT,() => {
        console.log(`Server listening on port: ${PORT}`)
    })
})

export default app;