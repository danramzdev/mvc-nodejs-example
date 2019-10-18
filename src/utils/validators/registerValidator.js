const { check } = require("express-validator");

module.exports = [check("name").isLength({ min: 4 }), check("email").isEmail()];
