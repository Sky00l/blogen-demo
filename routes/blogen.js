var express = require("express");
var router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const categoryController = require("../controllers/categoryController");

router.get("/", dashboardController.getDashboard);
router.get("/dashboard", dashboardController.getDashboard);

// POST
router.get("/post", postController.getPosts);
router.post("/post/create", postController.createPost);
router.get("/post/details", postController.getDetails);
router.post("/post/update", postController.updatePost);
router.get("/post/delete", postController.deletePost);

// // CATEGORY
router.get("/category", categoryController.getCategories);

// // USER
router.get("/user", userController.getUsers);

// router.get("/category", function(req, res, next) {
//   res.render("category", { title: "Blogen Category" });
// });

module.exports = router;
