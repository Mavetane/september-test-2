# september-test-2


## Server Side

### What I did..

I created a model for capturing user's personal details with it's various fields. Then created a route which will register the user details to my database. For database purposes I used MongoDB local I created a table called "Customers" and a collection called "customers".
For company names I hardcoded the details in an array of objects and created a route to get them on the front end

### Starting the database
Install MongoDB locally on your machine

>mongo (this command starts the mongoDB locally)
>db.use collectionName (switches to the collection you wish to use)

### Running the server

> npm install
> nodemon server.js (for starting the server)


## Client Side 

I created a form component to capture the customers details, within the form component I made  post request to my api to save the customers details. I made a get request on my app.js to get the list of company names from my backend.

### Starting the Client Side 

> npm install
> npm start