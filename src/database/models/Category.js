module.exports = (sequelize, DataTypes) => {
    const alias = "Category";

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        },
        name_category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
        
    }

    const Category = sequelize.define(alias,cols,config);

    Category.assosiate = function(modelos){
        Category.hasMany(modelos.Product,{
            as: "categorias_producto",
            foreingKey: category_id

        })
    }

    return Category;
}