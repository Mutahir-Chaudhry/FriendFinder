//GET route to display all possible friends
app.get("/api/friends", function(req,res){
    return res.json(friends);
})

//POST route to handle incoming survey results and compatibility logic
app.post("/api/friends", function(req,res){
   
})