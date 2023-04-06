import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    dp: String,
    username: String,
    userHandle: String,
    date: String,
    tweetText: String,

    tweetLink: {
      image: String,
      link: String,
      linkDisplay: String,
      title: String,
      desc: String,
    },
    liked: Boolean,
    metrics: {
      comments: Number,
      retweets: Number,
      likes: Number,
    },
  },
  { collection: "tuits" }
);
export default schema;
