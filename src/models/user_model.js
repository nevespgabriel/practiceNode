import {Schema, model} from mongoose;

const userSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true
    },
    password:{
        type: Schema.Types.String,
        required: true,
        min: 8
    }
})