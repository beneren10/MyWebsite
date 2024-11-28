const express = require("express");
const port = 5050; 
const app = express();
const dirNameHtml = __dirname;
const ejs = require("ejs");


app.use(express.static(__dirname));

app.set("view engine","ejs");

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/contact", (req,res)=>{
    res.render("contact")
})

app.listen(port, ()=> {
    console.log(`Server has started on port ${port}`);
})