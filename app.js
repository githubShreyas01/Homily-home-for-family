const express = require("express");
const  app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/homily";

main()
    .then(() =>{
    console.log("DB connected");
})  
.catch(err =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) =>{
res.send("hi root");
});


app.get("/testListing", async (req, res) =>{
    let sampleListing = new Listing({
        title: "My New Room",
        description: "2nd Floor",
        price: 3000,
        location: "Govindpura",
        city: "Bhopal",
    });
    
   await sampleListing.save();
   console.log("sample was saved");
   res.send("succcess testing");
});

app.listen(8080, () => {
    console.log("server is listening. 8080");
})