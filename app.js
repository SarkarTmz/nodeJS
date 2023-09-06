const express = require("express")  //requiring express package
const { blogs } = require("./model/index")
const app = express()  //storing it in app,


// database connection
require("./model/index")

app.set("view engine", "ejs" )

app.use(express.json())
app.use(express.urlencoded({extend:true}))




app.get('/',(req,res)=>{
    res.render("blog.ejs")
})

app.get('/createBlog',(req,res)=>{
    res.render("createBlog.ejs")
})

app.post('/createBlog', async(req,res)=>{

    const title = req.body.title
    const description = req.body.description
    const subtitle = req.body.subtitle

    // const {title, subtitle, discription} = req.body

    // Data base ma halda
    await blogs.create({
        title : title,
        subtitle:subtitle,
        description : description
    })

    console.log(req.body)
    res.send("form submited successfully")
})



app.listen(3000,function(){
    console.log("Node is goining on")
})