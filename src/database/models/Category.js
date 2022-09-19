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
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config);

    Category.associate = function(models){
        Category.hasMany(models.Product,{
            as: "products",
            foreignKey: "category_id"

        })
    }

    return Category;
}