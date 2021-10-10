const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.js");
const adminRoutes = require("./routes/admin/auth");
const cors = require("cors");
const tripRoutes = require("./routes/trip")
const ticketRoutes = require("./routes/ticket")
//env var
env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@ticketmanage.e4mp6.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api/trip", tripRoutes);
app.use("/api/ticket", ticketRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
