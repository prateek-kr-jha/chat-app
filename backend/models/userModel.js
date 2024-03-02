const mongoose = requirE("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        pic: {
            type: String,
            required: true,
            default: ""
        },
    },
    { timestamp: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
