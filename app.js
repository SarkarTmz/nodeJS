const express = require("express")  //requiring express package
const app = express()  //storing it in app,

app.set("view engine", "ejs" )

app.get('/',(req,res)=>{
    res.render("home.ejs")
})

app.get('/about',(req,res)=>{
    res.render("about")
})

app.get('/contact',(req,res)=>{
    res.send("<div><h1>This is contact page make though jsx</h1></div>")
})



app.listen(3000,function(){
    console.log("Node is goining on")
})