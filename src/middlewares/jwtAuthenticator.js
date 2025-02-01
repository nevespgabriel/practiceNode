import jwt from "jsonwebtoken";

const auth = async(req, res, next) => {
    try{
        const token = jwt.header['authorization']?.split(' ')[1];
        jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, user) => {
            if (err) throw new Error("");
            req.user = user;
            next();
        });
    } catch(e){
        res.send(403);
    }
}

export default auth;