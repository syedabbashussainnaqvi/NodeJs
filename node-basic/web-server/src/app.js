const express = require("express") //it imports just a single function as opposed to the object like axios
const path = require("path")
const hbs = require('hbs');

const app = express()  //store our express application and it doesn't take any argument 

//define path for Express config
const publicDirectory = path.join(__dirname,'../public')
const viewDirectory = path.join(__dirname,"../templates/views")
const partialDirectory = path.join(__dirname,"../templates/partials")

//Setup handlebars for engine and views location
app.set("view engine", 'hbs') //instead of looking fir html fies in public express will look for hbs files in a folder name view(It is a default folder set by express)
app.set("views",viewDirectory) //this allow us to change default folder view to templates
hbs.registerPartials(partialDirectory)


//Setup static directory 
app.use(express.static(publicDirectory))  //express.static us folder ka path leta ha jis ko hmm serve karna chatay ha


//index.html file ko delete karna hu ga isko chalana ka lia warna conflict aye ga
app.get('',(req, res)=>{
    //req shows the request send by the user and res is the response send by the server
    res.render('index',{
        title:"Index",
        name:"Abbas"
    })
})

app.get("/about",(req,res)=>{
    //req shows the request send by the user and res is the response send by the server
    res.render('about',{
        title:"About",
        name:"Abbas"
    })
})

app.get("/weather",(req,res)=>{
    //req shows the request send by the user and res is the response send by the server
    res.render('weather',{
        title:"Weather",
        name:"Abbas"
    })
})

app.get("/help",(req,res)=>{
    //req shows the request send by the user and res is the response send by the server
    res.render("help",{
        title:"help",
        name:"Abbas"
    })
})

app.listen(3000,()=>{console.log("Server Running on port 3000")} )

