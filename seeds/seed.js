const sequelize = require("../config/connection");
const { User, Project } = require("../models/quiz");
const userData = require("./userData.json");
const quizData = require("./quizData");

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
    await Process.create({
      ...process,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
