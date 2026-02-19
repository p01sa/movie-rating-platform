import express from 'express';
import morgan from 'morgan';
import { initDB } from './utils/db.js';
import authRouter from './routes/auth.routes.js';
import movieRouter from './routes/movise.router.js';
import { createDefaultAdmin } from './utils/admin.js';
import reviewRouter from './routes/reviews.routes.js';
import wathchRouter from './routes/watchlist.routes.js';


initDB().then(()=> {
    createDefaultAdmin();
});

const app = express();

app.use(morgan('dev'));
app.use(express.json());

console.log(process.env.PORT)


app.get('/', (req, res)=> {
    res.json({ message: 'Welcome to the Movies API'});
})
//موجه الجذر للتطبيق
app.use('/api/auth', authRouter);
app.use('/api/movies', movieRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/watchlist', wathchRouter);



app.use((req, res) => {
    res.status(404).json({error: 'not found' })
    });

app.use((err, req, res, next)=> {
    console.error(err.message);
    res.status(500).json({ error: 'internal server error'});
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});