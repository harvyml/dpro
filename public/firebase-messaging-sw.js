importScripts("https://www.gstatic.com/firebasejs/4.0.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.0.0/firebase-messaging.js")
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDm3WvCAVAtWHrQYzG3mNOei5ffzk2SGhg",
    authDomain: "dpro-343c0.firebaseapp.com",
    databaseURL: "https://dpro-343c0.firebaseio.com",
    projectId: "dpro-343c0",
    storageBucket: "dpro-343c0.appspot.com",
    messagingSenderId: "622288756150"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging()

  messaging.setBackgroundMessageHandler(function(payload){
    let data = {
      title: "Dpro",
      options: {
        body: "Su hijo está perdiendo varias materias"
      }
    }
    
    return self.registration.showNotification(data.title, data.options)
  })

  //messaging.usePublicVapidKey("BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu");