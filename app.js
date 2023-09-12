const express = require("express")  //requiring express package
const { blogs } = require("./model/index")
const app = express()  //storing it in app,


// database connection
require("./model/index")

//telling the node js to set view engine to ejs
app.set("view engine", "ejs" )


// node js lai yo file ko code accesss garna deu vaneko
app.use(express.static("public/"))


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



// Edit blog 
app.get("/edit/:id", async (req,res)=>{
    const id = req.params.id
    // find blog of that id 
const blog = await  blogs.findAll({
        where : {
            id : id
        }
    })

    res.render("editBlog",{blog : blog})
})

app.post("/editBlog/:id",async (req,res)=>{
    const id = req.params.id
    const title = req.body.title
    const subtitle = req.body.subtitle
    const description = req.body.description

    // first approach 
    // await  blogs.update(req.body,{
    //     where :{
    //         id : id
    //     }
    // })

    // second approach 
    await blogs.update({
        title : title,
        subtitle : subtitle,
        description : description
    },{
        where : {
            id : id
        }
    })

    res.redirect("/single/" + id)
})

app.listen(3000,function(){
    console.log("Node is goining on")
})