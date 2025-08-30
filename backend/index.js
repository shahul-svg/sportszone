const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Userdata = require("./model/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Data");


app.post('/register', (req, res) => {
    Userdata.create(req.body)
        .then(user => res.json({ status: "success", user }))
        .catch(err => res.json({ status: "error", message: err.message }));
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    Userdata.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "success", message: "Login successful" });
                } else {
                    res.json({ status: "error", message: "Incorrect password" });
                }
            } else {
                res.json({ status: "error", message: "No user found with this email" });
            }
        })
        .catch(err => res.json({ status: "error", message: err.message }));
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
