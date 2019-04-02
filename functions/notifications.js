const functions = require('firebase-functions');
// Initialize the app with a service account, granting admin privileges
//const serviceAccount = require("./serviceAccountKey.json")
// Import Admin SDK
var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json")
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://dpro-343c0.firebaseio.com"
});


// These registration tokens come from the client FCM SDKs.
var ref = firebase.database().ref("la-presentacion-el-paraiso/")
 exports.sendEmails = functions.https.onRequest((request, response) => {
  var registrationTokens = [];
  ref.child("users/{pushId}/info/token").on("value", snap => {
    registrationTokens.concat(snap.val())
    console.log(registrationTokens)
  })
 })

// Unsubscribe the devices corresponding to the registration tokens from
// the topic.
firebase.messaging().unsubscribeFromTopic(registrationTokens, topic)
  .then(function(response) {
    // See the MessagingTopicManagementResponse reference documentation
    // for the contents of response.
    console.log('Successfully unsubscribed from topic:', response);
  })
  .catch(function(error) {
    console.log('Error unsubscribing from topic:', error);
  });
