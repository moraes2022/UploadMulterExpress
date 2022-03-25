const express = require('express');
const app = express();
const multer = require("multer");

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage});


app.get("/", (req, res) => {
    res.render('index');
});

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("Success file uploaded")
})
app.listen(3000, ()=>{
    console.log('Serv is up');
});