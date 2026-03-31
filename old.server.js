const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());



// Connexion DB

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

db.connect();



// LOGIN
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    

    db.query(
    "SELECT * FROM users WHERE username = ?"
    [username],
    async (err, results) => {
        if (results.length === 0) return res.send("User pas trouvé");

        const user = results[0];
})
console.log(user)
})
 // Connexion DB