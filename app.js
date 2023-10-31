
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const bookRoutes = require('./routes/book');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true });

app.use('/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
