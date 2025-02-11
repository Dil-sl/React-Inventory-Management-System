const mongoose = require("mongoose");

// Use the local MongoDB URI
const uri = "mongodb://localhost:27017/InvoiceManager"; // Local DB connection

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Connected to local MongoDB successfully!");
    }).catch((err) => {
        console.log("Error: ", err);
    });
}

module.exports = { main };
