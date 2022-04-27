const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Drink name is required"],
        },
        price: String,
        description: String,
        status: Boolean,
    },
    {timestamps: true}
);

schema.method("toJSON", function (){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model("coffee", schema);