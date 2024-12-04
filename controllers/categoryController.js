const Category = require("../models/categoryModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getCategories = async (req, res, next) => {
  try {
    const categoryFeatures = new APIFeatures(Category.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    let categories = await categoryFeatures.query;

    // res.json(categories);
    res.render("categories", {
      data: categories,
      title: "Categories"
    });
  } catch (err) {
    console.log(err);
  }
};
