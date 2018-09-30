const { verifyLogin } = require('../../auth/logicService');

const login = (req, res) => {
  const { email, password, classIds } = req.body;
  verifyLogin(email, password, classIds, (err, authToken) => {
    if (err) {
      res.status(401).json({
        meesage: err
      });
    } else {
      const expiryDate = 1000 * 60 * 60 * 24 * 7 * 4; // 1 Month
      res.cookie('authToken', authToken, { maxAge: expiryDate });
      res.status(200).json({ message: 'Login Successful' });
    }
  });
};

const service = {
  login
};

module.exports = service;
