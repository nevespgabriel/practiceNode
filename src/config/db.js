import mongoose from "mongoose";

(async () => {
    try{
        await mongoose.connect(process.env.URI);
        console.log('MongoDB conectado com sucesso!');
    } catch(e){
        console.log(e.message);
    }
})();

