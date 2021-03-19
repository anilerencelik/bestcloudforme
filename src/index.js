import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 3000;

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/', (reg, res) => {
    res.send('Anıl Eren ÇELİK')
})

app.listen(PORT, () =>  console.log(`App listening ${PORT}!`))
