const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const privacyRoutes = require('./routes/privacyRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Routes for Privacy Section ✅
app.use('/api/privacy', privacyRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
