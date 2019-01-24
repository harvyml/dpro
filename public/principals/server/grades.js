$(function(){
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

  // funciones del index
  // Login
  const auth = firebase.auth();


  $("#btnLogin").on("click", e =>{

    e.preventDefault()
    var email = $("#input-login-email").val();
    var code = $("#input-login-code").val();
    var pass = $("#input-login-pass").val();

    var promise = auth.signInWithEmailAndPassword(email, pass)
    promise.catch( e => console.log("There´s an error"))
  })

  // Cuando inicie sesión
  auth.onAuthStateChanged(firebaseUser =>{
     if(firebaseUser){
      const userId = firebaseUser.uid
      //Mostrar los datos de los estudiantes
      console.log(userId)
      // Mostrar contenedor de notas
      $(".con-rooms").show(500)
      // Esconder contenedor principal
      $(".container:first").hide(400);
      //Mostrar contenedor escondido
      $(".hidden").show(500);
      /*Inicio*/
      ref.child(`users/${userId}/`).once("value", snap => {
        var name = snap.val().info.name;
        $(".user-name").text(name)
      })


const room = $(".room a")
room.on("click", function(){
  // Some of these functions are on index.js file
  $(".con-rooms").hide(700)
  $(".description").show(300)
  $(".con-notas").show(300)
  var dismissToast = `<div class="center">
                        <button class="btn hoverable waves con-rooms-show">Salones</button>
                      </div>`
  $(".description .button-hide").html(dismissToast)
  $("table tbody").html("")//Limpiar informacion que se trajo antes 
  //Rooms
  var clickedLevel = $(this).text()
 ref.child("users/").once("value", gotData)
      function gotData(data){
          // Bring students data
          var users = data.val()
          var keys = Object.keys(users)
          console.log(keys)

          for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            var name = users[k].info.name;
            var code = users[k].info.code;
            var group = users[k].info.group;
            console.log(name, group, code)

            //Nav name
            //$(".user-name").text(name)
            //Catch the teacher´s subject
            var materia = data.val()[userId].info.subject
            //var ppm = Object.keys(users[k].grades[materia].ppm)

            // Bring all the marks to put them in the value
             if(clickedLevel == group){
              var primerPeriodoHtml = `
                                      <tr class="tr-grades-table">
                                        <td>${users[k].info.name}</td>
                                        <td style="display: none;">${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                            <span>${users[k].grades[materia].nupp}</span><br /><span>${users[k].grades[materia].ndpp}</span><br /><span>${users[k].grades[materia].ntpp}</span><br />
                                        </td>
                                        <td>${users[k].info.group}</td>
                                            <span>${users[k].grades[materia].ncpp}</span><br /><span>${users[k].grades[materia].ncipp}</span><br /><span>${users[k].grades[materia].nsepp}</span><br />
                                        </td>
                                        <td>${users[k].info.group}</td>
                                            <span> ${users[k].grades[materia].nsipp}</span><br /><span>${users[k].grades[materia].nopp}</span><br />
                                        </td>
                                        <td>${users[k].info.group}</td>
                                            <span>${users[k].grades[materia].auto_1}</span><br /><span>${users[k].grades[materia].coe_1}</span><br />
                                        </td>
                                        <td class="noExl"><button class="btn hoverable submit-first-period btn-submit-grades" href="${k}">Enviar</button></td>
                                      </tr>

                                      `
                                      //<input type="text" placeholder="Observacion" class="${k}-set-obs-1"/> For observations input
              $("#grades-first-period").append(primerPeriodoHtml)
              //--------------------------------------------------

              //--------------------------------------------------

              //Notas Segundo Periodo
               var segundoPeriodoHtml = `
                                      <tr class="tr-grades-table">
                                        <td>${users[k].info.name}</td>
                                        <td style="display: none;">${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                        <td class="noExl"><button class="btn hoverable submit-second-period btn-submit-grades" href="${k}">Enviar</button></td>
                                      </tr>
                                      `

              $("#grades-second-period").append(segundoPeriodoHtml)



             /* */

              //--------------------------------------------------

              // Notas Tercer Periodo
              var tercerPeriodoHtml = `
                                      <tr class="tr-grades-table">
                                        <td>${users[k].info.name}</td>
                                        <td style="display: none;">${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                        <td>${users[k].info.group}</td>
                                        <td class="noExl"><button class="btn hoverable submit-third-period btn-submit-grades" href="${k}">Enviar</button></td>
                                      </tr>
                                      `

              $("#grades-third-period").append(tercerPeriodoHtml)

           }// TODO: ALL THIS FUNCTION IS GONNA BE WRITTEN IN ECMA SCRIPT 6 WHEN THE PROJECT IS FINISHED

           $("input").addClass("set-mark-input")
           //----------------------------------

    $("tbody td:nth-child(3) input").focus(function(){
    var compromisoEnClase = `
                  
                    <img src="http://noticias.universia.com.ar/net/images/educacion/e/es/est/estrategias-promover-participacion-compromiso-estudiantes-clase-universia.jpg" alt="" width="100%">
                    <div class="text">
                      Mantener una actitud proactiva hacia los objetivos del programa, participando en las acciones previstas y dinamizando la relación con los estudiantes mentorizados.
                    </div>
                    <span class="blue-text text-lighten-4">Digita el numero de la nota y luego da click para registrarla</span><br />
                   
                  
                `
    $(".in-description").html(compromisoEnClase)
    $(".con-rooms-show").click(function(){
      $(".con-rooms").show(400)
    })
   })

   $("tbody td:nth-child(4) input").focus(function(){
    var evaluaciones = `
                  
                    <img src="http://www.ucamonline.net/sites/www.ucamonline.net/files/styles/foto_news/public/news/examenes-ucam.jpg" alt="" width="100%">
                    <div class="text">
                      Evaluaciones realizadas durante el periodo.
                    </div>
                    <span class="blue-text text-lighten-4">Digita el numero de la nota y luego da click para registrarla</span><br />
                   
                  
                `

    $(".in-description").html(evaluaciones)

    $(".con-rooms-show").click(function(){
      $(".con-rooms").show()
    })
   })

   $("tbody td:nth-child(5) input").focus(function(){
    var trabajoPersonal =  `
                  
                    <img src="https://cdn0.teach.com/content/e6beb0b4202e44b0a17c945b0f48ee91/matmed.jpg" alt="" width="100%">
                    <div class="text">
                     Trabajos, actividades, exposiciones realizadas durante la clase.
                    </div>
                    <span class="blue-text text-lighten-4">Digita el numero de la nota y luego da click para registrarla</span><br />
                   
                  
                `

    $(".in-description").html(trabajoPersonal)
    $(".con-rooms-show").click(function(){
      $(".con-rooms").show(400)
    })
   })

   $("tbody td:nth-child(6) input").focus(function(){
    var auto_coe =  `
                  
                    <img src="https://af-production.s3.amazonaws.com/photos/images/76458/original/books.jpg" alt="" width="100%">
                    <div class="text">
                      Autoevaluaciòn del estudiante y coevaluacion de un profesor o estudiante del mismo grado.
                    </div>
                    <span class="blue-text text-lighten-4">Digita el numero de la nota y luego da click para registrarla</span><br />
                   
                  
                `

    $(".in-description").html(auto_coe)
    $(".con-rooms-show").click(function(){
      $(".con-rooms").show(400)
    })
   })


    // It has to be repeated: DON`T EREASE
    $(".con-rooms-show").click(function(){
          $(".con-rooms").show(400)
    })
  }


          //register marks
          $(".submit-first-period").on("click", function(){
            var address = $(this).attr("href")
            console.log(address)
            var set_nupp = $(`.${address}-set-nupp`).val()
            var set_ndpp = $(`.${address}-set-ndpp`).val()
            var set_ntpp = $(`.${address}-set-ntpp`).val()
            var set_ncpp = $(`.${address}-set-ncpp`).val()
            var set_ncipp = $(`.${address}-set-ncipp`).val()
            var set_nsepp = $(`.${address}-set-nsepp`).val()
            var set_nsipp = $(`.${address}-set-nsipp`).val()
            var set_nopp = $(`.${address}-set-nopp`).val()
            var set_auto_1 = $(`.${address}-set-auto-1`).val()
            var set_coe_1 = $(`.${address}-set-coe-1`).val()
            var set_obs_1 = $(`.${address}-set-obs-1`).val()
            console.log(set_nupp)
              /*ref.child(`users/${address}/grades/${materia}/observation_1`).update({
                observation: set_obs_1,
                teacher: data.val()[userId].info.name,
                subject: materia,
                date: today
              })*/
              ref.child("users/" +address+ "/grades/" + materia + "/").update({
                nupp: set_nupp,
                ndpp: set_ndpp,
                ntpp: set_ntpp,
                ncpp: set_ncpp,
                ncipp: set_ncipp,
                nsepp: set_nsepp,
                nsipp: set_nsipp,
                nopp: set_nopp,
                auto_1: set_auto_1,
                coe_1: set_coe_1                
              }).then(result => Materialize.toast("Nota Agregada", 3000))
                .catch(err => Materialize.toast("Error", 3000))
          })

          $(".submit-second-period").on("click", function(){
            var address = $(this).attr("href")
            var set_nusp = $(`.${address}-set-nusp`).val()
            var set_ndsp = $(`.${address}-set-ndsp`).val()
            var set_ntsp = $(`.${address}-set-ntsp`).val()
            var set_ncsp = $(`.${address}-set-ncsp`).val()
            var set_ncisp = $(`.${address}-set-ncisp`).val()
            var set_nsesp = $(`.${address}-set-nsesp`).val()
            var set_nsisp = $(`.${address}-set-nsisp`).val()
            var set_nosp = $(`.${address}-set-nosp`).val()
            var set_auto_2 = $(`.${address}-set-auto-2`).val()
            var set_coe_2 = $(`.${address}-set-coe-2`).val()
            var set_obs_2 = $(`.${address}-set-obs-2`).val()
            console.log(address)
            /*ref.child(`users/${address}/grades/${materia}/observation_2`).update({
                observation: set_obs_2,
                teacher: data.val()[userId].info.name,
                subject: materia,
                date: today
              })*/
              ref.child("users/" +address+ "/grades/" + materia + "/").update({
                nusp: set_nusp,
                ndsp: set_ndsp,
                ntsp: set_ntsp,
                ncsp: set_ncsp,
                ncisp: set_ncisp,
                nsesp: set_nsesp,
                nsisp: set_nsisp,
                nosp: set_nosp,
                auto_2: set_auto_2,
                coe_2: set_coe_2
              }).then(result => Materialize.toast("Nota Agregada", 3000))
                .catch(err => Materialize.toast("Error", 3000))
          })

          $(".submit-third-period").on("click", function(){
            var address = $(this).attr("href")
            var set_nutp = $(`.${address}-set-nutp`).val()
            var set_ndtp = $(`.${address}-set-ndtp`).val()
            var set_nttp = $(`.${address}-set-nttp`).val()
            var set_nctp = $(`.${address}-set-nctp`).val()
            var set_ncitp = $(`.${address}-set-ncitp`).val()
            var set_nsetp = $(`.${address}-set-nsetp`).val()
            var set_nsitp = $(`.${address}-set-nsitp`).val()
            var set_notp = $(`.${address}-set-notp`).val()
            var set_auto_3 = $(`.${address}-set-auto-3`).val()
            var set_coe_3 = $(`.${address}-set-coe-3`).val()
            var set_obs_3 = $(`.${address}-set-obs-3`).val()
            console.log(address)
            /*ref.child(`users/${address}/grades/${materia}/observations_`).update({
                observation: set_obs_3,
                teacher: data.val()[userId].info.name,
                subject: materia,
                date: today
              })*/
              ref.child("users/" +address+ "/grades/" + materia + "/").update({
                //Tercer Periodo
                nutp: set_nutp,
                ndtp: set_ndtp,
                nttp: set_nttp,
                nctp: set_nctp,
                ncitp: set_ncitp,
                nsetp: set_nsetp,
                nsitp: set_nsitp,
                notp: set_notp,
                auto_3: set_auto_3,
                coe_3: set_coe_3
              }).then(result => Materialize.toast("Nota Agregada", 3000))
                .catch(err => Materialize.toast("Error", 3000))
          })
        }
})
//--------------------------
/*Fin*/
}else{
  console.log("Not logged in")
  // Esconder contenedor de notas
  $(".hidden").hide(400);

  }
})



  /*
  var rooms = []
  var info = snap.val().info.name;
  rooms.push(info)
  rooms.join()


  */

// Cerrar sesión
  $("#btn-logout").on("click", e => {
    auth.signOut();
    window.location.href = ""
  })

// Prueba

var refPrueba = firebase.database().ref()

var array = []

refPrueba.child("users").orderByChild("code").once("value")
.then(snap => {
  snap.forEach(childSnap => {
    const x = childSnap.val().info.code;
    array.push(x)
    var o = array.join()
    console.log(o)
  })
})

})