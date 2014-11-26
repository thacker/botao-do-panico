var express = require('express')
var xml = require('xml');

var app = express();



var home_handler = function(request, response) {
	response.send('Hello World!');
};

var call_handler = function(request, response) {
	//response.send("call");
	var x = xml([{ 
			Response: [{
				Say: [{
					_attr: {
						voice: "alice",
						language: "pt-BR",
						loop: "2"
					}},
					"Bom dia"
				]
			}]
		}], { declaration: { encoding: 'UTF-8' }})

	response.send(x);

/*

<?xml version="1.0" encoding="UTF-8" ?>
<Response>
     <Say voice="alice" language="pt-BR" loop="2">Bom dia.</Say>
</Response>
*/


};

var newrecord_handler = function(request, response) {
	response.send("new_record");

};

var records_handler = function(request, response) {



	//response.send("records_list");
	var name_of_restaurants = ["a", "b"];

	response.json({'restaurants' : name_of_restaurants });

};


console.log(process.env.PORT);


app.set('port', (process.env.PORT || 5004));
app.use(express.static(__dirname + '/public'));

app.get('/', home_handler);
app.get('/records', records_handler);


app.get('/call', call_handler);
app.post('/call', call_handler);
app.post('/newrecord', newrecord_handler);




app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
