const mongoose = require('mongoose');
const express = require('express');
const fs = require('fs');
const path = require("path")
//const multer = require('multer');


const { MongoClient } = require('mongodb');

async function main() {
    try {
        //"mongodb+srv://afrirewards:Afri12345Rewards@afrirewards.da6lul0.mongodb.net/
       //mongodb+srv://afrirewards:Afri12345Rewards@afrirewards.da6lul0.mongodb.net/
        await mongoose.connect("mongodb+srv://afrirewards:Afri12345Rewards@afrirewards.da6lul0.mongodb.net/hos", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
      }
}

main().catch(console.error);






const ElectionOrgSchema = new mongoose.Schema({
name: { type: String, required: true },
acronym: { type: String, required: true },
file: { type: String, required: true },
color: { type: String, required: true },
});








 const Election = mongoose.model('Election', ElectionOrgSchema);


// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2MB
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif/; // Accepted file types
//     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimeType = fileTypes.test(file.mimetype);
    
//     if (extname && mimeType) {
//       return cb(null, true);
//     }
//     cb("Error: Only images are allowed!");
//   }
// });

// // Create an Express app
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"))
//app.use('/uploads', express.static('uploads')); // Serve the uploads directory
//app.use("/css",express.static("dist"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())






app.get('/', async(req, res) => {
    res.render("index")
   
});

app.get('/service', async(req, res) => {
    res.render("service")
   
});
app.get('/about', async(req, res) => {
    res.render("about")
   
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Server running on http://localhost:4000');
});