const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true,"Add the user name"],
    },
    email:{
        type:String,
        required: [true,"Add user email address"],
        unique: [true,"Email already used"],
    },

    password: {
        type:String,
        required: [true,"Add the password"],
    },

},
{
 timestamps: true,
});

module.exports = mongoose.model("User",userSchema);