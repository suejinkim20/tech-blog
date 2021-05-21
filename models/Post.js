const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model { };

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'post'
    }
);

module.exports = Post;