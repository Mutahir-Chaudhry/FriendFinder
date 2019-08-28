//Adding GET route for survey page
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"survey.html"));
})

//Default catch-all route to home page
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
})