const FacebookStrategy = require('passport-facebook').Strategy


module.exports = (router, User, jwt, config, passport) => {
  passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    passReqToCallback: config.facebook.passReqToCallback,
    profileFields: config.facebook.profileFields
  },
  (req, acccesoToken, refreshToken, profile, done) => {
    if (!req.user){ // ----> check if the user is already logged in

      //  user find by email or facebook id
      User.findOne({
        $or: [
          {'facebook': profile.id},
          {'email': profile.emails[0].value || ''}
        ]}, (err, resUser) => {

        if (err) return done(err)

        // If the user exists
        if (resUser) {

          // Return error 401 UNAUTHORIZED if user inactive
          if (resUser.status == 'inactive') return done(null, false)

          // Cretae session Token if user active
          let token = jwt.sign(resUser, config.auth.secret, {
            expiresIn: "15 days"
          })
          return done(null,{
            user: resUser,
            token: `Bearer ${token}`
          })

        } else { // -----> if not user

          //  Create User
          let user = new User({
            email: profile.emails[0].value || '',
            facebook: profile.id,
            name: profile.name.givenName,
            status: 'active'
          })

          user.save( (err, resUser) => {
            if (err) return done(err)

            // Create session Token
            let token = jwt.sign(resUser, config.auth.secret, {
              expiresIn: "15 days"
            })
            return done(null, {
              user: resUser,
              token: `Bearer ${token}`
            })
          })

        }
      })
    }
  }
))

  router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email']}))

  router.get('/auth/facebook/callback', passport.authenticate('facebook',{
    successRedirect: config.facebook.successRedirect,
    failureRedirect: config.facebook.failureRedirect,
    failureFlash: config.facebook.failureFlash,
    session: config.facebook.session
  })
)


}
