const friends = require("../data/friends");

function compare(user, friend){
    const difference = 0;
    for (var i = 0; i < user.length; i++){
        difference += Math.abs(user[i] - friend[i]);
    }
    return difference;
}

module.exports = function (app) {
 //GET route to display all possible friends
app.get("/api/friends", function(req,res){
    return res.json(friends);
}); 
//POST route to handle incoming survey results and compatibility logic
app.post("/api/friends", function(req,res){

    const newFriend = req.body;
    const bestScore = 101;
    const match;

    for(var i = 0; i < friends.length; i++){
        var score = compare(newFriend.scores, friends[i].scores);
        if(score < bestScore){
            match = friends[i];
            bestScore = score;
        }
    }
   
});

};


