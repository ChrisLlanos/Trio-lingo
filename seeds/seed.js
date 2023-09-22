const sequelize = require("../config/connection");
const { User, Quiz } = require("../models/quiz");
const userData = require("./userData.json");
const quizData = require("./quizData");
const processData = require("./progressData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const quiz of quizData) {
    await Quiz.create({
      ...quiz,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const process of processData) {
    const randomUserIndex = Math.floor(Math.random() * users.length);
    const randomUserId = users[randomUserIndex].id;

    await Progress.create({
      user_id: randomUserId,
    });
  }

  process.exit(0);
};

seedDatabase();
