const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require('./controllers/burgers_controller.js');
  
// Set "Public" as static so can use CSS/jQuery with Handlebar files
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Sets Handlebars to serve HTML
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Gives server access to routes created
app.use(routes);

// Starts the server to listen for requests
app.listen(PORT, function() {
  console.log('Server listening on PORT ' + PORT)
})