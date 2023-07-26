const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id:{
     type:mongoose.Schema.Types.ObjectId,
     required: true,
     ref: "User",
    },

    name: {
      type: String,
      required: [true, "Add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Add the email"],
    },
    phone: {
      type: String,
      required: [true, "Add the phone number"],
    },
  },
  {
    //to know when new data was added and updated
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact",contactSchema);