import { Review, User, Movie } from "../modules/index.js";
//جلب كل التقيمات 
export async function getReviews(req, res){
    const reviews = await Review.create({
        rating: req.body.rating,
        text: req.body.text,
        movieId: +req.params.movieId,
        userId: req.user.id
    })
    res.status(201).json(reviews);
}
export async function getReviewByMovieId(req, res){
    const reviews = await Review.findAll({
        where: {movieId: +req.params.movieId},
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'name']
            },
            {
                model: Movie,
                as: 'movie',
                attributes: ['id', 'name']
            }
        ]
    })
    res.json(reviews);
}