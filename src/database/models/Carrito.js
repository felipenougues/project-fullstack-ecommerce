module.exports = (sequelize, DataTypes) => {
    const alias = "Carrito";

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        },
        id_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_product: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.STRING,
        },
        total_price: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
        
    }

    const Carrito = sequelize.define(alias,cols,config);

    // Acá incluir asociaciones de ser necesario (Product.associate...)

    return Carrito;
}