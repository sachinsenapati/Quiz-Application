const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const connecton = require("./config/db");
const userRoute = require("./routes/userRoute");
const examRoutes = require("./routes/examRoutes");
const reportRoutes = require("./routes/reportRoutes");
dotenv.config();

connecton();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoute);
app.use("/api/exams", examRoutes);
app.use("/api/reports", reportRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(5000, () => {
  console.log("server is runing on port 5000");
});
