const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const mainRoutes = require('./routers/mainRoutes');
const productsRoutes = require('./routers/productsRoutes');
const usersRoutes = require("./routers/usersRoutes")

app.set("view engine","ejs");
app.set('views',__dirname + '/views')

app.use(express.static(path.join(__dirname, './public')));


app.use("/users", usersRoutes)
app.use("/products",productsRoutes);
app.use("/", mainRoutes);


app.listen(PORT, () => console.log(`App running on Port ${PORT}`));