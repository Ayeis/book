import {Schema, model} from "mongoose";

const bookSchema = new Schema({ 
    title: {
        type: String,
        required: true,
        trim: true
    },    
    author: {
        type: String,        
        default: "Undefined",
        trim: true
    },
    description: {
        type: String,
        default: "Undefined",
        trim: true
    }, 
    pages: {
        type: String,
        default: "Undefined",
        trim: true
    },   
    year: {
        type: String,
        default: "Undefined",
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('Book',bookSchema)