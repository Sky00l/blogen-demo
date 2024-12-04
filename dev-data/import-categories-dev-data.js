const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Category = require("../models/categoryModel");

dotenv.config({ path: "../config.env" });
//console.log(process.env);

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(
    () => console.log("MongoDB Server connected"),
    err => console.log("Error on connecting the MongoDB server")
  );

// IMPORT DATA

const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/categories.json`, "utf-8")
);

const importData = async () => {
  try {
    await Category.create(categories);
    console.log("Data successfully imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE DATA
const deleteData = async () => {
  try {
    await Post.deleteMany();
    console.log("Data successfully deleted.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
