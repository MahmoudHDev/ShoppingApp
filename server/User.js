import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import passport from 'passport';
import LocalStrategy from 'passport-local';

// Properties
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: String,
    password: String,
    fName: String,
    lName: String,
    birthday: String,
    gender: String
});


// Methods:-
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export default User;

