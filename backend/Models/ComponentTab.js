import mongoose, { Schema } from "mongoose";

import taskSchema from './TaskTab.js'
import ingredSchema from './ingredTab.js'

const componentSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    shortCode:{
        type: String,
        require: true
    },
    priority:{
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    time:{
        type: String,
        require: true
    },
    tasks:[taskSchema.Schema],
    ingredients:[ingredSchema.Schema],
    instructions:{
        type: String,
        require: true
    }
});

const component=mongoose.model('Component',componentSchema);

export default component