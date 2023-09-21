const User = require("../models/User");
const Quiz = require("../models/Quiz");
const Progress = require("../models/Progress");

User.hasMany(Progress);
User.hasMany(Quiz);
Quiz.belongsTo(User);
Progress.belongsTo(User);
