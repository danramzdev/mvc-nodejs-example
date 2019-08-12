class IndexController {
  static index(req, res) {
    res.render("index");
  }

  static postForm(req, res) {
    res.json(req.body);
  }
}

module.exports = IndexController;
