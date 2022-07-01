const express = require('express'); 
const { normalize } = require('path');
let path = require('path')

const port=3030;
const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {  res.sendFile(path.join(__dirname,'/view','home.html') )})

app.listen(port, () => console.log("Servidor levantado correctamente"));
normalize