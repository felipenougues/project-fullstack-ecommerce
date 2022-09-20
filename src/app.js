const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3030;
const apiProductsRoutes = require('./routers/api/apiProductsRoutes')
const apiUsersRoutes = require('./routers/api/apiUsersRoutes')
const mainRoutes = require('./routers/mainRoutes');
const productsRoutes = require('./routers/productsRoutes');
const usersRoutes = require("./routers/usersRoutes")
const session = require("express-session");
const cookies = require('cookie-parser');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')

app.set("view engine","ejs");
app.set('views',__dirname + '/views')

app.use(cors());

app.use(express.static(path.join(__dirname, './public')));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false })); //Para poder capturar la info que se envia por formulario via POST en req.body
app.use(express.json());
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware)

app.use("/api/products", apiProductsRoutes)
app.use("/api/users", apiUsersRoutes)
app.use("/users", usersRoutes)
app.use("/products",productsRoutes);
app.use("/", mainRoutes);

 


app.listen(PORT, () => console.log(`App running on Port ${PORT}`));