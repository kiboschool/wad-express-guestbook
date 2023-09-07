const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Setup SQLite database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE guests (id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE, message TEXT)");
});

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Main route
app.get('/', (req, res) => {
    const query = "SELECT name, email, message FROM guests";
    db.all(query, [], (err, guests) => {
        if (err) throw err;
        res.render('index', { guests: guests });
    });
});

app.post('/', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.redirect('/');
    }

    const stmt = db.prepare("INSERT INTO guests (name, email, message) VALUES (?, ?, ?)");
    stmt.run([name, email, message], function(err) {
        if (err) throw err;
        res.redirect('/');
    });
    stmt.finalize();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;