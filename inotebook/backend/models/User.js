// import { type } from '@testing-library/user-event/dist/type';
import mongoose from 'mongoose';
// const Schema = mongoose;
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('usercredintial', UserSchema);
export default User; 