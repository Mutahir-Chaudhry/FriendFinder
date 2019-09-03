# FriendFinder

Welcome to FriendFinder! FriendFinder is a one of a kind browser run node application that helps match our user with a friend by taking a 10-question survey.

Some specific technologies used in this application include AJAX, Bootstrap, JQuery, path, express, and modals. You can also follow this link to the deployed version on Heroku https://calm-atoll-11078.herokuapp.com/ 

From a high-level perspective, this application takes in user input via a form, adds their statistics to an existing array of friends, and compares their statistics to find they're closest match within the existing array of friends. 

To get into more detail, we take a look at some of the specifics. For one, the construction of the app began with the creation of our initial files: server.js package.json and README.md. Along with our initial folders: app, with data, public, images, and routing folders within.

When the application is run, the homepage presents the user with a brief explanation of the application, and provides them a link to the survey page (See Figure 1).

![Figure 1](https://github.com/Mutahir-Chaudhry/FriendFinder/blob/master/app/images/FriendFinder%20-%20Figure%201.png)

When the user clicks the link to the survey, the survey page has a brief explanation of how it works, along side an inspirational playful GIF. Below the instructions, right above the form there are two links: "Friend API" and "Go back to the home page!". (See figure 2).

![Figure 2](https://github.com/Mutahir-Chaudhry/FriendFinder/blob/master/app/images/FriendFinder%20-%20Figure%202.png)

If the user clicks the Friends API link, the user is redirected to the Friends API where they can see the array of friends objects, each with their name, link to photo, and score listed with their respective values. Notice, At this point user (Jack) is not part of the array (See Figure 3). That is because the user has yet to complete the survey. 

![Figure 3](https://github.com/Mutahir-Chaudhry/FriendFinder/blob/master/app/images/FriendFinder%20-%20Figure%203.png)

If the user clicks the "Go back to the home page!" link, they are taken back to the home page. If the user attempts to submit the form without filling out all the required fields, they are alerted they have not answered everything required (See Figure 4).

![Figure 4](https://github.com/Mutahir-Chaudhry/FriendFinder/blob/master/app/images/FriendFinder%20-%20Figure%204.png)

Once the user has filled out all the required fields, chosen a response to each survey question, and hit the submit button, a modal presents the user with the name (and ideally picture, still a work in progress) of their match (See Figure 5).

![Figure 5](https://github.com/Mutahir-Chaudhry/FriendFinder/blob/master/app/images/FriendFinder%20-%20Figure%205.png)

If the user now clicks the Friends API link, we can see the highlighted new object is our user, added as a new friend to the array, with their respective statistics (See Figure 6). They will now be able to be used in later survey submissions for further comparison and friend match-ups. 

![Figure 6](https://github.com/Mutahir-Chaudhry/FriendFinder/blob/master/app/images/FriendFinder%20-%20Figure%206.png)

I, Mutahir Chaudhry, created and maintain this FriendFinder application, and can be contacted in you have any questions or need points of clarification.