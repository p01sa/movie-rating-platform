//شفرات الخاصة بالتعامل مع المستخدمين
import { User } from "../modules/user.modules.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/helpers.js";

//دالة لتسجيل مستخدم جديد
export async function register(req, res){
    
    //التحقق من وجود المستخدم مسبقا
    const user = await User.findOne({where: { email: req.body.email}});
    if(user){
        res.status(400).json({ message: 'User oready exists'})
        return;
    }
    //تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //انشاء مستخدم جديد
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    //انشاء توكن للمستخدم
    const token = generateToken(newUser.id);

    res.status(201).json({
        token,
        user: {
            id: newUser.id,
            name: newUser.name
        }
    })
}

//دالة لتسجيل الدخول
export async function login(req, res){
    const user = await User.findOne({ where: { email: req.body.email}});
    if (!user){
        return res.status(404).json({ message: 'email or password are wrong'});
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid){
        return res.status(404).json({ message: 'email or password are wrong'});
    }
    const token = generateToken(user.id);
    res.json({token});
}
//دالة لجلب بيانات المستخدم الحالي
export async function getCurrentUser(req, res){
    const user = await User.findByPk(req.user.id)
    if (!user){
        return res.status(404).json({ message: 'User not found'});
    }
    res.json({
        id: user.id,
        name: user.name,
        email: user.email
    })
};