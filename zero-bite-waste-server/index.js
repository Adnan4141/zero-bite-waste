const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Express app
const app = express();
app.use(cors());
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
 
}).then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('Mongo error:', err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/waste', require('./routes/wasteRoutes'));
app.use('/api/donate', require('./routes/donateRoute'));
app.use('/api/contact', require('./routes/contactRoute'));

// Start server
app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
