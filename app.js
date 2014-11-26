var express = require('express')
var app = express();




var home_handler = function(request, response) {
	response.send('Hello World!');
};

var call_handler = function(request, response) {
	response.send("call");

};

var newrecord_handler = function(request, response) {
	response.send("new_record");

};

var records_handler = function(request, response) {
	response.send("records_list");

};


console.log(process.env.PORT);


app.set('port', (process.env.PORT || 5004));
app.use(express.static(__dirname + '/public'));

app.get('/', home_handler);
app.get('/records', records_handler);


app.post('/call', call_handler);
app.post('/newrecord', newrecord_handler);




app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
