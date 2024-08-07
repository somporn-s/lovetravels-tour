require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.status(200).send("Hello worlaxascscxd!!")
})
app.get('/test', (req,res) =>{
    res.status(200).send("Hello !!")
})
app.listen(process.env.PORT_BE)
console.log('Server on port ',process.env.PORT_BE)
