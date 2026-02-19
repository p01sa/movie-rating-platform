import { Watchlist,Movie } from "../modules/index.js";

export async function addWatchlist(req, res){
    const watchlist = await Watchlist.create({
        movieId: +req.params.movieId,
        userId : req.user.id
    })
    res.status(201).json(watchlist);
}
export async function getWatchlist(req, res){
    const watchlist = await Watchlist.findAll({
        where: { userId: req.user.id },
        include: [{
            model: Movie,
            as: 'movie',
            attributes: ['id', 'name']
       }]
    })
    res.json(watchlist);
}
export async function removeFromWatchlist(req, res){
    const watchlist = await Watchlist.destroy({
        where: {
            userId: req.user.id,
            movieId: +req.params.movieId
        }
    })
    res.json({ message : 'movie removed from watchlist'});
}