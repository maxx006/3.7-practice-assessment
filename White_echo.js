// JavaScript Document
alert("js is attached");

function roomBooking(){
	alert("room booking function starting")
}





function pushData(){
	alert("at the push datafunction - nearly done!"); //output a message to the html a message confirming thier tickets
	console.log("myFunction fired.");
	console.log("Getting Values....");
	console.log("Initialing Airtable API....");
	var Airtable = require('airtable');
	var base = new Airtable({
		apiKey: 'patRhiXkKBtLE60lV.0fb98db4a9c62d1786c5853fe531aba01ed714ed7d7aa0618b96d267bb1d8466'
	}).base('appL4WJnXSRgqOvqD');
	console.log("Creating a record....");
	base('Reservation Echo').create({
			"First name": "firstname"
			
		}, {
			typecast: true
		}, //gets the API to convert types instead of parsing everything as strings.
		function(err, record) {
			if (err) {
				console.error(err);
				return;
			}
			alert("record created");
			console.log("Record created: " + record.getId());
		});
}


//Add event listeners to the room cards which will call up the room booking function
var tiles = document.getElementsByClassName('card');
for (var i = 0; i < tiles.length; i++) {
// if a tile is clicked, it calls the selectExercise function
tiles[i].addEventListener ('click', roomBooking);
}