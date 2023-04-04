const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true, unique: true},
        products: [
            {
                productId: {type: String},
                isFav: {type: Boolean, default: true}
            },
        ]
    },
    {timestamps: true},
);

module.exports = mongoose.model("Cart", CartSchema);