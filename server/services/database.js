const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "data",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};
