const router = require("express").Router();
const userRoutes = require("./userRoutes");
const quizRoutes = require("./quizRoutes");

router.use("/users", userRoutes);
router.use("/projects", quizRoutes);

module.exports = router;
