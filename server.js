var express = require("express");
var path = require("path");
var app = express();
// var bodyParser = require("body-parser");

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));

// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);

app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function() {
  console.log("Portfolio on " + app.get('port'));
})
