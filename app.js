const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))
app.get('/productCart', (req, res) => res.sendFile(path.join(__dirname, 'views', 'productCart.html')))
app.get('/productDetail', (req, res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html')))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))

app.listen(PORT, () => console.log(`App running on Port ${PORT}`));