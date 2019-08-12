const router = require("express").Router();

module.exports = (app, controller) => {
  app.use("/", router);

  router.get("/", controller.index);
  router.post("/", controller.postForm);
};
