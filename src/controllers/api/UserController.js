const { validationResult } = require("express-validator");

class UserController {
  static register(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      }

      res.json(req.body);
    } catch (err) {
      console.error(err);

      res.send("server error");
    }
  }
}

module.exports = UserController;
