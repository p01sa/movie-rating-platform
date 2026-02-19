import jwt from 'jsonwebtoken';

// دالة للتحقق من صحة التوكن و تعيين المتخدم في الطلب
export function authenticateUser(req, res, next){
    const token = req.headers.authorization;
    if (!token){
        return res.status(401).json({ message: 'unauthorized'});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=> {
        if (err){
            return res.status(401).json({ message: 'forbidden'});
        }
        req.user = user;
        next();
    })
}