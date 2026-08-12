import express from 'express';
import cors from 'cors'
import clientRoute from './routes/clientRoute.js'

const app = express();
const port = 'https://crud-backend-orcin.vercel.app/';
app.use(cors())
app.use(express.json())
app.use('/api', clientRoute)
app.listen(port, ()=>{
    console.log('listeing on port',port)
})