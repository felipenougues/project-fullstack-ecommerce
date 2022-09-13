module.exports = (sequelize, DataTypes) => {
    const alias = "User";

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category:{
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

    const User = sequelize.define(alias,cols,config);

    // Acá incluir asociaciones de ser necesario (User.associate...)

    return User;
}