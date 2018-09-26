module.exports = (req, res, next) => {
  const { authToken } = req.cookies;
  if (authToken) {
    const expiryDate = 1000 * 60 * 60 * 24 * 7 * 4; // 1 Month
    res.cookie('authToken', authToken, { maxAge: expiryDate });
    next();
  } else res.status(401).end();
};
