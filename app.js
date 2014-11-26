var express = require('express')
var app = express();




var home_handler = function(request, response) {
	response.send('Hello World!')
};

var call_handler = function(request, response) {};

var newrecord_handler = function(request, response) {};

var records_handler = function(request, response) {};





app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', home_handler);
app.get('/call', call_handler);
app.get('/newrecord', newrecord_handler);
app.get('/records', records_handler);




app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
