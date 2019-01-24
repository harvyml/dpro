const functions = require('firebase-functions');

 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
	// using SendGrid's Node.js Library
	// https://github.com/sendgrid/sendgrid-nodejs
	var sendgrid = require("sendgrid")("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");
	var email = new sendgrid.Email();

	email.addTo("harvyestebanml@gmail.com");
	email.setFrom("harvyestebanml@gmail.com");
	email.setSubject("Sending with SendGrid is Fun");
	email.setHtml("and easy to do anywhere, even with Node.js");

	sendgrid.send(email);
 });
