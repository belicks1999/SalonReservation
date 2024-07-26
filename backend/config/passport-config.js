import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Admin from '../Model/Admin.js'; 


//passport configuration for admin login using localstretegy
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const admin = await Admin.findOne({ username });
      if (!admin) return done(null, false, { message: 'No user with that username' });

      if (password !== admin.password) return done(null, false, { message: 'Password incorrect' });

      return done(null, admin);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Admin.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
