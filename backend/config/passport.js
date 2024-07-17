// src/config/passport.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/User.js';

const setPassportStrategy = () => {
  passport.use(new GoogleStrategy({
    clientID: '502763976844-vfforesoto656h3s89r48mu4ciedc255.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:5000/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = new User({ googleId: profile.id, displayName: profile.displayName });
        await user.save();
      }
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  });
};

export default setPassportStrategy;
