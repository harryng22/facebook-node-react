import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        text: true
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
        text: true
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        text: true,
        unique: true
    },
    first_name: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        text: true
    },
    
})