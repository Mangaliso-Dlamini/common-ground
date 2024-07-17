import passport from 'passport';

export const googleAuth = passport.authenticate('google', { scope: ['profile'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });

export const authRedirect = (req, res) => {
  res.redirect('/user/profile');
};
