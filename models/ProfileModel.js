const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    bio: { type: String },
    social: {
      snapchat: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      facebook: { type: String },
      youtube: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
