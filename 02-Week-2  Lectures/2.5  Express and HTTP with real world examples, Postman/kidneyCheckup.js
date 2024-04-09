// Kidney check up project using express.js
const express = require("express");
const app = express();
const port = 3000;

var user = [{ name: "John", kidneys: [{ healthy: true }, { healthy: false },{healthy:false}] }];


app.get("/kidneyCount", function (req, res) {
    //   kidneys health
    const johnKidney = user[0].kidneys;
    console.log(johnKidney);

    // kidneys count
    // number of kidney's
    const noOfKidneys = johnKidney.length;

    // no of healthy kidneys
    let noOfHealthyKidney = 0;
    for (let i = 0; i < johnKidney.length; i++) {
        if (johnKidney[i].healthy == true) {
            noOfHealthyKidney++;
        }
    }

    // no of unhealthy kidneys
    const noOfUnhealthyKidney = noOfKidneys - noOfHealthyKidney;
    res.send("No Of Kidneys= " + noOfKidneys+" "+ "No Of Healthy Kidneys= " + noOfHealthyKidney+" "+"No Of Unhealthy Kidneys= " + noOfUnhealthyKidney);
});


// 2. Posting/adding a new kidney
// adding healthy kidney
// Middleware to parse JSON input
app.use(express.json());
app.post("/addingKidney",function(req,res){
     const isHealthy =req.body.healthy;
     user[0].kidneys.push({healthy:isHealthy}) ;
     res.json({msg:"kidney was replaced"});
     
})


// 3. Replacing kidney
// ->making unhealthy kidney healthy
app.put("/healthyKidney",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy==false){
            user[0].kidneys[i].healthy=true;
        }
    }
    res.json({msg:"your kidneys are healthy"});
})

app.listen(port, function () {
    console.log(`listening on ${port}`);
})


// removing unhealthy kidneys
app.delete("/removeKidney",function(req,res){

    const newKidneys=[];
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
             newKidneys.push({healthy:true})
        }
    }

    user[0].kidneys=newKidneys;
    res.json({msg:"kidneys removed"});
          
});





