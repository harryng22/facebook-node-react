import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    text: true,
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    text: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    text: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Email is required"],
  },
  picture: {
    type: String,
    trim: true,
    default:
      "https://gravatar.com/avatar/16e7992c7357bd9b986f3c45578c72db?s=400&d=mp&r=x",
  },
  cover: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    trim: true,
  },
  birthYear: {
    type: Number,
    required: true,
    trim: true,
  },
  birthMonth: {
    type: Number,
    required: true,
    trim: true,
  },
  birthDay: {
    type: Number,
    required: true,
    trim: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  friends: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  requests: {
    type: Array,
    default: [],
  },
  search: [
    {
      user: {
        type: ObjectId,
        ref: "User",
      },
    },
  ],
  detail: {
    bio: {
      type: String,
    },
    otherName: {
      type: String,
    },
    job: {
      type: String,
    },
    workplace: {
      type: String,
    },
    highSchool: {
      type: String,
    },
    college: {
      type: String,
    },
    currentCity: {
      type: String,
    },
    hometown: {
      type: String,
    },
    relationship: {
      type: String,
      enum: ["Single", "In a relationship", "Married"],
    },
    instagram: {
      type: String,
    },
  },
  savedPosts: [
    {
      post: {
        type: ObjectId,
        ref: "Post",
      },
      savedAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});
