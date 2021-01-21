const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to database
connectDB();

// Route index
const routes = require('./routes/index');

// Load express
const app = express();

// Express middleware
app.use(express.json());

// Enable CORS
app.use(cors());

// Set Static Folder
app.use('/img', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/api', routes);

// Run server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
