const sequelize = require("../config/connection");
const { User, Quiz } = require("../models");
const { Progress } = require("../models");
const userData = require("./userData.json");
const quizData = require("./quizData");
const progressData = require("./progressData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const quiz of quizData) {
    const randomUserIndex = Math.floor(Math.random() * users.length);
    const randomUserId = users[randomUserIndex].id;
    await Quiz.create({
      ...quiz,
      userId: randomUserId,
    });
  }

  for (const progress of progressData) {
    const randomUserIndex = Math.floor(Math.random() * users.length);
    const randomUserId = users[randomUserIndex].id;

    await Progress.create({
      completedAt: new Date(),
      user_id: randomUserId,
    });
  }

  process.exit(0);
};

seedDatabase();
