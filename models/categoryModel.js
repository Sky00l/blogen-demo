const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "A post must have an id."]
  },
  title: {
    type: String,
    required: ["true", "A tour must have a title."]
  },
  date: {
    type: Date
  }
});

// {
//     "id": 1,
//     "title": "Web Development",
//     "date": "2018-05-09T16:00:00.000Z"
// }

categorySchema.set("collection", "category");
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
