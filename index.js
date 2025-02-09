const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/authRoute"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Node Server Running on Port ${process.env.PORT}`);
});
