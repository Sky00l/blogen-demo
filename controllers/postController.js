const moment = require("moment");
const Post = require("../models/postModel");
const Category = require("../models/categoryModel");
const APIFeatures = require("../utils/apiFeatures");

// CREATE
exports.createPost = async (req, res, next) => {
  try {
    //console.log(req.body);
    req.body.article = req.body.editor1;
    if (!req.body.date) {
      req.body.date = new Date();
    }
    const newPost = await Post.create(req.body);
    res.redirect("/blogen/dashboard");
  } catch (err) {
    console.log(err);
  }
};

// READ
exports.getPosts = async (req, res, next) => {
  try {
    const postFeatures = new APIFeatures(Post.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    let posts = await postFeatures.query;

    // res.json(posts);
    res.render("posts", {
      data: posts,
      title: "Posts"
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getDetails = async (req, res, next) => {
  try {
    const postFeatures = new APIFeatures(
      Post.findById(req.params._id),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();
    let posts = await postFeatures.query;

    // let post = await Post.findById(req.params._id);
    //console.log("getDetails-post", JSON.stringify(posts));

    let categories = await Category.find();
    //console.log("getDetails-cate", JSON.stringify(categories));

    let selectedId;
    categories.forEach(p => {
      if (p.title == posts[0].category) {
        selectedId = p.id;
        // console.log("selectedId", selectedId, p);
      }
    });

    res.render("details", {
      data: posts,
      category: categories,
      selectedId,
      title: "Edit Post"
    });
  } catch (err) {
    console.log(err);
  }
};

// UPDATE
exports.updatePost = async (req, res, next) => {
  try {
    console.log(req.body);
    const updatePost = await Post.findByIdAndUpdate(req.body._id, req.body, {
      new: true
    });
    res.redirect("/blogen/dashboard");
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    console.log("deletePost", req.query._id);
    const deletePost = await Post.findByIdAndDelete(req.query._id);
    res.redirect("/blogen/dashboard");
  } catch (err) {
    console.log(err);
  }
};
