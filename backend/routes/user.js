const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');






// Sign up route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      // Create a new user
      user = new User({
        name,
        email,
        password,
      });
  
      // Hash the password
  
      // Save the user to the database
      await user.save();
      res.status(201).json({ msg: 'User created successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

  router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
      let user = await User.findOne({email});
      if(!user) {
        return res.status(400).json({msg: 'Invalid Credentials'});
      }

      //compare passwords
      const isMatch = password === user.password;
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      res.status(200).json({ msg: 'Login successful' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  
  module.exports = router;