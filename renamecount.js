const express = require("express");

const app = express();
let requestCount =0


app.use(function(req,res,next){
    requestCount = requestCount+1;
    next();

})


app.get('/user' , function (req,res){
    res.status(200).json({name:"john"});
});

app.post('/user', function(req,res){
    res.status(200).json({msg:"created dummy user"});
});

app.get('/requestCount', function(req,res){
    res.status(200).json({requestCount});
});

app.listen(3000);
module.exports = app;


 