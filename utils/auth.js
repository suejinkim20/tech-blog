const withAuth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    if (!req.session.loggedIn) {
      console.log('\n logged in \n')
      res.redirect('/login');
    } else {
      console.log('\n next function \n')
      next();
    }
  };
  
  module.exports = withAuth;
  