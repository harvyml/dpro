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
// Get a database reference to our posts
//var admin = admin.database().ref();


// Attach an asynchronous callback to read the data at our posts reference
/*exports.helloWorld = functions.https.onRequest((request, response) => {
  admin.child("users").once("value", function(snapshot) {
    snapshot.forEach(snapChild => {
      const email = snapChild.val()
      response.send(email)
    })
  }, function (errorObject) {
    response.send("The read failed: " + errorObject.code)
  })
})*/
 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

var ref = firebase.database().ref("la-presentacion-el-paraiso/")
 exports.sendEmails = functions.https.onRequest((request, response) => {
  var emails = []
  response.send("Hello from Firebase!")

  ref.child('users').once("value")
  .then(snap => {
    snap.forEach(childSnap => {
      const email = childSnap.val().info.email
      emails.push(email)
    })
    return emails
  }).then(emails => {
    console.log("sending Messages to: " + emails.join())
    // using SendGrid's Node.js Library
  	// https://github.com/sendgrid/sendgrid-nodejs
  	var sendgrid = require("sendgrid")("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");
  	var emailSendgrid = new sendgrid.Email();
  	emailSendgrid.addTo(emails);
  	emailSendgrid.setFrom("harvyestebanml@gmail.com");
  	emailSendgrid.setSubject("Sending with SendGrid is Fun");
  	emailSendgrid.setHtml("and easy to do anywhere, even with Node.js");
  })
  return sendgrid.send(emailSendgrid).then(() => {
    response.send("Emails Sent")
  }).catch(error => {
    response.send(error)
  })


})


exports.setGrades = functions.https.onRequest((request, response) => {
firebase.database().ref("la-presentacion-el-paraiso/users/").on("value", snap => {
  var data = snap.val()
  var keys = Object.keys(data)
  keys.forEach(k => {
    var subjects = Object.keys(data[k].grades)
    subjects.forEach(s => {
      var des = data[k].grades[s]
      var grades = Object.keys(data[k].grades[s])
      grades.forEach(g => {
        var score = data[k].grades[s][g]
        if(score == null || score == "NaN" || score == "0" || score == "1" || score == "2" || score == "" || score == true || score < 2 || score > 5){
        var g = g;
        var entireData = {
          [g]: 2
        }
        firebase.database().ref(`la-presentacion-el-paraiso/users/${k}/grades/${s}/`).update(entireData).then(() => response.send("datos cambiados:"))
      }else if(isNaN(score) == true){
        var g = g;
        var entireData = {
          [g]: 2
        }
        firebase.database().ref(`la-presentacion-el-paraiso/users/${k}/grades/${s}/`).update(entireData).then((entireData) => {
          console.log(entireData)
          response.send("datos cambiados:")
        })
      }
    
      })
      
    })
  })
})

})

exports.gradesRef = functions.https.onRequest((request, response) => {
  var valuesGrades = {}
  var matlength = {}
  firebase.database().ref("la-presentacion-el-paraiso/users/").on("value", snap => {
    var valuesName = ""
    var data = snap.val()
    var keys = Object.keys(data)
    keys.forEach((k, m) => {
      var name = data[k].info.name
      var subjects = Object.keys(data[k].grades)
      valuesGrades[k] = {subjects: {

      }}
      subjects.forEach((s, i) => {
        var grades = Object.keys(data[k].grades[s])
        valuesName = name
        
        var ks = Object.keys(data[k].grades[s])
        ks.forEach((ls, l) => {
          console.log(ls)
          valuesGrades[k].subjects[i] = {[s]: {
            [l]: ls
          }}
          var mat = Object.keys(valuesGrades[k].subjects).length
          console.log(mat)
          matlength[k] = mat
          var o = Math.max(matlength)
        })
      })
    })
    response.send(matlength)    
  })

})

var registrationTokens = {};
exports.getTokens = functions.https.onRequest((req, res) => {
  console.log("hola")
  firebase.database().ref("la-presentacion-el-paraiso/users").orderByChild("info/token").once("value", snap => {
    let keys = Object.keys(snap.val())
    for(var k in snap.val()){
      if(snap.val()[k].info.token != undefined){
        registrationTokens[k] = `${snap.val()[k].info.token}`
      }      
    }
    //let tok = (snap.val()[k]) ? snap.val()[k].info.token : ""
    //res.send(t(registrationTokens, tok))
    //registrationTokens = (snap.val()[k] == true) ? snap.val()[k].info.token : k
    setTimeout(function(){
      res.send(registerToFirebase(registrationTokens))
    }, 2000)
  })
})

function registerToFirebase(registrationTokens){
  return firebase.database().ref("la-presentacion-el-paraiso/badGrades").update({
    tokens: registrationTokens
  })
  .then(() => console.log(registrationTokens))
  .catch((e) => console.log(e.message))
}
