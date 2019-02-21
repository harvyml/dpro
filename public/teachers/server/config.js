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

//GET THE CURRENT DATE
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
dd = '0'+dd
}

if(mm<10) {
mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;

//references
var ref = firebase.database().ref("la-presentacion-el-paraiso/");
var teacherCode = ""

  // funciones del index
  // Login
const auth = firebase.auth();
