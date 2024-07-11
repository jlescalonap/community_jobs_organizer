// user.mode.ts

// Modules
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        strim: true
    },
    email: {
        unique: true,
        type: String,
        require: true,
        strim: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export default mongoose.model("User", UserSchema)