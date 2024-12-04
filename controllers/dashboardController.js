const Post = require("../models/postModel");
const User = require("../models/userModel");
const Category = require("../models/categoryModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getDashboard = async (req, res, next) => {
  try {
    const postFeatures = new APIFeatures(Post.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    let posts = await postFeatures.query;

    const userFeatures = new APIFeatures(User.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    let users = await userFeatures.query;

    const categoryFeatures = new APIFeatures(Category.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    let categories = await categoryFeatures.query;

    //res.json({ posts, categories });
    //console.log("posts", JSON.stringify(posts));
    res.render("dashboard", {
      data: posts,
      category: categories,
      postCount: posts.length,
      categoryCount: categories.length,
      userCount: users.length,
      title: "Blogen"
    });
  } catch (err) {
    console.log(err);
  }
};
