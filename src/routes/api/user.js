const router = require("express").Router();
const registerValidator = require("../../utils/validators/resgisterValidator");

module.exports = controller => {
  router.post("/register", registerValidator, controller.register);

  return router;
};
