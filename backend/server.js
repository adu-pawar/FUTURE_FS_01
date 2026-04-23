require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contact'));

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));
} else {
  console.log('WARNING: MONGO_URI not found in environment variables.');
}

app.get('/', (req, res) => {
  res.send('Portfolio Backend API Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
