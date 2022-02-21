const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB Connected Successfully`))
    .catch((error) => {
      console.log(`DB Connection Failed`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectDB;
