$(function(){
  //bringSubjects()
  autocomplete("users", "info", "name", "#students")//Reference, second Reference, requirement, where to find in the dom
  lastSubjectChecked()
  $("#add-course").click(function(e){
    e.preventDefault()
    registerCourse()
    $(this).remove()
    $("#add-director").show(300)
  })
  $("#add-director").click(function(e){
    e.preventDefault()
    registerDirectorCourse()
    $(this).remove()
    $("#add-subjects").show(300)
  })
  $("#add-subjects").click(function(e){
    e.preventDefault()
    registerSubjectsForCourse()
    //$(this).hide(300)
    //$("#add-students").show(300)
    retrieveSubjects()
  })
})

var group = ""

function registerCourse(){
  group = $(".form-courses #group").val()
  firebase.database().ref(`la-presentacion-el-paraiso/groups/${group}`).set({
    true: true
  }).then(result => {
    Materialize.toast("Curso Registrado", 3000, "green")
    $("#group").attr("disabled", "")
    $(".info-director-hidden").show(300)
  })
}
function registerDirectorCourse(){
    let director = $("#director").val()
    firebase.database().ref(`la-presentacion-el-paraiso/groups/${group}`).update({
      director,
      group
    }).then(result => {
      Materialize.toast(`Director: ${director}`, 3000, "green")
      $("#director").attr("disabled", "")
      $(".info-subjects-hidden").show(300)
    })
}

function registerSubjectsForCourse(){
    $(".subjects-data").show(300)
    let subjects = $("#subjects").val()
    firebase.database().ref(`la-presentacion-el-paraiso/groups/${group}/subjects`).update({
        [subjects]: subjects
    }).then(result => {
      $("#director").attr("disabled", "")
      $("#subjects").show(300)
    })
}


// function bringSubjects(){
//     var subject = ""
//     firebase.database().ref("la-presentacion-el-paraiso/subjects").on("value", snap => {
//       let keys = Object.keys(snap.val())
//       let data = snap.val()
//       keys.forEach(k => {
//         subject = data[k]
//         $("#teacher-subject .dropdown-content").append(`<li class="${subject}"><span>${subject}</span></li>`)
//         console.log(subject)
//       })
//     })
// }

function autocompleteStudents(){
	var Objnames = {data: {}}
	firebase.database().ref("la-presentacion-el-paraiso/users").on("value", snap => {
		var keys = Object.keys(snap.val())
		keys.forEach(k => {
			var name = snap.val()[k].info.name
			Objnames.data[name] = null
		})
		console.log(Objnames)
	})
	setTimeout(function(){
		$('input.autocomplete').autocomplete({
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


function retrieveSubjects(){
  $(".subjects-list").html("")
  firebase.database().ref(`la-presentacion-el-paraiso/groups/${group}/subjects`).on("value", snap => {
    var data = snap.val()
    var keys = Object.keys(data)
    keys.forEach(k => {
      let subjects = data[k]
      $(".subjects-list").append(`<a href="#!" class="collection-item">${subjects}</a>`)
    })
  })
}

function lastSubjectChecked(){
  $("#check-last-subject").on("click", function(){
    if($(this).attr("checked") == "checked"){
      $(this).removeAttr("checked")
      console.log($(this))
      $("#subjects").removeAttr("disabled")
      $("#add-subjects").removeClass("disabled")
      $("#add-subjects").attr("type", "submit")
    }else{
      registerStudents()
      $(".subjects-data").hide(300)
      $("#add-subjects").attr("type", "button")
      $("#add-subjects").addClass("disabled")
      $("#subjects").attr("disabled", "")
      $(this).attr("checked", "checked")
      console.log($(this))
    }
  })
}

function registerStudents(){
  $(".info-students-hidden").show(300)
  $("#add-students").show(300)
  $("#add-students").click(function(e){
    e.preventDefault()
    registerStudents()
    var student = $("#students").val()
    firebase.database().ref(`la-presentacion-el-paraiso/users`).on("value", snap => {
      let data = snap.val()
      let keys = Object.keys(data)
      //console.log(data)
      for(let i = 0; i < keys.length; i++){
        let k = keys[i]
        let verifyName = data[k].info.name
        let code = data[k].info.code
        let uid = data[k]
        if(verifyName == student){
          console.log(verifyName)
          firebase.database().ref(`la-presentacion-el-paraiso/groups/${group}/students/${k}`).set({
            name: student,
            code: code
          }).then(result => {
            console.log("Alright")
            retrieveStudents()
          }).catch(e => console.log(e.message))
          break
        }else{
          console.log("not equal")
        }
      }
    })
  })
}

function retrieveStudents(){
  $(".students-data").show(300)
  $(".students-list").html("")
  firebase.database().ref(`la-presentacion-el-paraiso/groups/${group}/students`).on("value", snap => {
    var data = snap.val()
    var keys = Object.keys(data)
    keys.forEach(k => {
      let students = data[k].name
      let code = data[k].code
      $(".students-list").append(`<a href="#!" class="collection-item">${students}: ${code}</a>`)
    })
  })
}
