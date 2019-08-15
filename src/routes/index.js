const router = require("express").Router();

module.exports = controller => {
  router.get("/", controller.index);
  router.post("/", controller.postForm);

  return router;
};
