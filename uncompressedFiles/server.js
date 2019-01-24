
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

//Global variables

//--------------------------------
var auth = firebase.auth()
$("#submit-login").on("click", function(){
  var email = $("#email-log").val()
  var pass = $("#pass-log").val()
  var code = $("#code-log").val()
  auth.signInWithEmailAndPassword(email, pass).then(function(){
    console.log("Sesión Iniciada")
  }).catch(err => console.log(`Error: ${err.message}`))
})


auth.onAuthStateChanged(user => {
  localStorage.code = localStorage.getItem("code")
  console.log(localStorage.code)
  var code = $("#code-log").val()
  if(user){
    $(".to-hide").hide(300)
    console.log("Sesión Iniciada")
    firebase.database().ref("la-presentacion-el-paraiso/users").on("value", snap => {
      snap.forEach(snapChild => {
        var value = snapChild.val().grades
        if(snapChild.val().info.code == code || snapChild.val().info.code == localStorage.code){
          $(".name-modal").text(snapChild.val().info.name)
          $(".code-modal").text(snapChild.val().info.code)

          //Set a cookie for the student code
          localStorage.setItem("code", snapChild.val().info.code);

          //console.log(codeStored)
          Materialize.toast(`Sesion iniciada. Acudiente de ${snapChild.val().info.name} - ${snapChild.val().info.group}`, 5000,  "green")
          var keys = Object.keys(snapChild.val().grades)
          keys.forEach(function(element){
            // Grades Beginning
            var nota_1_1 = parseFloat(value[element].nupp)
            var nota_2_1 = parseFloat(value[element].ndpp)
            var nota_3_1 = parseFloat(value[element].ntpp)
            var nota_4_1 = parseFloat(value[element].ncpp)
            var nota_5_1 = parseFloat(value[element].ncipp)
            var nota_6_1 = parseFloat(value[element].nsepp)
            var nota_7_1 = parseFloat(value[element].nsipp)
            var nota_8_1 = parseFloat(value[element].nopp)
            var nota_auto_1 = parseFloat(value[element].auto_1)
            var nota_coe_1 = parseFloat(value[element].coe_1)
            //var obs_1 = value[element].observation_1.observation
            //var obs_date_1 = value[element].observation_1.date
            //var obs_teacher_1 = value[element].observation_1.teacher
            var profit_compromiso_en_clase_1 = (nota_1_1 + nota_2_1) / 2 * 15 / 100;
            var profit_evaluacion_final_1 = (nota_3_1) /1 * 20 / 100;
            var profit_evaluaciones_1 = (nota_4_1 + nota_5_1) /2 * 30 / 100;
            var profit_trabajo_personal_1 = (nota_6_1 + nota_7_1 + nota_8_1 )/3 * 30 / 100;
            var profit_auto_coe_1 = (nota_auto_1 + nota_coe_1) / 2 * 5 / 100;

            console.log(profit_compromiso_en_clase_1, profit_evaluacion_final_1, profit_evaluaciones_1, profit_trabajo_personal_1)
            var profit_1 = profit_compromiso_en_clase_1 + profit_evaluacion_final_1 + profit_evaluaciones_1 + profit_trabajo_personal_1 + profit_auto_coe_1;

            //Second period
            var nota_1_2 = parseFloat(value[element].nusp)
            var nota_2_2 = parseFloat(value[element].ndsp)
            var nota_3_2 = parseFloat(value[element].ntsp)
            var nota_4_2 = parseFloat(value[element].ncsp)
            var nota_5_2 = parseFloat(value[element].ncisp)
            var nota_6_2 = parseFloat(value[element].nsesp)
            var nota_7_2 = parseFloat(value[element].nsisp)
            var nota_8_2 = parseFloat(value[element].nosp)
            var nota_auto_2 = parseFloat(value[element].auto_2)
            var nota_coe_2 = parseFloat(value[element].auto_2)
            //var obs_2 = value[element].observation_2.observation
            //var obs_date_2 = value[element].observation_2.date
            //var obs_teacher_2 = value[element].observation_2.teacher
            var profit_compromiso_en_clase_2 = (nota_1_2 + nota_2_2) / 2 * 15 / 100;
            var profit_evaluacion_final_2 = (nota_3_2) /1 * 20 / 100;
            var profit_evaluaciones_2 = (nota_4_2 + nota_5_2) /2 * 30 / 100;
            var profit_trabajo_personal_2 = (nota_6_2 + nota_7_2 + nota_8_2 )/3 * 30 / 100;
            var profit_auto_coe_2 = (nota_auto_2 + nota_coe_2) / 2 *5 / 100;

            console.log(profit_compromiso_en_clase_2, profit_evaluacion_final_2, profit_evaluaciones_2, profit_trabajo_personal_2)
            var profit_2 = profit_compromiso_en_clase_2 + profit_evaluacion_final_2 + profit_evaluaciones_2 + profit_trabajo_personal_2 + profit_auto_coe_2;

            //Third Period
            var nota_1_3 = parseFloat(value[element].nutp)
            var nota_2_3 = parseFloat(value[element].ndtp)
            var nota_3_3 = parseFloat(value[element].nttp)
            var nota_4_3 = parseFloat(value[element].nctp)
            var nota_5_3 = parseFloat(value[element].ncitp)
            var nota_6_3 = parseFloat(value[element].nsetp)
            var nota_7_3 = parseFloat(value[element].nsitp)
            var nota_8_3 = parseFloat(value[element].notp)
            var nota_auto_3 = parseFloat(value[element].auto_3)
            var nota_coe_3 = parseFloat(value[element].coe_3)
            //var obs_3 = value[element].observation_3.observation
            //var obs_date_3 = value[element].observation_3.date
            //var obs_teacher_3 = value[element].observation_3.teacher
            var profit_compromiso_en_clase_3 = (nota_1_3 + nota_2_3) / 2 * 15 / 100;
            var profit_evaluacion_final_3 = (nota_3_3) /1 * 20 / 100;
            var profit_evaluaciones_3 = (nota_4_3 + nota_5_3) /2 * 30 / 100;
            var profit_trabajo_personal_3 = (nota_6_3 + nota_7_3 + nota_8_3)/3 * 30 / 100;
            var profit_auto_coe_3 = (nota_auto_3 + nota_coe_3) / 2 *5 / 100;

            console.log(profit_compromiso_en_clase_3, profit_evaluacion_final_3, profit_evaluaciones_3, profit_trabajo_personal_3)
            var profit_3 = profit_compromiso_en_clase_3 + profit_evaluacion_final_3 + profit_evaluaciones_3 + profit_trabajo_personal_3 + profit_auto_coe_3;
            //-----------------------------------------------------------------------------
            var grades_1 = `

                            <tr>
                                <td>${element}</td>
                                <td>${nota_1_1} - ${nota_2_1}</td>
                                <td>${nota_3_1}</td>
                                <td>${nota_4_1} - ${nota_5_1} - ${nota_6_1}</td>
                                <td>${nota_7_1} - ${nota_8_1}</td>
                                <td>${nota_auto_1} - ${nota_coe_1}</td>
                                <td>${profit_1}</td>
                            </tr>

                            `
          var grades_2 = `
                            <tr>
                                <td>${element}</td>
                                <td>${nota_1_2} - ${nota_2_2}</td>
                                <td>${nota_3_2}</td>
                                <td>${nota_4_2} - ${nota_5_2} - ${nota_6_2}</td>
                                <td>${nota_7_2} - ${nota_8_2}</td>
                                <td>${nota_auto_2} - ${nota_coe_2}</td>
                                <td>${profit_2}</td>
                            </tr>
                           `
          var grades_3 = `
                            <tr>
                                <td>${element}</td>
                                <td>${nota_1_3} - ${nota_2_3}</td>
                                <td>${nota_3_3}</td>
                                <td>${nota_4_3} - ${nota_5_3} - ${nota_6_3}</td>
                                <td>${nota_7_3} - ${nota_8_3}</td>
                                <td>${nota_auto_3} - ${nota_coe_3}</td>
                                <td>${profit_3}</td>
                            </tr>
                           `

          $(".table-notas-1").append(grades_1)
          $(".table-notas-2").append(grades_2)
          $(".table-notas-3").append(grades_3)

          })
        }
      })
    })
  }else{
    console.log("Sesión no iniciada")
  }
})


$(".btn-logout").click(function(){
  auth.signOut().then(function(){
    console.log("Logout")
    window.location.href = "index.html"
    localStorage.removeItem("code")
  })
})
}())
