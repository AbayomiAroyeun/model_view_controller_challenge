const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {

    async validatePass(provided_password) {
        // bcrypt compare returns a boolean, based on if the string matches the encrypted string/password
        const is_valid = await bcrypt.compare(provided_password, this.password);

        return is_valid;
    }

 }

User.init({
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'user',
    hooks:{
        async beforeCreate(user){
            const encryptedPassword = await bcrypt.hash(user.password, 10);
            user.password = encryptedPassword; 
        }
    }
});


module.exports = User;
