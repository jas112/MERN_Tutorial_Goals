const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// app.get('/api/goals', (req, res) => {
// 	res.status(200).json({ message: 'Get goals' });
// });

app.use('/api/goals', require('./routes/goalRoutes.js'))

app.listen(port, () => console.log(`Server started on port ${port}`));
