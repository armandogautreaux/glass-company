//Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var path = require('path');

// Use Express
const app = express();

//PORT
var PORT = process.env.PORT || 8080;

//Set Static Folder to use other local resources
app.use('/public', express.static(path.join(__dirname, 'public')));

//Call bodyParser to handle incomming data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Require routes
require('./routing/htmlRoutes')(app);

//Start Server
app.listen(PORT, () => {
  console.log('App listenin on PORT ' + PORT);
});
