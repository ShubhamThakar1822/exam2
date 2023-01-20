var express = require ("express");
var app =express ();
app.get("/",function(req,resp){
    resp.sendFile("index.html",{root:__dirname});
})
app.listen(3535);
console.log("Server is running......");
