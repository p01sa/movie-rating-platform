import sequelize from "../utils/db.js";
import { DataTypes } from "sequelize";

const Watchlist = sequelize.define ('watchlist',{
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
Watchlist.associate = (model) => {
    Watchlist.belongsTo(model.User, {
        foreignKey: 'userId',
        as: 'user'
    }),
    Watchlist.belongsTo(model.Movie, {
        foreignKey: 'movieId',
        as: 'movie'
    })
}
export { Watchlist };