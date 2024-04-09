// 3.1 | Middlewares, Authentication, global catches and Zod  Date: 27/03/24 Time:12:53 PM

const { code } = require("statuses")

// 1. Learn by using hospital example
// ->check image 3.1
// ->Before you reach the doctors
// 1. your adhar/insurance info is taken. only if you have insurance you proceed.
// 2. blood test is done ->if it is fine go to BP check.
// 3. finally patient goes to doctor. there will be pre-check happens before enter into 
//    doctors cabin.
// ->if pre checks are not good then patient are not allowed.

// ->check image 3.2
// ->Imagine scenario where single doctor is working.
// ->doctors do single task. he can handle one patient at a time(single threaded).

// 1.1 Equivalent code
// eg-1:
const express = require("express");
const app = express();

// any request comes regarding check up results it returns checkup info
app.get("/health-checkup", function (req, res) {
    res.send("yout heart is healthy");
})

// =>How do do you?
// 1. Auth checks? (Does this user have funds to visit the doctor).
// 2. ensure input by the user is valid(BP/blood test).


// 1.2 Use case of middlewares
// ->In real World the uses case of middlewares is usually to pre-check.
// ->pre-checks are two types in real world
// 1.Authentication
// eg-1: is he login into linkedin(person username and password).

// 2.Input validation
// ->What ever inputs backend expects form client.
// eg-1:
// ->have they given right credentials.
// ->these pre-checks happens before actual logic execute.


// 1.3 Middlewares are needed for doing this pre-checks.
// ->Check image 3.4
// ->before meeting the doctor all pre-checks should be happen simillarly before executing 
//   logic in code authentication and input validation is important.

// ->before we proceed, lets add constraints to out route
// 1. User needs to send a kidneyID as a Query parameter which should be a number from 
//    1-2(humans only has 2 Kidneys).
//    eg:http://localhost:3000/health-checkup?n=3000
// ->Whenever user hits health-checkup end point user should give query parameter called kidney
//   ID which is either 1 or 2.

// eg-1:
const express = require("express");
const app = express();
const port = 3000;
app.get("/health-checkup", function (req, res) {
    res.send("yout heart is healthy");
})
app.listen(port, function () {
    console.log("Listening on port 3000");
})

// eg-2: getting query parametres and authenticating.
// ->Ugly  way of doing authentication and password.
const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", function (req, res) {
    // do health checkup
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    // Authentication
    if (!(username === "ashishpaul99" && password === "123")) {

        res.status(403).json({ msg: "user doesn't exist" });
        return;
    }
    // input validation
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({ msg: "worng input" });
        return;
    }

    res.send("your heart is healthy");
});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})


// code explaination
// ->while sending request send username and password in headers post in postman for 
//   authentication.
// ->send express query parameters in url.
// eg: http://localhost:3000/health-checkup?kidneyId=2

// eg-3: Introduce another route that does kidney replacement. inputs need to be same.
// ->Ugly solution -Create a new route,repeat code.
// ->it's an ugly solution.
// ->refer image 3.6 and 3.7


const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", function (req, res) {
    // do health checkup
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    // Authentication
    if (!(username === "ashishpaul99" && password === "123")) {

        res.status(403).json({ msg: "user doesn't exist" });
        return;
    }
    // input validation
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({ msg: "worng input" });
        return;
    }
    res.send("your heart is healthy");
});

// replacing kidneys
app.put("/replacekidney", function (req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    // Authentication
     if (!(username === "ashishpaul99" && password === "123")) {
        res.status(403).json({ msg: "user doesn't exist" });
        return;
    }
    // input validation
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({ msg: "worng input" });
        return;
    }
    // replacement logic
    res.json({msg:"kidney replaced"});

});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})

// eg-4:
// Slightly better solution
// ->refer image 3.7
// ->creating wrapper function.

const express = require("express");
const app = express();
const port = 3000;

function credentialValidator(username,password){
    // Authentication
    if (!(username === "ashishpaul99" && password === "123")) {
        return false;

    }
    return true;
}

function kidneyValidator(kidneyId){
    // input validation
    if (kidneyId != 1 && kidneyId != 2) {
        return false;
    }
    return true;
}

app.get("/health-checkup", function (req, res) {
    // do health checkup
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    if(credentialValidator()){
        res.json({msg:"user doesn't exist"})
     }

     if(kidneyValidator()){
      res.json({mag:"Invalid inputs"})
     }
    res.send("your heart is healthy");
});

// // replacing kidneys
app.put("/replace-kidney", function (req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
   if(credentialValidator()){
      res.json({msg:"user doesn't exist"})
   }
   if(kidneyValidator()){
    res.json({mag:"Invalid inputs"})
   }
});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})


//=>Middlewares is solution for above case use case for avoiding ugly solution like repeating 
//  code.



//1.5 mutlple call back fcuntions can be given to express methods.
// eg-1:
const express=require("express");
const app=express();
app.get("/cb",cb1,cb2,function(req,res){

});

// eg-2:
const express = require("express");
const app = express();
const port = 3000;
app.get("/health", function (req, res) {
    console.log("hi from req1");
}, function (req, res) {
    console.log("hi from req2");
});

app.listen(port, function () {
    console.log(`listening to port ${port}`);
});

// Output:
// listening to port 3000
// hi from req1
// hi from req1

//->code explaination:
// 1. control reaches to next function after the route.


// 1.6 next function in express.js middleware
// To define a middleware function in Express, you use the use() method on the Express 
// application object. Each middleware function takes three arguments: req, res, and next.

// Middleware function
app.use((req, res, next) => {
    console.log('This is a middleware function');
    next(); // Call the next middleware function in the stack
  });

//1.6.1 next is function itself which is called when things are fine.
// eg-1:
// ->when next function is called it will route the request to neighbour function.
// ->next function can also have next function.


const express = require("express");
const app = express();
const port = 3000;
app.get("/", function (req, res, next) {
    console.log("hi from req1");
    next();
}, function (req, res, next) {
    console.log("hi from req2");
});

app.listen(port, function () {
    console.log(`listening to port ${port}`);
});


// 1.7 Middlewares is solution for this use case.
// =>Real Optimum solution in express and generally In other languages for this use case is 
//   middlewares.
// ->Image s8
// ->In this case route only worry about app logic it will not bother about authentication and 
//   input validation.
// ->How do you define middleware?
// ->How does middleware do early return.
// ->How middleware send control to next middleware.

// -> Middleware are function they take req,res and next functions as argument.
// ->middlewares are between route and final handlers which do some checks.


// eg-1:
const express = require("express");
const app = express();
const port = 3000;

// Defining middleware(just another function fn)
function userMiddleware(res, req, next) {

    if (username != "ashishpaul99" && password != "123") {
        res.status(403).json({ msg: "User doesn't exist" });
    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({ msg: "Incorrect inputs" })
    } else {
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    console.log("your are healthy");
});

app.get("/kdiney-chekup", userMiddleware, kidneyMiddleware, function (req, res) {
    console.log("your kidney is healthy");
})


app.get("/heart-check", userMiddleware, kidneyMiddleware, function (req, res) {
    console.log("your heart is healthy");
})

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})


// code explaination:
// 1.after sending request by using url the control reaches to next function of the route.

// 2. userMiddleware is next function of route.
// ->username and password is extracted using uesrMiddleware function.
// ->if username and password is not correct it responds with status code and "Incorrect inputs".
// -> if inputs are correct next() function is called.

// 3. then control reaches to kidneyMiddleware function.
// ->if username and password is not correct it responds with status code and response.
// -> if inputs are correct next() function is called.

// 4. then control reaches to the app function handler.


// =>Doubts
// 1. rate limitter using middeleware in express.
// ->which allows particular number of requests.
// 2. body parser is userMiddleware.
// 3. defining routes we have to give order so that functions called based on that order.
// ->doing somethings before the logic is called.
// 4. Rate limiter and Calculate requests are two famous middlewares.
// eg-1:
const express=require("express");
const app=express();
const port=3000;

let noOfRequests=0;
// calculate request middleware
function calculateRequest(req,res,next){
   noOfRequests++;
   console.log(noOfRequests);
   next();
}
app.get("/noOfRequests",calculateRequest,function(req,res){
    res.send("request recieved");

} );

app.listen(port,function(){
    console.log(`listening on port ${port}`);
})

// output:
// listening on port 3000
// 1
// 2
// 3


// 2. How to use middlewares without repeating code for every route.
