const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const districtRoutes = require("./routes/districtRoutes");
const treeRoutes = require("./routes/treeRoutes");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/districts", districtRoutes);
app.use("/api/trees", treeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
