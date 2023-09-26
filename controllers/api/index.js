const router = require("express").Router();
const userRoutes = require("./userRoutes");
const quizRoutes = require("./quizRoutes");
const languageRoutes = require("./languageRoutes");

router.use("/users", userRoutes);
router.use("/quiz", quizRoutes);
router.use("/language", languageRoutes);

module.exports = router;
