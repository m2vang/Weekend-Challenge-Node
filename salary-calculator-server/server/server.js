//requie express - give us a function
let express = require('express');

//Create an instance of express by calling the function returned above - gives us an object
let app = express();
let port = 5000;

//Express static file serving - public is the folder name
app.use(express.static('server/public'));
// app.use(bodyParser.urlencoded({ extended: true }));

//Start up the server
app.listen(port, function(){
    console.log('Listening on port:', port);
});