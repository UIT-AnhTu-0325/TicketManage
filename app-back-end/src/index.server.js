const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.js");
const adminRoutes = require("./routes/admin/auth");
const cors = require("cors");

const tripRoutes = require("./routes/trip")
const ticketRoutes = require("./routes/ticket")
const customerRoutes = require("./routes/customer")
const driveRoutes = require("./routes/drive")
const enterpriseRoutes = require("./routes/enterprise")
const offlinePhoneTicketRoutes = require("./routes/offline_phone_ticket")
const reststopRoutes = require("./routes/reststop")
const routeRoutes = require("./routes/route")
const steersmanRoutes = require("./routes/steersman")
const tripLogRoutes = require("./routes/trip_log")
const vehicleRoutes = require("./routes/vehicle")
const ticketCancelRoutes = require("./routes/ticket_cancel")
const goodsRoutes = require("./routes/goods")
const feedbackRoutes = require("./routes/feedback")
const logChangeTicketRoutes = require("./routes/log_change_ticket")
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
app.use("/api/customer", customerRoutes);
app.use("/api/drive", driveRoutes);
app.use("/api/enterprise", enterpriseRoutes);
app.use("/api/offline_phone_ticket", offlinePhoneTicketRoutes);
app.use("/api/reststop", reststopRoutes);
app.use("/api/route", routeRoutes);
app.use("/api/steersman", steersmanRoutes);
app.use("/api/trip_log", tripLogRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/goods", goodsRoutes);
app.use("/api/ticket_cancel", ticketCancelRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/log_change_ticket", logChangeTicketRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
