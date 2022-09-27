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
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Email is required"]
    },
    picture: {
        type: String,
        trim: true,
        default: "https://gravatar.com/avatar/16e7992c7357bd9b986f3c45578c72db?s=400&d=mp&r=x"
    },
    cover: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        required: [true, "Email is required"],
        trim: true
    },
    
})