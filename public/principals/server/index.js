firebase.auth().onAuthStateChanged(user => {
  if(user){
    var currentUserUid = user.uid
		firebase.database().ref(`la-presentacion-el-paraiso/users/${currentUserUid}`).on("value", snapshot => {
			if(snapshot.val().info.rol != "admin"){
				window.location.href = "../"
			}
		})
    firebase.database().ref("la-presentacion-el-paraiso").child("config").on("value", snap => {
      console.log(`Estudiantes: ${snap.val().studentsView} \n Profesores: ${snap.val().teachersView}`)
      if(snap.val().studentsView == "active"){
        $("#switch-for-students").attr("checked", "checked")
      }else{
        $("#switch-for-students").removeAttr("checked")
      }

      if(snap.val().teachersView == "active"){
        $("#switch-for-teachers").attr("checked", "checked")
      }else{
        $("#switch-for-teachers").removeAttr("checked")
      }
    })
    //Students
    $('.switch-edit-config:first').click(function() {
      let switchEdit = $(this);
      if ($(this).attr('checked')) {
          $(this).removeAttr('checked');
          switchEdit.css("display", "none")
          firebase.database().ref("la-presentacion-el-paraiso/config").update({
            studentsView: "unactive"
          }).then(setTimeout(function(){ $(".switch").css("display", "block") }, 3000))

      } else {
          $(this).attr('checked', "checked");
          switchEdit.css("display", "none")
          firebase.database().ref("la-presentacion-el-paraiso/config").update({
            studentsView: "active"
          }).then(setTimeout(function(){ $(".switch").css("display", "block") }, 3000))
      }
    })
    //Teachers
    $('.switch-edit-config:last').click(function() {
      let switchEdit = $(this);
      if ($(this).attr('checked')) {
          $(this).removeAttr('checked');
          switchEdit.css("display", "none")
          firebase.database().ref("la-presentacion-el-paraiso/config").update({
            teachersView: "unactive"
          }).then(setTimeout(function(){ $(".switch").css("display", "block") }, 3000))

      } else {
          switchEdit.attr('checked', "checked");
          switchEdit.css("display", "none")
          firebase.database().ref("la-presentacion-el-paraiso/config").update({
            teachersView: "active"
          }).then(setTimeout(function(){ $(".switch").css("display", "block") }, 3000))
      }
    })
  }else{
    Materialize.toast("not Logged In", 3000, "red", function(){window.location.href = "../index.html"})
  }
})
