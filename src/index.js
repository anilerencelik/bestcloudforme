import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes'

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
Routes(app)

app.get('/', (reg, res) => {
    res.send('Anıl Eren ÇELİK')
})

app.listen(PORT, () =>  console.log(`App listening ${PORT}!`))
