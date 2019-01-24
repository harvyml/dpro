
$(function(){
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

}())

var multi = 0;
// ----------------------------------- register -------------------------------------

// references already declared
var databaseRef = firebase.database().ref("la-presentacion-el-paraiso")
var ref = firebase.database().ref("la-presentacion-el-paraiso/users/")
// register

    /*var groupNumber = txtGroup.lenght;
    if(groupNumber == 4){
      //console.log("Es de Secundaria")
    }else if(groupNumber < 4){
      //console.log("Es de Primaria")
    }else{
      //console.log("Nothing")
    }*/




   /* refRegister.set(information).then(function(){
      //console.log("Alright")
    })*/



// ---------------------------------------- login --------------------------------------
// references
const auth = firebase.auth();

var config = ""

$("#btnLogin").on("click", e =>{

  const email = $("#input-email-1").val();
  const pass = $("#input-pass-1").val();
  const keyname = $("#input-code-1").val();


  var promise = auth.signInWithEmailAndPassword(email, pass).then(() => {
    firebase.database().ref("la-presentacion-el-paraiso/config").once("value", snap => {
      config = snap.val().studentsView
    })
  })
  //promise.catch( e => console.log("there´s an error"))

  e.preventDefault()
})


// -------------------------- Logged ------------------------------------

auth.onAuthStateChanged( firebaseUser => {
  if(firebaseUser){
    firebase.database().ref("la-presentacion-el-paraiso/config").once("value", snap => {
      var config_1 = snap.val().studentsView
      if(config_1 == "active"){
        const userId = firebaseUser.uid
        var refInfo = firebase.database().ref("la-presentacion-el-paraiso/users/" + userId + "/info");
        var email = firebaseUser.email
        //console.log(email)
          refInfo.on("value", function(snapshot){
          console.log(snapshot.val().user + "<br />" +
                      snapshot.val().name + "<br />" +
                      snapshot.val().code + "<br />" +
                      snapshot.val().pass + "<br />" +
                      snapshot.val().group + "<br />" +
                      snapshot.val().phone)
          //Fill html gaps that require information
          $(".user").text(snapshot.val().user)
          $(".email").text(snapshot.val().email)
          $(".name").text(snapshot.val().name)
          //=======================================
        //borrar info de los containers
        $(".student-info").show(300)
        $(".student-info-con").html(
          `
            <div class="card horizontal">
              <div class="card-stacked">
                <div class="card-content">
                  <h5 id="student-name">${snapshot.val().user}</h5>
                  <ul class="ul-student-info">
                    <li>${snapshot.val().name}<li>
                    <li>${snapshot.val().phoneNumber}</li>
                    <li>${snapshot.val().code}</li>
                    <li>${snapshot.val().group}</li>
                  </ul>
                </div>
                <div class="card-action">
                  <a href="#">Publica</a>
                </div>
              </div>
            </div>
          `
          )

        // cambios en modales / changes in modals
              $(".name-modal").text(snapshot.val().user);
              $(".email-modal").text(snapshot.val().email)
          })

        $(".to-hide").hide(700)
        $(".hidden").show(700)
        $("#menu-icon").hide()
        $(".nav-header ul li a").hide()
        $(".nav-header ul li.email a").show()
        $(".nav-header ul li.email a").text(email)


    //-------------------------------------------------------------
        const keyname = $("#input-code-1").val();
        var refGrade = firebase.database().ref("la-presentacion-el-paraiso").child("users").orderByKey().equalTo(userId)
        $(".table-notas-1").html("")
        $(".table-notas-2").html("")
        $(".table-notas-3").html("")
        refGrade.on("value", data => {

          //console.log(data.val())
          var data = data.val()
          var keys = Object.keys(data)

          //console.log(keys)

          for (var i = 0; i < keys.length; i++){
            var k = keys[i]
            var group = data[k].info.group;
            var groupLength = group.length;
            const level = data[k].info.level;
            var rol = data[k].info.rol;
            if(rol != "student"){
              window.location.href = "../"
            }
            // mostrar correctamente las notas a cada estudiante
              //Mostrar notas desde Decimo hasta Once
              //console.log("Secundaria")
              var allsubjects = Object.keys(data[k].grades);
              allsubjects.forEach(function(element){
                //console.log(element)
                var multi = isNaN(data[k].grades[element].ave_1) == false ? parseFloat(data[k].grades[element].ave_1) : 2
                $(".ul-stats-info").append(`
                    <tr>
                      <td>${element}</td>
                      <td>Profesor</td>
                      <td>${multi}</td>
                    </tr>
                  `)
                console.log(multi)


                //TODO: make the profitValues for each school and change the percentage values below
                //---------------------------
                var nota_1_1 = isNaN(data[k].grades[element].nupp) == false ? parseFloat(data[k].grades[element].nupp) : 2
                var nota_2_1 = isNaN(data[k].grades[element].ndpp) == false ? parseFloat(data[k].grades[element].ndpp) : 2
                var nota_3_1 = isNaN(data[k].grades[element].ntpp) == false ? parseFloat(data[k].grades[element].ntpp) : 2
                var nota_4_1 = isNaN(data[k].grades[element].ncpp) == false ? parseFloat(data[k].grades[element].ncpp) : 2
                var nota_5_1 = isNaN(data[k].grades[element].ncipp) == false ? parseFloat(data[k].grades[element].ncipp) : 2
                var nota_6_1 = isNaN(data[k].grades[element].nsepp) == false ? parseFloat(data[k].grades[element].nsepp) : 2
                var nota_7_1 = isNaN(data[k].grades[element].nsipp) == false ? parseFloat(data[k].grades[element].nsipp) : 2
                var nota_8_1 = isNaN(data[k].grades[element].nopp) == false ? parseFloat(data[k].grades[element].nopp) : 2
                var nota_auto_1 = isNaN(data[k].grades[element].auto_1) == false ? parseFloat(data[k].grades[element].auto_1) : 2
                var nota_coe_1 = isNaN(data[k].grades[element].coe_1) == false ? parseFloat(data[k].grades[element].coe_1) : 2
                //var obs_1 = data[k].grades[element].observation_1.observation
                //var obs_date_1 = data[k].grades[element].observation_1.date
                //var obs_teacher_1 = data[k].grades[element].observation_1.teacher
                var profit_compromiso_en_clase_1 = (nota_1_1 + nota_2_1) / 2 * 15 / 100;
                var profit_evaluacion_final_1 = (nota_3_1) /1 * 20 / 100;
                var profit_evaluaciones_1 = (nota_4_1 + nota_5_1) /2 * 30 / 100;
                var profit_trabajo_personal_1 = (nota_6_1 + nota_7_1 + nota_8_1 )/3 * 30 / 100;
                var profit_auto_coe_1 = (nota_auto_1 + nota_coe_1) / 2 * 5 / 100;

                //console.log(profit_compromiso_en_clase_1, profit_evaluacion_final_1, profit_evaluaciones_1, profit_trabajo_personal_1)
                //var profit_1 = parseFloat(profit_compromiso_en_clase_1 + profit_evaluacion_final_1 + profit_evaluaciones_1 + profit_trabajo_personal_1 + profit_auto_coe_1).toFixed(2)
                var profit_1 = isNaN(data[k].grades[element].ave_1) == false ? parseFloat(data[k].grades[element].ave_1) : 2
                //Second period
                var nota_1_2 = isNaN(data[k].grades[element].nusp) == false ? parseFloat(data[k].grades[element].nusp) : 2
                var nota_2_2 = isNaN(data[k].grades[element].ndsp) == false ? parseFloat(data[k].grades[element].ndsp) : 2
                var nota_3_2 = isNaN(data[k].grades[element].ntsp) == false ? parseFloat(data[k].grades[element].ntsp) : 2
                var nota_4_2 = isNaN(data[k].grades[element].ncsp) == false ? parseFloat(data[k].grades[element].ncsp) : 2
                var nota_5_2 = isNaN(data[k].grades[element].ncisp) == false ? parseFloat(data[k].grades[element].ncisp) : 2
                var nota_6_2 = isNaN(data[k].grades[element].nsesp) == false ? parseFloat(data[k].grades[element].nsesp) : 2
                var nota_7_2 = isNaN(data[k].grades[element].nsisp) == false ? parseFloat(data[k].grades[element].nsisp) : 2
                var nota_8_2 = isNaN(data[k].grades[element].nosp) == false ? parseFloat(data[k].grades[element].nosp) : 2
                var nota_auto_2 = isNaN(data[k].grades[element].auto_2) == false ? parseFloat(data[k].grades[element].auto_2) : 2
                var nota_coe_2 = isNaN(data[k].grades[element].coe_2) == false ? parseFloat(data[k].grades[element].coe_2) : 2
                //var obs_2 = data[k].grades[element].observation_2.observation
                //var obs_date_2 = data[k].grades[element].observation_2.date
                //var obs_teacher_2 = data[k].grades[element].observation_2.teacher
                var profit_compromiso_en_clase_2 = (nota_1_2 + nota_2_2) / 2 * 15 / 100;
                var profit_evaluacion_final_2 = (nota_3_2) /1 * 20 / 100;
                var profit_evaluaciones_2 = (nota_4_2 + nota_5_2) /2 * 30 / 100;
                var profit_trabajo_personal_2 = (nota_6_2 + nota_7_2 + nota_8_2 )/3 * 30 / 100;
                var profit_auto_coe_2 = (nota_auto_2 + nota_coe_2) / 2 *5 / 100;

                //console.log(profit_compromiso_en_clase_2, profit_evaluacion_final_2, profit_evaluaciones_2, profit_trabajo_personal_2)
                var profit_2 = parseFloat(profit_compromiso_en_clase_2 + profit_evaluacion_final_2 + profit_evaluaciones_2 + profit_trabajo_personal_2 + profit_auto_coe_2).toFixed(2)

                //Third Period
                var nota_1_3 = isNaN(data[k].grades[element].nutp) == false ? parseFloat(data[k].grades[element].nutp) : 2
                var nota_2_3 = isNaN(data[k].grades[element].ndtp) == false ? parseFloat(data[k].grades[element].ndtp) : 2
                var nota_3_3 = isNaN(data[k].grades[element].nttp) == false ? parseFloat(data[k].grades[element].nttp) : 2
                var nota_4_3 = isNaN(data[k].grades[element].nctp) == false ? parseFloat(data[k].grades[element].nctp) : 2
                var nota_5_3 = isNaN(data[k].grades[element].ncitp) == false ? parseFloat(data[k].grades[element].ncitp) : 2
                var nota_6_3 = isNaN(data[k].grades[element].nsetp) == false ? parseFloat(data[k].grades[element].nsetp) : 2
                var nota_7_3 = isNaN(data[k].grades[element].nsitp) == false ? parseFloat(data[k].grades[element].nsitp) : 2
                var nota_8_3 = isNaN(data[k].grades[element].notp) == false ? parseFloat(data[k].grades[element].notp) : 2
                var nota_auto_3 = isNaN(data[k].grades[element].auto_3) == false ? parseFloat(data[k].grades[element].auto_3) : 2
                var nota_coe_3 = isNaN(data[k].grades[element].coe_3) == false ? parseFloat(data[k].grades[element].coe_3) : 2
                //var obs_3 = data[k].grades[element].observation_3.observation
                //var obs_date_3 = data[k].grades[element].observation_3.date
                //var obs_teacher_3 = data[k].grades[element].observation_3.teacher
                var profit_compromiso_en_clase_3 = (nota_1_3 + nota_2_3) / 2 * 15 / 100;
                var profit_evaluacion_final_3 = (nota_3_3) /1 * 20 / 100;
                var profit_evaluaciones_3 = (nota_4_3 + nota_5_3) /2 * 30 / 100;
                var profit_trabajo_personal_3 = (nota_6_3 + nota_7_3 + nota_8_3)/3 * 30 / 100;
                var profit_auto_coe_3 = (nota_auto_3 + nota_coe_3) / 2 *5 / 100;

                //console.log(profit_compromiso_en_clase_3, profit_evaluacion_final_3, profit_evaluaciones_3, profit_trabajo_personal_3)
                var profit_3 = parseFloat(profit_compromiso_en_clase_3 + profit_evaluacion_final_3 + profit_evaluaciones_3 + profit_trabajo_personal_3 + profit_auto_coe_3).toFixed(2)
                //-----------------------------------------------------------------------------
                var grades_1 = `

                                <tr>
                                    <td>${element}</td>
                                    <td>${nota_1_1} | ${nota_2_1}</td>
                                    <td>${nota_3_1}</td>
                                    <td>${nota_4_1} | ${nota_5_1} | ${nota_6_1}</td>
                                    <td>${nota_7_1} | ${nota_8_1}</td>
                                    <td>${nota_auto_1} | ${nota_coe_1}</td>
                                    <td>${profit_1}</td>
                                </tr>

                                `
              var grades_2 = `
                                <tr>
                                    <td>${element}</td>
                                    <td>${nota_1_2} | ${nota_2_2}</td>
                                    <td>${nota_3_2}</td>
                                    <td>${nota_4_2} | ${nota_5_2} | ${nota_6_2}</td>
                                    <td>${nota_7_2} | ${nota_8_2}</td>
                                    <td>${nota_auto_2} | ${nota_coe_2}</td>
                                    <td>${profit_2}</td>
                                </tr>
                               `
              var grades_3 = `
                                <tr>
                                    <td>${element}</td>
                                    <td>${nota_1_3} | ${nota_2_3}</td>
                                    <td>${nota_3_3}</td>
                                    <td>${nota_4_3} | ${nota_5_3} | ${nota_6_3}</td>
                                    <td>${nota_7_3} | ${nota_8_3}</td>
                                    <td>${nota_auto_3} | ${nota_coe_3}</td>
                                    <td>${profit_3}</td>
                                </tr>
                               `

              $(".table-notas-1").append(grades_1)
              $(".table-notas-2").append(grades_2)
              $(".table-notas-3").append(grades_3)
              //--------------------Likes-------------------------
              })
              bringObservations(data[k].observations_1, ".collection-observations-1", $(".collection-observations-1").html(""))
              bringObservations(data[k].observations_2, ".collection-observations-2", $(".collection-observations-2").html(""))
              bringObservations(data[k].observations_3, ".collection-observations-3", $(".collection-observations-3").html(""))
          }
        })

        $(".hidden").show(300)
        //console.log("logged in");
      }else{
        Materialize.toast("La Plataforma Fue Deshabilitada", 3000, "red")
      }
    })
  }else{
    //console.log("not logged in");
    $(".hidden").hide()
  }
})

function bringObservations(obs_path, DOM_path, otherFunction){
  let observations = Object.keys(obs_path)
  //console.log(observations_3)
  observations.forEach((obs_k) => {
    //Observaciones
    //console.log(obs_3)
    let observation = `
                            <div class="content-in-observation">
                              <strong class="blue-text">${obs_path[obs_k].subject}: </strong>
                              <span class="blue-text">${obs_path[obs_k].date}</span>
                              <strong>${obs_path[obs_k].teacherName}: </strong>
                              ${obs_path[obs_k].content}
                            </div>
                        `
      $(DOM_path).append(observation)
      otherFunction
  })
}

// Functions to tell the user to reload data
ref.on("child_changed",  function(snapshot) {
  //console.log(snapshot.val())
  Materialize.toast('Los Profesores están agregando notas', 4000, 'light-blue lighten-3')
  $("body").html("")
  $("tbody").html("")
})
// ----------------------- Logout --------------------------------------

$(".li-logout").on("click", e =>{
  auth.signOut();
  window.location.href = "index.html";
})
//Functions
/*function hidePrevElements(){
  ref.child("grades").on("value", e => {
  var trLength = $("#notas-1 tr").length
  //console.log(trLength)
      for(i = 0; i < trLength; i++){
        $("#notas-1 tr").hide()
      }
  })
}*/
