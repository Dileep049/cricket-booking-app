const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// User Model
const User = mongoose.model('User', new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}), 'users');

// Booking Model
const Booking = mongoose.model('Booking', new mongoose.Schema({
    ground: String,
    date: Date,
    startTime: String,
    endTime: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}));

// LOGIN ROUTE
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email.trim(), password: password.trim() });
        if (user) {
            res.status(200).json({ message: "Login Successful", user });
        } else {
            res.status(401).json({ error: "Invalid Email or Password" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
});

// CREATE BOOKING ROUTE
// Server lo ee route exact ga ila undali
app.post('/bookings', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: "Booking Successful", data: booking });
    } catch (err) {
        res.status(400).json({ error: "Booking Failed" });
    }
});
  

// DATABASE CONNECTION (Port changed to default 27017)
mongoose.connect('mongodb://127.0.0.1:27017/cricketDB')
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => console.log("❌ Connection Error: ", err));

app.listen(5000, () => console.log(`🚀 Server running at http://localhost:5000`));