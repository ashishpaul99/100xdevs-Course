const express=require("express");
const app=express();
const cors=require("cors");
const port=3000;

app.use(cors());

app.get("/sum",function(req,res){
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);


    // Check if 'a' and 'b' are valid numbers
    if(!isNaN(a) && !isNaN(b)){
        const sum=a+b;
        res.send(sum.toString());
    }else{
        res.status(400).send("Invalid input");
    }
})
 app.listen(port ,function(){
    console.log("listening on port "+port)
 })


