module.exports = (sequelize, DataTypes) => {
    const alias = "Product";

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
    }

    const Product = sequelize.define(alias,cols,config);

    // Acá incluir asociaciones de ser necesario (Product.associate...)

    return Product;
}