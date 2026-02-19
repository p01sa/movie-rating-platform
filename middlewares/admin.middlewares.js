import { User } from "../modules/index.js";
//دالة للتحقق من الادمن قبل الوصول الى بعض المسارات الحساسة في التطبيق
export async function authenticateAdmin(req, res, next){
    if (!req.user) {
        return res.status(401).json({ message: 'Unautherized '})
    }
    const user = await User.findByPk(req.user.id) ;
    if (!user.isAdmin){
        return res.status(403).json({ message: 'forbidden'})
    }
    next();
}
