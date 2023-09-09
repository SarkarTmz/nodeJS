const express = require("express")  //requiring express package
const { blogs } = require("./model/index")
const app = express()  //storing it in app,


// database connection
require("./model/index")

app.set("view engine", "ejs" )

app.use(express.json())
app.use(express.urlencoded({extend:true}))

// All blogs

app.get("/",async (req,res)=>{
    //blogs vanney table bata vayejati sabai data dey vaneko 
    const allBlogs = await blogs.findAll() 
   

    // blogs vanney key/name ma allBlogs/data pass gareko ejs file lai
    res.render('blog',{blogs:allBlogs})
})

// create blogs

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
    res.redirect("/")
})


// single page
app.get("/single/:id",async(req,res)=>{

    const id = req.params.id
    const blog = await blogs.findAll({
        where : {
            id : id
        }
    })

    res.render("singleBlog.ejs", {blog:blog})
})

// delete page 
app.get("/delete/:id",async(req,res)=>{
    const id = req.params.id
    const blog = await blogs.destroy({
        where : {
            id : id
        }
    })
    res.redirect("/")
})

app.listen(3000,function(){
    console.log("Node is goining on")
})