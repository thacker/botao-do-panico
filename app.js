var express = require('express')
var xml = require('xml');

var app = express();


var TWILIO_SID = process.env.TWILIO_SID || "ACbb1221dfc3d35152d52fc2bee02a0eed";
var TWILIO_TOKEN = process.env.TWILIO_TOKEN || "0b76060b98b0cc92d4497ba193136933";

var twilio = require('twilio')(TWILIO_SID, TWILIO_TOKEN);




var ONGs = {
	"a": {

	},
	"b": {

	}
}



var home_handler = function(request, response) {
	response.send('Hello World!');
	//TODO: enviar homepage do site

};

var call_handler = function(request, response) {

	var url = require('url');
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	//console.log("url_parts", url_parts);
	console.log("NEW CALL", query);



	//response.send("call");
	var x = xml([{ 
			Response: [{
				Record: [{
					_attr: {
						playBeep: "true",
						action: "http://notapme.herokuapp.com/newrecord",
						method: "get",
						finishOnKey: "5",
						timeout: 3600
					}}
				]

			}]
		}], { declaration: { encoding: 'UTF-8' }})



	//console.log("Caller", query.Caller);
	//console.log("CallerCity", query.CallerCity);
	//console.log("RecordingUrl", query.RecordingUrl);
	//console.log("Duration", query.Duration);



	twilio.sendMessage({

		to: '+5511983370955', // Any number Twilio can deliver to
		from: '+14703308407', // A number you bought from Twilio and can use for outbound communication
		body:  JSON.stringify(url_parts.query) //query.Caller + " " + query.CallerCity // body of the SMS message

	}, function(err, responseData) { //this function is executed when a response is received from Twilio
		console.log("SMS RESULT", err, responseData);

		if (!err) { // "err" is an error received during the request, if any

			// "responseData" is a JavaScript object containing data received from Twilio.
			// A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
			// http://www.twilio.com/docs/api/rest/sending-sms#example-1

			console.log(responseData.from); // outputs "+14506667788"
			console.log(responseData.body); // outputs "word to your mother."

		}

	});


	response.send(x);


	/*

	<?xml version="1.0" encoding="UTF-8" ?>
	<Response>
		<Record timeout="10" playBeep="true" action="http://notapme.herokuapp.com/newrecord" />
		<Say voice="alice" language="pt-BR" loop="2">Bom dia.</Say>
	</Response>
	*/


};

var newrecord_handler = function(request, response) {
	var url = require('url');
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	console.log("url_parts", url_parts);
	console.log("query", query);

	response.send("new_record");


	//TODO: verificar telefone no banco
	//TODO: se o telefone nao for encontrato desligar

	//TODO: send SMS para a ong com os dados
	//TODO; retornar gravacao



};

var records_handler = function(request, response) {

	var url = require('url');
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	console.log("url_parts", url_parts);
	console.log("query", query);


	console.log("Caller", query.Caller);
	console.log("CallerCity", query.CallerCity);
	console.log("RecordingUrl", query.RecordingUrl);
	console.log("Duration", query.Duration);

};



app.set('port', (process.env.PORT || 5004));
app.use(express.static(__dirname + '/public'));

app.get('/', home_handler);
app.get('/records', records_handler);

app.get('/call', call_handler);
app.get('/newrecord', newrecord_handler);

//app.post('/call', call_handler);
//app.post('/newrecord', newrecord_handler);




app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})







	// twilio.sendMessage({

	// 	to: '+5511983370955', // Any number Twilio can deliver to
	// 	from: '+14703308407', // A number you bought from Twilio and can use for outbound communication
	// 	body:  "teste" //query.Caller + " " + query.CallerCity // body of the SMS message

	// }, function(err, responseData) { //this function is executed when a response is received from Twilio
	// 	console.log("SMS RESULT", err, responseData);

	// 	if (!err) { // "err" is an error received during the request, if any

	// 		// "responseData" is a JavaScript object containing data received from Twilio.
	// 		// A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
	// 		// http://www.twilio.com/docs/api/rest/sending-sms#example-1

	// 		console.log(responseData.from); // outputs "+14506667788"
	// 		console.log(responseData.body); // outputs "word to your mother."

	// 	}

	// });



