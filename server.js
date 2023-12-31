// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const UserDetails = require('./src/models/landing');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error);
    });

app.post('/user-details', async (req, res) => {
    try {
        console.log('Received request:', req.body);

        const user = new UserDetails(req.body);
        const savedUser = await user.save();
        
        console.log('User details saved successfully:', savedUser);
        
        res.json(savedUser);
    } catch (error) {
        console.error('Error saving user details:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
