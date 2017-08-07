const authService = require('../../auth/logicService');

let login = (req, res) => {
    let { email, password, class_id } = req.body;
    authService.verifyLogin(email, password, class_id, (err, authToken) => {
        if (err) {
            res.status(401).json({
                meesage: err
            });
        }
        else {
            let expiryDate = 1000 * 60 * 60 * 24 * 7 * 4;  //1 Month
            res.cookie("authToken", authToken, { maxAge: expiryDate });
            res.status(200).json({ message: "Login Successful" });
        }

    });
}

module.exports = {
    login: login
}