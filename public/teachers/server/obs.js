auth.onAuthStateChanged(user => {
  if(user){
    update()
    var p = ""
    pickSubject(user.uid, "#choose-subject", "")
    $(".set-conditions").on("click", function(){
      let period = $("#period").val()
      let group = $("#group").val()
      $("#obs").html("")
      bringObservations(materia, period, group)
    })
    ref.child(`users/`).on("value", snap => {
      $(".students-data").html("")
      var primaryKey = Object.keys(snap.val())
      var primaryData = snap.val()
      console.log(primaryKey)
    })
  }else{
    console.log("not logged in")
  }
})

function bringObservations(materia, period, group){
  $("#obs").html("")
  if (period == 1){
    p = "observations_1"
  }else if(period == 2){
    p = "observations_2"
  }else if(period == 3){
    p = "observations_3"
  }

  var refToGroup = ref.child(`users/`).orderByChild("info/group").equalTo(group).once("value")
    refToGroup.then(snap => {
      let snapKey = snap.key
      let data = snap.val()
      let dataKeys = Object.keys(data)
      dataKeys.forEach(k => {
        if(data[k][p]){
          let obs_keys = Object.keys(data[k][p])
          obs_keys.forEach(ko => {
            if(materia == data[k][p][ko].subject){
              let obs_html = `
                           <tr>
                             <td>${data[k].info.name}</td>
                             <td>${data[k][p][ko].teacherName}</td>
                             <td>${data[k][p][ko].date}</td>
                             <td>${data[k][p][ko].subject}</td>
                             <td>${data[k][p][ko].content}</td>
                             <td><button id="${ko}-observation" href="${ko}" index-database="${k}" class="btn hoverable remove-obs">Eliminar</button></td>
                           </tr>
                         `
              $("#obs").append(obs_html) 
             }             
             $(".remove-obs").on("click", function(s){
              let userKey = $(this).attr("index-database")
              let obsRef = p
              let obsKey = $(this).attr("href")
              removeObservations(userKey, obsRef, obsKey)
             })
          })
        }
        /*obs_keys.forEach(ko => {
          if(materia == data[p][ko].subject){
            let obs_html = `
                         <tr>
                           <td>${data.info.name}</td>
                           <td>${data[p][ko].teacherName}</td>
                           <td>${data[p][ko].date}</td>
                           <td>${data[p][ko].subject}</td>
                           <td>${data[p][ko].content}</td>
                           <td><button id="${ko}-observation" href="${ko}" index-database="${snap.key}" class="btn hoverable remove-obs">Eliminar</button></td>
                         </tr>
                       `
            $("#obs").append(obs_html) 
           }
        })*/
      })
  })
}


function removeObservations(userKey, obsRef, obsKey){  
  ref.child(`users/${userKey}/${obsRef}/${obsKey}`).set({})
}

function update(){
  ref.child("users").on("value", snap => {
    $("#obs").html("")
    setTimeout(function(){
      bringObservations(materia, period, group.value)
    }, 1000)
  })
}