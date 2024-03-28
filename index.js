const express = require("express");
const bodyParser = require("body-parser"); // Fixed typo here
const add = express();

add.use(bodyParser.urlencoded({extended:true}));
add.use(express.static("public"));

add.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

add.post("/contact", function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const subject = req.body.subject;
    const message = req.body.message;
    
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Number: " + number);
    console.log("Subject: " + subject);
    console.log("Message: " + message);

    // Placeholder response
    res.send(__dirname+"/accept.html");
});

add.listen(process.env.PORT, function() {
    console.log("Server is running on port 3000");
});
