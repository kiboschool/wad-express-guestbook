const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Setup SQLite database
const db = new sqlite3.Database(':memory:');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // TODO: Add code to get all reviews
    res.render('index');
});

app.post('/', (req, res) => {
    // TODO: Add code to create review in DB
    res.send({})
});

server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = {app, server};