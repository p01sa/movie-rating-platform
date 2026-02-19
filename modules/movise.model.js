import sequelize from "../utils/db.js";
import { DataTypes } from "sequelize";
//تعريف نموذج الفلم
const Movie = sequelize.define('movies', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
});
Movie.associate = (models) => {
    Movie.hasMany(models.Review, {
        foreignKey: 'userId' ,
        as: 'reviews'
    }),
    Movie.hasMany(models.Watchlist, {
        foreignKey: 'movieId',
        as: 'watchlist'
    })
}
export { Movie };