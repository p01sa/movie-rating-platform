import Sequelize  from "../utils/db.js";
import { DataTypes } from "sequelize";
import { Review } from "./reviews.model.js";
import { Watchlist } from "./watchlist.model.js";
//تعريف نموذج المستخدم
const User = Sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})
User.associate = (models) => {
    User.hasMany(models.Review, {
        foreignKey: 'userId',
        as: 'reviews'
    }),
    User.hasMany(models.Watchlist, {
        foreignKey: 'userId',
        as: 'watchlist'
    })
}

export { User };