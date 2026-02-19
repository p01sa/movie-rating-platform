import { Movie } from "../modules/index.js";

//جلب كل الافلام
export async function getMovies(req, res){
    const movies = await Movie.findAll();
    res.json(movies);
}
//جلب فلم معين
export async function getMovie(req, res){
    const movie = await Movie.findByPk(req.params.id);
    res.json(movie);
}
//اضافة فلم جديد
export async function createMovie(req, res ){
    const movie = await Movie.create({
        name: req.body.name,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate
    })
    res.status(201).json(movie);
}
//تعديل فلم معين
export async function updateMovie(req, res){
    const movie = await Movie.findByPk(req.params.id)
    if(!movie){
        res.status(404).json({message: "Movie not found"})
    }
    movie.name = req.body.name;
    movie.genre = req.body.genre;
    movie.releaseDate = req.body.releaseDate;
    await movie.save();
    res.status(200).json(movie);
}
//حذف فلم معين
export async function deleteMovie(req, res){
    const movie = await Movie.findByPk(req.params.id)
    if(!movie){
        res.status(404).json({message: "Movie not found"})
    }
    await movie.destroy();
    res.json({message: "Movie deleted successfully"});
}