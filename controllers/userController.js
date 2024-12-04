const User = require("../models/userModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getUsers = async (req, res, next) => {
  try {
    const userFeatures = new APIFeatures(User.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    let users = await userFeatures.query;

    // res.json(users);
    res.render("users", {
      data: users,
      title: "Users"
    });
  } catch (err) {
    console.log(err);
  }
};
