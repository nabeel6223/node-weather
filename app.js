const express= require("express");
const path = require("path");
const app = express();
const forecast=require("./src/util-forecast.js")

const publicDirPath= path.join(__dirname, "/public");
app.use(express.static(publicDirPath));
 app.set("view engine","hbs");

 app.get("",(req,res)=>{
   res.render("index");
})
app.get("/weathery",(req,res)=>{
    res.render("weathery");
})
app.get("/colorgame",(req,res)=>{
    res.render("colorgame");
})
app.get("/todo",(req,res)=>{
    res.render("todos");
})
app.get("/portfolio",(req,res)=>{
    res.render("portfolio");
})
app.get("/about",(req,res)=>{

    res.send({
        name:"ssd",
        age:"sdsd"
    })
})
app.get("/weather",(req,res)=>{
    if(!(req.query.address))
    {
        return res.send({
            error:"Please enter valid address"
        })
    }
    else
        forecast.weather(req.query.address,(error,data,location)=>{
        if(!error){
            res.send({
                data:data,
                location: location,
                address: req.query.address  
            })
        }
        else
          res.send({
          error:error
        })
        });
})
app.get("*",(req,res)=>{
    res.render("error");
})

app.listen(3000,()=>{
    console.log("Starting the server on port 3000...")
})