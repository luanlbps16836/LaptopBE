const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const categoryRoute = require("./routes/categoryRoute");
const authRoute = require("./routes/authRoute");
const favoriteRoute = require("./routes/favoriteRoute");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connecting MONGOOSEDB Successfull !!!"))
    .catch((err) => {
        console.log(err);
    });

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/favotites", favoriteRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("SERVER running PORT:", process.env.PORT);
});