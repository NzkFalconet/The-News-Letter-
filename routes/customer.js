const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// POST route to submit customer details
router.post('/', async (req, res) => {
    const { name, phone, email } = req.body;

    try {
        const newCustomer = new Customer({ name, phone, email });
        await newCustomer.save();
        res.status(201).json({ message: 'Customer details saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving customer details' });
    }
});

module.exports = router;
