const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "A post must have an id."]
  },
  title: {
    type: String,
    required: ["true", "A post must have a title."]
  },
  category: String,
  date: {
    type: Date
  },
  article: String
});

// {
//     "id": 3,
//     "title": "Post 3",
//     "category": "Health & Wellness",
//     "date": "2018-12-13T16:00:00.000Z",
//     "article": "<p>this is the post 3</p>\r\n"
// }

postSchema.set("collection", "post");
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
