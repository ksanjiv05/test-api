const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb://" +
    process.env.DB_URL +
    "/" +
    process.env.DB_NAME +
    "?retryWrites=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

connection
  .then((success) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("connection err ", err);
  });
