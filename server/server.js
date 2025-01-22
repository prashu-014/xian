import express from 'express'
const app = express()
const PORT = 5000;
import cors from 'cors'
import connectDB from './db/connectDB.js';
import loginRoute from './routes/login.route.js'

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello prashant')
})


app.use('/api/v1/login',loginRoute)



app.listen(PORT, async() => {
    connectDB();
    console.log(`server is running....${PORT}`);

})