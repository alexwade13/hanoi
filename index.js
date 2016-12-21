const express = require("express");

const cors = require("cors");

const port = process.env.PORT || 8888; 

// Initialize the server 
const app = express();
// Add middleware 
app.use(cors());
app.use(bodyParser.json());

// Set static file location
app.use(express.static(__dirname + '/build'))



app.get('/', function(request, response) {
  response.render('index');
});