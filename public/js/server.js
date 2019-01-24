$(function(){
	var config = {
    apiKey: "AIzaSyDm3WvCAVAtWHrQYzG3mNOei5ffzk2SGhg",
    authDomain: "dpro-343c0.firebaseapp.com",
    databaseURL: "https://dpro-343c0.firebaseio.com",
    projectId: "dpro-343c0",
    storageBucket: "dpro-343c0.appspot.com",
    messagingSenderId: "622288756150"
  };
  firebase.initializeApp(config);

  $(".btn-login").click(function(){
  	var email = $(".email").val()
  	var pass = $(".pass").val()
		//var code = $("#code").val()
  	console.log(email)
  	firebase.auth().signInWithEmailAndPassword(email, pass)
  })

  firebase.auth().onAuthStateChanged(user => {
    if(user){
      validate(user.uid)
    }else{
      console.log("Not Logged In")
    }
  })

function validate(uid){
  let ref = firebase.database().ref("la-presentacion-el-paraiso/users/" + uid + "/info").once("value")
  .then(snap => {
    let rol = snap.val().rol
    if(rol == "student"){
      window.location.href = "students/index.html"
    }else if(rol == "teacher"){
      window.location.href = "teachers/index.html"
    }else if(rol == "admin"){
      window.location.href = "principals/index.html"
    }else if(rol == "parent"){
      window.location.href = "parents/index.html"
      localStorage.setItem("code", childSnap.val().info.code);
    }
  })
}

/*
if(emailGotten == email){
            if(rolGotten == "student"){
              window.location.href = "students/index.html"
            }else if(rolGotten == "teacher"){
              window.location.href = "teachers/index.html"
            }else if(rolGotten == "admin"){
              window.location.href = "principals/index.html"
            }else if(rolGotten == "parent"){
              window.location.href = "parents/index.html"
              localStorage.setItem("code", childSnap.val().info.code);
            }
          }
*/
})
