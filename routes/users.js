var express = require('express');
var router = express.Router();

router.post('/login', function (req, res, next) {
    if (req.body.username == "user@123.com" && req.body.password == "admin123") {
        res.send({"success": "Login Successful!"})
    } else {
        res.send({"error": "Invalid Credentials!"})
    }
});

module.exports = router;
