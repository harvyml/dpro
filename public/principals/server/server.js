
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

  function autocomplete(path, ref, requirement, place){
  	var Objnames = {data: {}}
  	firebase.database().ref(`la-presentacion-el-paraiso/${path}`).on("value", snap => {
  		var keys = Object.keys(snap.val())
  		keys.forEach(k => {
  			var r = snap.val()[k][ref][requirement]
  			Objnames.data[r] = null
  		})
  		console.log(Objnames)
  	})
  	setTimeout(function(){
  		$(`${place}`).autocomplete({
  		    data: Objnames.data,
  		    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
  		    onAutocomplete: function(val) {
  		      // Callback function when value is autcompleted.
  		    },
  		    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  		  });
  	console.log(Objnames.data)
  	}, 3000)
  }


  function autocompleteSubjects(path, ref, place){
  	var Objnames = {data: {}}
  	firebase.database().ref(`la-presentacion-el-paraiso/${path}`).on("value", snap => {
  		var keys = Object.keys(snap.val())
  		keys.forEach(k => {
  			var r = snap.val()[k][ref]
        var keysr = Object.keys(r)
        keysr.forEach(kr => {
          Objnames.data[kr] = null
        })
  		})
  		console.log(Objnames)
  	})
  	setTimeout(function(){
  		$(`${place}`).autocomplete({
  		    data: Objnames.data,
  		    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
  		    onAutocomplete: function(val) {
  		      // Callback function when value is autcompleted.
  		    },
  		    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  		  });
  	console.log(Objnames.data)
  	}, 3000)
  }

  function autocompleteSubjectsChips(path, ref, place){
    var Objnames = {data: {}}
    firebase.database().ref(`la-presentacion-el-paraiso/${path}`).on("value", snap => {
      var keys = Object.keys(snap.val())
      keys.forEach(k => {
        var r = snap.val()[k][ref]
        var keysr = Object.keys(r)
        keysr.forEach(kr => {
          Objnames.data[kr] = null
        })
      })
      console.log(Objnames)
    })
    setTimeout(function(){
      $(`${place}`).material_chip({
        autocompleteOptions: {
          data: Objnames.data,
          limit: Infinity,
          minLength: 1
        }
      });
    console.log(Objnames.data)
    }, 3000)
  }

  function autocompleteSubjectsForDropdown(path, ref, place){
  	//var Objnames = {data: {}}
  	firebase.database().ref(`la-presentacion-el-paraiso/${path}`).on("value", snap => {
  		var keys = Object.keys(snap.val())
  		keys.forEach(k => {
  			var r = snap.val()[k][ref]
        var keysr = Object.keys(r)
        keysr.forEach(kr => {
          //Objnames.data[kr] = null
          $(`${place}`).append(`<li class="active"><span><input type="checkbox"><label></label>Option 2</span></li>`)

        })
  		})
  		console.log(Objnames)
  	})
  }
