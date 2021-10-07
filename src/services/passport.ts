import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from '../config/private';
import User from '../models/user';
export default passport.use(
  new GoogleStrategy(
    {
      clientID: config.googlePublicKey,
      clientSecret: config.googlePrivateKey,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      const user = await User.find({ googleId: profile.id });
      if (user.length === 0) {
        const newUser = new User({ googleId: profile.id });
        await newUser.save();
      } else {
        console.log(user);
      }
    }
  )
);
