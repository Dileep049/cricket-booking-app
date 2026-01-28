const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking.js");

// POST: Create a new booking
router.post("/book", async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: "Booking Successful", data: booking });
    } catch (err) {
        res.status(400).json({ message: "Booking failed", error: err.message });
    }
});

// GET: Fetch all bookings
router.get("/bookings", async (req, res) => {
    try {
        const data = await Booking.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

module.exports = router;