const express=require("express");
const app=express();
const cors=require("cors");
const port=3000;

app.use(cors()); // // Enable CORS to allow frontend to make requests

app.get("/sum",function(req,res){
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);

    // check wheather they are numbers are not
    if(!isNaN(a) && !isNaN(b)){
        let sum=a+b;
        res.send(sum.toString());//send the sum as a string
    }else{
        res.status(400).send("Invalid input")
    }
})

app.listen(port,function(){
    console.log("listening on port "+port);
})
