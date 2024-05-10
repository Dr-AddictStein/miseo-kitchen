import mongoose, { Schema } from "mongoose";

const ingredSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    quantity:{
        type: String,
        require: true
    }
})

const ingred=mongoose.model('ingredient',ingredSchema);

export default ingred;