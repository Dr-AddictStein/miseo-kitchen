import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    shortCode:{
        type: String,
        required: true
    },
    priority:{
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    time:{
        type: String,
        required: true
    }
});

const task=mongoose.model('Task',taskSchema);

export default task;