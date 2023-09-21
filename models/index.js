const User = require("../models/user");
const Quiz = require("../models/quiz");
const Progress = require("../models/progress");

User.hasMany(Progress);
User.hasMany(Quiz);
Quiz.belongsTo(User);
Progress.belongsTo(User);
