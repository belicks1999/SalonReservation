export const isAuthenticated = (req, res, next) => {
  //check user and pass to next
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: 'Unauthorized' });
  };
  