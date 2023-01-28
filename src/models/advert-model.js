
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../utils/connectionDB');

const Advert = sequelize.define('advert', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
       
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "someone"
    },
    category: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    region: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    status:
    {
        type: DataTypes.ENUM('draft', 'moderation', 'active', 'closed'),
        default: 'active'
    }
}, {
    timestamps: false
});

module.exports = Advert;