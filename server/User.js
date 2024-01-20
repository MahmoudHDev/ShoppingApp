import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    email: String,
    password: String,
    fName: String,
    lName: String,
    birthday: String,
    gender: String
});

const User = mongoose.model('User', UserSchema);

export default User;

