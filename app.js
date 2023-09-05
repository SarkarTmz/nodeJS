const express = require("express")  //requiring express package
const app = express()  //storing it in app,

app.set("view engine", "ejs" )

app.use(express.json())
app.use(express.urlencoded({extend:true}))




app.get('/',(req,res)=>{
    res.render("blog.ejs")
})

app.get('/createBlog',(req,res)=>{
    res.render("createBlog.ejs")
})

app.post('/createBlog',(req,res)=>{
    console.log(req.body)
    res.send("form submited successfully")
})



app.listen(3000,function(){
    console.log("Node is goining on")
})