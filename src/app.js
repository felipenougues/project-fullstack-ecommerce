const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const mainRoutes = require('./routers/mainRoutes');
const productsRoutes = require('./routers/productsRoutes');
const usersRoutes = require("./routers/usersRoutes")
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

app.set("view engine","ejs");
app.set('views',__dirname + '/views')

app.use(express.static(path.join(__dirname, './public')));


app.use("/users", usersRoutes)
app.use("/products",productsRoutes);
app.use("/", mainRoutes);

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


app.listen(PORT, () => console.log(`App running on Port ${PORT}`));