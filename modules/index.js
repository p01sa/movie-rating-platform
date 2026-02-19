import { User } from './user.modules.js';
import { Movie } from './movise.model.js';
import { Review } from './reviews.model.js';
import { Watchlist } from './watchlist.model.js';
//تصدير جميع النماذج في ملف واحد لتسهيل الاستيراد في باقي اجزاء التطبيق
const models = {
    User,
    Movie,
    Review,
    Watchlist
};
Object.keys(models).forEach(modelsName=> {
    if(models[modelsName].associate){
        models[modelsName].associate(models);
    }
})
export { User, Movie, Review, Watchlist };