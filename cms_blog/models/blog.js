const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');



class Blog extends Model {

}

Blog.init({
    message:{
        type: DataTypes.STRING,
    }, 
    title: {
        type: DataTypes.STRING,
    },
    user_id: {
type: DataTypes.INTEGER,
references: {
    model: "user", 
    ref: "id"
} 
    }
}

)
