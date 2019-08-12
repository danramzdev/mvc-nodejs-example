const router = require("express").Router();
const registerValidator = require("../../utils/validators/resgisterValidator");

module.exports = (app, controller) => {
  app.use("/api/user", router);

  router.post("/", registerValidator, controller.register);
};
