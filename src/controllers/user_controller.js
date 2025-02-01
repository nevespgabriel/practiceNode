import User from "../models/user_model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const store = async(req, res) => {
    try{

    } catch(error){

    }
}

const generateToken = (user) => {
    return jwt.sign({username: user.username}, process.env.JWT_PRIVATE_KEY, {expiresIn: "1h"});
}

const login = async(req, res) => {
    try{
        const user = req.body;
        const userExist = await User.findOne({ username: user.username });
        if (!userExist) {
            return res.sendStatus(400).json("Usuário inexistente.");
        }
        const isMatch = bcrypt.compare(password, userExist.password);
        if(!isMatch){
            return res.sendStatus(400).json("Senha incorreta.");
        }
        const token = generateToken(user);
        res.status(200).json({ token });
    } catch(error){

    }
}

const signup = async(req, res) => {
    try {
        const { username, password } = req.body;

        const userExist = await User.findOne({ username });
        if (userExist) {
            return res.status(400).json("Usuário já existe." );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();

        return res.status(201).json("Usuário criado com sucesso!");
    } catch (error) {

        return res.status(500).json("Erro ao criar o usuário." );
    }
}

const index = async(req, res) => {
    try{

    } catch(error){

    }
}

const show = async (req, res) => {
    try{

    } catch(error){

    }  
}

const update = async(req, res) => {
    try{

    } catch(error){

    }
}

const destroy = async(req, res) => {
    try{

    } catch(error){

    }
}

export default {store, index, show, update, destroy, login, signup};