


const path = require('path');
const fs = require('fs');
const dbPath = path.join(__dirname,'../src/database/users/users.json')

const readJsonFile = (path) =>{
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}
const usuarios = readJsonFile(dbPath)
//console.log(usuarios)



const User = {
	fileName: '../src/database/users/users.json',

	getData: function () {
		return JSON.parse(fs.readFileSync(path.join(__dirname,this.fileName), 'utf-8'));
	},
    generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			let suma = parseInt(lastUser.id) + parseInt(1);
            return suma;
        
		}
        return 1;
        
		
	},
    findAll: function () {
        return this.getData();
    },
    findByPk: function(id){
        let usuarios = this.findAll();
        let users = usuarios.find(user => user.id == id);
        return users;
    },
    findByField: function (field, text){
        let usuarios = this.findAll();
        let users = usuarios.find(user => user[field] == text);
        return users;
    },
    create: function (userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData
		}
        console.log(newUser)
        allUsers.push(newUser);// si ejecuto la funcion CREATE genera un bucle infinito de creacion de usuarios

        fs.writeFileSync(path.join(__dirname,this.fileName), JSON.stringify(allUsers, null, ' '));
        return newUser;
        
        
        
	},
    delete: function (id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(path.join(__dirname,this.fileName), JSON.stringify(finalUsers, null, ' '));
		return true;
	}

}

//console.log(User.create({name:'marcos', lastName:'lopez'}));
//console.log(User.delete("5"))

module.exports = User;

