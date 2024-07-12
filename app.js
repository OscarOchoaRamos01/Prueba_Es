const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const ip = 'localhost';
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
     console.log(`Servidor escuchando en http://${ip}:${port}`);
});