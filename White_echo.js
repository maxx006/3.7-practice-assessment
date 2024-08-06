// JavaScript Document

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
			"First name": "firstname",
			"Last name": lastname,
			"Total cost": addCost,
			"Cellphone": cellPhone,
			"Pick up time": pickUpTime,
			"Sandwhich": checkedAddItems
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