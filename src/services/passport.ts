import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from '../config/private';
import UserModel from '../models/User';
import mongoose from 'mongoose';
// import { User } from '../models/User';
declare global {
  namespace Express {
    interface User {
      _id: mongoose.ObjectId;
    }
  }
}
passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user._id.toString());
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
});
passport.use(
  new GoogleStrategy(
    {
      clientID: config.googlePublicKey,
      clientSecret: config.googlePrivateKey,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const user = await UserModel.findOne({ googleId: profile.id });
        if (!user) {
          const newUser = new UserModel({ googleId: profile.id });
          await newUser.save();
          done(null, newUser);
        } else {
          done(null, user);
        }
      } catch (error) {
        if (error instanceof Error) {
          done(error);
        }
      }
    }
  )
);
export default passport;
