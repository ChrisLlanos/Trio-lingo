const router = require("express").Router();
const { Quiz } = require("../../models/quiz");

router.get("/", async (req, res) => {
  res.render("quiz");
});

module.exports = router;
