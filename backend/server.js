const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const messsageRoutes = require("./routes/message.routes")
require('dotenv').config();

console.log('JWT_SECRET:', process.env.JWT_SECRET); // Debug log

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/marc-database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  
// Routes
app.use('/api/users', userRoutes);
app.use('/api/messages' , messsageRoutes) ; 

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});