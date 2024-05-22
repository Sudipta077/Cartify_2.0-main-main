const express = require('express')
const dotenv = require("dotenv")
const app = express()

dotenv.config({path:'./config.env'});
app.use(express.json());
app.use(require('./auth'));

const PORT = process.env.PORT;



app.get('/', (req, res) => {
    res.send(`Hello from server`);
})


app.listen(PORT, () => {
    console.log(`Server is running at port no 5000`)
})