const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/book", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json({ message: "Booking Successful" });
});

router.get("/bookings", async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

module.exports = router;
