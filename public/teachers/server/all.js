var teacherName = ""
var teacherEmail = ""
var materia = ""

$(function(){
  $("#btnLogin").on("click", e =>{

    e.preventDefault()
    var email = $("#input-login-email").val();
    var code = $("#input-login-code").val();
    var pass = $("#input-login-pass").val();

    var promise = auth.signInWithEmailAndPassword(email, pass)
    promise.catch( e => console.log("There´s an error"))
  })

  $("#choose-subject").on("click", function(){
    materia = this.value
    console.log(materia)
  })
  // Cuando inicie sesión
  auth.onAuthStateChanged(firebaseUser =>{
     materia;
     if(firebaseUser){
       firebase.database().ref("la-presentacion-el-paraiso/config").on("value", snap => {
         var config_2 = snap.val().teachersView
         if(config_2 == "active"){
           const userId = firebaseUser.uid
           pickSubject(userId, "#choose-subject", "#choose-subject-mobile")
           //Mostrar los datos de los estudiantes
           //console.log(userId)
           // Mostrar contenedor de notas
           $(".con-rooms").show(500)
           // Esconder contenedor principal
           $(".container:first").hide(400);
           //Mostrar contenedor escondido
           $(".hidden").show(500);
           /*Inicio*/
           console.log(materia)
           ref.child(`users/${userId}/`).once("value", snap => {
             //Put data into gaps of html
             let user = snap.val().info.user
             let email = snap.val().info.email
             let name = snap.val().info.name
             $(".user").text(user)
             $(".email").text(email)
             $(".name").text(name)
             //=========================
             //Teacher Data
             let data = snap.val()
             let rol = data.info.rol
             teacherName = data.info.name
             teacherEmail = data.info.email
             let imgURL = data.info.imgURL
             //Put data into sidenav
             let htmlSidenav = `<li><a href="#${teacherName}" class="waves-effect">${teacherName}</a></li>
                                <li><a href="#${teacherEmail}" class="waves-effect">${teacherEmail}</a></li>
                                `
             $("ul.sidenav").append(htmlSidenav)
             $(".user-img").attr("src", imgURL)

             if(rol != "teacher"){
               window.location.href = "../"
             }
           })


     const room = $(".room a")
     room.on("click", function(){
       //Before the users close the window this triggers a prompt
        window.onbeforeunload = function () {
          return beforeUnload();
        }
       //===================
       if(materia == ""){
         alert("recuerda escoger la materia antes de el salón")
         window.location.href = "index.html"
       }else{
          // Some of these functions are on index.js file
         $(".con-notas").removeClass("l12")
          $(".con-notas").addClass("l9")
         $(".description").show(300)
         $(".con-notas").show(300)
         $(".hidden-before-room").show(300)
         $("#choose-subject").hide(500)
         $("#choose-subject-mobile").hide(500)
         $(".con-rooms").hide(700)
       }
       if($("tbody").html() == ""){
        $(".tbody").html("<h1>Cargando...</h1>")
       }
       $("table tbody").html("")//Limpiar informacion que se trajo antes
       console.log(materia)
       var dismissToast = `<button class="btn hoverable waves con-rooms-show">Salones</button>`

       $(".description .button-hide").html(dismissToast)
       var clickedLevel = $(this).text()
      ref.child("users/").once("value", gotData)
           function gotData(data){
              //Rooms
               // Bring students data
               var users = data.val()
               var keys = Object.keys(users)
               console.log(keys)

               var teacherCode = data.val()[userId].info.code
               for (var i = 0; i < keys.length; i++){
                 var k = keys[i];
                 var name = users[k].info.name;
                 var code = users[k].info.code;
                 var group = users[k].info.group;
                 var rol = users[k].info.rol
                 console.log(name, group, code)
                  // var keys_observations = Object.keys(users[k].observations_1)
                  // console.log(keys_observations)

                  let nota_1_1 = users[k].grades ? parseFloat(users[k].grades[materia].nupp) : 2
                  let nota_2_1 = users[k].grades ? parseFloat(users[k].grades[materia].ndpp) : 2
                  let nota_3_1 = users[k].grades ? parseFloat(users[k].grades[materia].ntpp) : 2
                  let nota_4_1 = users[k].grades ? parseFloat(users[k].grades[materia].ncpp) : 2
                  let nota_5_1 = users[k].grades ? parseFloat(users[k].grades[materia].ncipp) : 2
                  let nota_6_1 = users[k].grades ? parseFloat(users[k].grades[materia].nsepp) : 2
                  let nota_7_1 = users[k].grades ? parseFloat(users[k].grades[materia].nsipp) : 2
                  let nota_8_1 = users[k].grades ? parseFloat(users[k].grades[materia].nopp) : 2
                  let nota_e_1 = users[k].grades ? parseFloat(users[k].grades[materia].nepp) : 2
                  let nota_auto_1 = users[k].grades ? parseFloat(users[k].grades[materia].auto_1) : 2
                  let nota_coe_1 = users[k].grades ? parseFloat(users[k].grades[materia].coe_1) : 2
                  //var obs_1 = users[k].grades[materia].observation_1.observation
                  //var obs_date_1 = users[k].grades[materia].observation_1.date
                  //var obs_teacher_1 = users[k].grades[materia].observation_1.teacher
                  let average_compromiso_en_clase_1 = (nota_1_1 + nota_2_1 + nota_3_1) / 3 * 15 / 100;
                  let average_evaluaciones_1 = (nota_4_1 + nota_5_1 + nota_6_1) /3 * 30 / 100;
                  let average_trabajo_personal_1 = (nota_7_1 + nota_8_1 )/2 * 30 / 100;
                  let average_evaluacion_final_1 = (nota_e_1) * 20 / 100;
                  let average_auto_coe_1 = (nota_auto_1 + nota_coe_1) / 2 * 5 / 100;

                  console.log(average_compromiso_en_clase_1, average_evaluacion_final_1, average_evaluaciones_1, average_trabajo_personal_1)
                  let average_1 = (average_compromiso_en_clase_1 + average_evaluacion_final_1 + average_evaluaciones_1 + average_trabajo_personal_1 + average_auto_coe_1).toFixed(2);

                  //Second period
                  let nota_1_2 = users[k].grades ? parseFloat(users[k].grades[materia].nusp) : 2
                  let nota_2_2 = users[k].grades ? parseFloat(users[k].grades[materia].ndsp) : 2
                  let nota_3_2 = users[k].grades ? parseFloat(users[k].grades[materia].ntsp) : 2
                  let nota_4_2 = users[k].grades ? parseFloat(users[k].grades[materia].ncsp) : 2
                  let nota_5_2 = users[k].grades ? parseFloat(users[k].grades[materia].ncisp) : 2
                  let nota_6_2 = users[k].grades ? parseFloat(users[k].grades[materia].nsesp) : 2
                  let nota_7_2 = users[k].grades ? parseFloat(users[k].grades[materia].nsisp) : 2
                  let nota_8_2 = users[k].grades ? parseFloat(users[k].grades[materia].nosp) : 2
                  let nota_e_2 = users[k].grades ? parseFloat(users[k].grades[materia].nesp) : 2
                  let nota_auto_2 = users[k].grades ? parseFloat(users[k].grades[materia].auto_2) : 2
                  let nota_coe_2 = users[k].grades ? parseFloat(users[k].grades[materia].coe_2) : 2
                  //var obs_2 = users[k].grades[materia].observation_2.observation
                  //var obs_date_2 = users[k].grades[materia].observation_2.date
                  //var obs_teacher_2 = users[k].grades[materia].observation_2.teacher
                  let average_compromiso_en_clase_2 = (nota_1_2 + nota_2_2 + nota_3_2) / 3 * 15 / 100;
                  let average_evaluaciones_2 = (nota_4_2 + nota_5_2 + nota_6_2) /3 * 30 / 100;
                  let average_trabajo_personal_2 = (nota_7_2 + nota_8_2 )/2 * 30 / 100;
                  let average_evaluacion_final_2 = (nota_e_2) /1 * 20 / 100;
                  let average_auto_coe_2 = (nota_auto_2 + nota_coe_2) / 2 *5 / 100;

                  console.log(average_compromiso_en_clase_2, average_evaluacion_final_2, average_evaluaciones_2, average_trabajo_personal_2)
                  let average_2 = (average_compromiso_en_clase_2 + average_evaluacion_final_2 + average_evaluaciones_2 + average_trabajo_personal_2 + average_auto_coe_2).toFixed(2);

                  //Third Period
                  let nota_1_3 = users[k].grades ? parseFloat(users[k].grades[materia].nutp) : 2
                  let nota_2_3 = users[k].grades ? parseFloat(users[k].grades[materia].ndtp) : 2
                  let nota_3_3 = users[k].grades ? parseFloat(users[k].grades[materia].nttp) : 2
                  let nota_4_3 = users[k].grades ? parseFloat(users[k].grades[materia].nctp) : 2
                  let nota_5_3 = users[k].grades ? parseFloat(users[k].grades[materia].ncitp) : 2
                  let nota_6_3 = users[k].grades ? parseFloat(users[k].grades[materia].nsetp) : 2
                  let nota_7_3 = users[k].grades ? parseFloat(users[k].grades[materia].nsitp) : 2
                  let nota_8_3 = users[k].grades ? parseFloat(users[k].grades[materia].notp) : 2
                  let nota_e_3 = users[k].grades ? parseFloat(users[k].grades[materia].netp) : 2
                  let nota_auto_3 = users[k].grades ? parseFloat(users[k].grades[materia].auto_3) : 2
                  let nota_coe_3 = users[k].grades ? parseFloat(users[k].grades[materia].coe_3) : 2
                  //var obs_3 = users[k].grades[materia].observation_3.observation
                  //var obs_date_3 = users[k].grades[materia].observation_3.date
                  //var obs_teacher_3 = users[k].grades[materia].observation_3.teacher
                  let average_compromiso_en_clase_3 = (nota_1_3 + nota_2_3 + nota_3_3) / 3 * 15 / 100;
                  let average_evaluaciones_3 = (nota_4_3 + nota_5_3 + nota_6_3) /3 * 30 / 100;
                  let average_trabajo_personal_3 = (nota_7_3 + nota_8_3)/2 * 30 / 100;
                  let average_evaluacion_final_3 = (nota_e_3) /1 * 20 / 100;
                  let average_auto_coe_3 = (nota_auto_3 + nota_coe_3) / 2 *5 / 100;

                  console.log(average_compromiso_en_clase_3, average_evaluacion_final_3, average_evaluaciones_3, average_trabajo_personal_3)
                  let average_3 = (average_compromiso_en_clase_3 + average_evaluacion_final_3 + average_evaluaciones_3 + average_trabajo_personal_3 + average_auto_coe_3).toFixed(2);
                     // Bring all the marks to put them in the value
                      if(clickedLevel == group && rol == "student"){
                        //if(users[k].grades[materia]){
                       var primerPeriodoHtml = `

                                               <tr class="tr-grades-table first-period">
                                                 <td>${users[k].info.name}</td>
                                                 <td style="display: none;">${users[k].info.group}</td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nupp" value="${nota_1_1}" /><input type="number" href="${k}" class="${k}-set-ndpp" value="${nota_2_1}" /><input type="number" href="${k}" class="${k}-set-ntpp" value="${nota_3_1}" />
                                                 </td>
                                                 <td><input type="number" href="${k}" class="${k}-set-ncpp" value="${nota_4_1}" /><input type="number" href="${k}" class="${k}-set-ncipp" value="${nota_5_1}" /><input type="number" href="${k}" class="${k}-set-nsepp" value="${nota_6_1}" />
                                                 </td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nsipp" value="${nota_7_1}" /><input type="number" href="${k}" class="${k}-set-nopp" value="${nota_8_1}" />
                                                 </td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nepp" value="${nota_e_1}"/></td>
                                                 <td><input type="number" href="${k}" class="${k}-set-auto-1" value="${nota_auto_1}" /><input type="number" href="${k}" class="${k}-set-coe-1" value="${nota_coe_1}" />
                                                 </td>
                                                 <td><p class="${k}-total-average-1"> ${average_1} </p></td>
                                                 <td>
                                                   <div class="input-field">
                                                      <input class="input-observacion ${k}-observacion-1" placeholder="Observacion" href="${k}"/>
                                                   </div>
                                                 </td>
                                                 <td class="noExl"><button class="btn hoverable submit-first-period btn-submit-grades" href="${k}">Enviar</button>
                                                 </td>

                                               </tr>

                                               `
                                               //<input type="text" placeholder="Observacion" class="${k}-set-obs-1"/> For observations input
                       $("#grades-first-period").append(primerPeriodoHtml)
                       //-------------------------------------------------
                       //Notas Segundo Periodo
                        var segundoPeriodoHtml = `
                                               <tr class="tr-grades-table second-period">
                                                 <td>${users[k].info.name}</td>
                                                 <td style="display: none;">${users[k].info.group}</td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nusp" value="${nota_1_2}" /><input type="number" href="${k}" class="${k}-set-ndsp" value="${nota_2_2}" /><input type="number" href="${k}" class="${k}-set-ntsp" value="${nota_3_2}" /></td>
                                                 <td><input type="number" href="${k}" class="${k}-set-ncsp" value="${nota_4_2}" /><input type="number" href="${k}" class="${k}-set-ncisp" value="${nota_5_2}" /><input type="number" href="${k}" class="${k}-set-nsesp" value="${nota_6_2}" /></td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nsisp" value="${nota_7_2}" /><input type="number" href="${k}" class="${k}-set-nosp" value="${nota_8_2}" /></td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nesp" value="${nota_e_2}" />
                                                 <td><input type="number" href="${k}" class="${k}-set-auto-2" value="${nota_auto_2}" /><input type="number" href="${k}" class="${k}-set-coe-2" value="${nota_coe_2}" /></td>
                                                 <td><p class="${k}-total-average-2"> ${average_2} </p></td>
                                                 <td>
                                                   <div class="input-field">
                                                      <input class="input-observacion ${k}-observacion-2" placeholder="Observacion"/>
                                                   </div>
                                                 </td>
                                                 <td class="noExl"><button class="btn hoverable submit-second-period btn-submit-grades" href="${k}">Enviar</button>
                                                 </td>

                                               </tr>

                                               `

                       $("#grades-second-period").append(segundoPeriodoHtml)
                       // Notas Tercer Periodo
                       var tercerPeriodoHtml = `

                                               <tr class="tr-grades-table third-period">
                                                 <td>${users[k].info.name}</td>
                                                 <td style="display: none;">${users[k].info.group}</td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nutp" value="${nota_1_3}" /><input type="number" href="${k}" class="${k}-set-ndtp" value="${nota_2_3}" /><input type="number" href="${k}" class="${k}-set-nttp" value="${nota_3_3}" /></td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nctp" value="${nota_4_3}" /><input type="number" href="${k}" class="${k}-set-ncitp" value="${nota_5_3}" /><input type="number" href="${k}" class="${k}-set-nsetp" value="${nota_6_3}" /></td>
                                                 <td><input type="number" href="${k}" class="${k}-set-nsitp" value="${nota_7_3}" /><input type="number" href="${k}" class="${k}-set-notp" value="${nota_8_3}" /></td>
                                                 <td><input type="number" href="${k}" class="${k}-set-netp" value="${nota_e_3}" />
                                                 <td><input type="number" href="${k}" class="${k}-set-auto-3" value="${nota_auto_3}" /><input type="number" href="${k}" class="${k}-set-coe-3" value="${nota_coe_3}" /></td>
                                                 <td><p class="${k}-total-average-3"> ${average_3} </p></td>
                                                 <td>
                                                   <div class="input-field">
                                                      <input class="input-observacion ${k}-observacion-3" href="${k}}" placeholder="Observacion"/>
                                                   </div>
                                                 </td>
                                                 <td class="noExl"><button class="btn hoverable submit-third-period btn-submit-grades" href="${k}">Enviar</button>
                                                 </td>

                                               </tr>

                                               `
                       $("#grades-third-period").append(tercerPeriodoHtml)
                       console.log(teacherCode)
                  }

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

                           <img src="https://d1bvpoagx8hqbg.cloudfront.net/originals/el-peor-examen-de-mi-vida-87266341d81d2e0b8e696a5b434bfb9f.jpg" alt="" width="100%">
                           <div class="text">
                             Evaluacion Final Del Periodo
                           </div>
                           <span class="blue-text text-lighten-4">Digita el numero de la nota y luego da click para registrarla</span><br />


                       `

           $(".in-description").html(auto_coe)
           $(".con-rooms-show").click(function(){
             $(".con-rooms").show(400)
           })
          })

          $("tbody td:nth-child(7) input").focus(function(){
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
         let tableInputs = $(".first-period input[type='number']")
         tableInputs.each(i => {
          let inputValue = tableInputs[i]
          if(inputValue.value == ""){
            console.log(`Input numero: ${i}` )
            inputValue.value = 2
          }
          //console.log(inputValue.value)
         })
         var address = $(this).attr("href")
         console.log(address)
         var set_nupp = parseFloat($(`.${address}-set-nupp`).val())
         var set_ndpp = parseFloat($(`.${address}-set-ndpp`).val())
         var set_ntpp = parseFloat($(`.${address}-set-ntpp`).val())
         var set_ncpp = parseFloat($(`.${address}-set-ncpp`).val())
         var set_ncipp = parseFloat($(`.${address}-set-ncipp`).val())
         var set_nsepp = parseFloat($(`.${address}-set-nsepp`).val())
         var set_nsipp =parseFloat( $(`.${address}-set-nsipp`).val())
         var set_nopp = parseFloat($(`.${address}-set-nopp`).val())
         var set_nepp = parseFloat($(`.${address}-set-nepp`).val())
         var set_auto_1 = parseFloat($(`.${address}-set-auto-1`).val())
         var set_coe_1 = parseFloat($(`.${address}-set-coe-1`).val())
         var set_obs_1 = $(`.${address}-observacion-1`).val()
         var ave_1 = (((set_nupp + set_ndpp + set_ntpp)/3)*0.15)+(((set_ncpp + set_ncipp + set_nsepp)/3)*0.30)+(((set_nsipp + set_nopp)/2)*0.30)+((set_nsepp)*0.20)+(((set_auto_1 + set_coe_1)/2)*0.05)
         console.log(ave_1)
           
          if(set_obs_1.length >= 5){
             ref.child("users/" +address+ "/observations_1" ).push({
                 teacherName,
                 content: set_obs_1,
                 subject: materia,
                 teacherCode,
                 date: today
             }).then(result => M.toast({html: 'Se ha enviado la observacion', classes: 'green'}))
           }else{
             console.log("No hubo observacion")
           }

           ref.child("users/" +address+ "/grades/" + materia + "/").update({
             nupp: set_nupp,
             ndpp: set_ndpp,
             ntpp: set_ntpp,
             ncpp: set_ncpp,
             ncipp: set_ncipp,
             nsepp: set_nsepp,
             nsipp: set_nsipp,
             nopp: set_nopp,
             nepp: set_nepp,
             auto_1: set_auto_1,
             coe_1: set_coe_1,
             ave_1
           }).then(result => {
             M.toast({html: 'Se han enviado las notas', classes: 'green'})
             $(this).css("background-color", "green")
             $(this).attr("saved", "saved")
         })
             .catch(err => M.toast({html: 'Hubo un Error'}))
       })

       $(".submit-second-period").on("click", function(){
        let tableInputs = $(".second-period input[type='number']")
         tableInputs.each(i => {
          let inputValue = tableInputs[i]
          if(inputValue.value == ""){
            console.log(`Input numero: ${i}` )
            inputValue.value = 2
          }
          //console.log(inputValue.value)
         })
         var address = $(this).attr("href")
         var set_nusp = parseFloat($(`.${address}-set-nusp`).val())
         var set_ndsp = parseFloat($(`.${address}-set-ndsp`).val())
         var set_ntsp = parseFloat($(`.${address}-set-ntsp`).val())
         var set_ncsp = parseFloat($(`.${address}-set-ncsp`).val())
         var set_ncisp = parseFloat($(`.${address}-set-ncisp`).val())
         var set_nsesp = parseFloat($(`.${address}-set-nsesp`).val())
         var set_nsisp = parseFloat($(`.${address}-set-nsisp`).val())
         var set_nosp = parseFloat($(`.${address}-set-nosp`).val())
         var set_nesp = parseFloat($(`.${address}-set-nesp`).val())
         var set_auto_2 = parseFloat($(`.${address}-set-auto-2`).val())
         var set_coe_2 = parseFloat($(`.${address}-set-coe-2`).val())
         var set_obs_2 = $(`.${address}-observacion-2`).val()
         var ave_2 = (((set_nusp + set_ndsp + set_ntsp)/3)*0.15)+(((set_ncsp + set_ncisp + set_nsesp)/3)*0.30)+(((set_nsisp + set_nosp)/2)*0.30)+((set_nsesp)*0.20)+(((set_auto_2 + set_coe_2)/2)*0.05)
         console.log(address)
         /*ref.child(`users/${address}/grades/${materia}/observation_2`).update({
             observation: set_obs_2,
             teacher: data.val()[userId].info.name,
             subject: materia,
             date: today
           })*/
           //Send Observation
           if(set_obs_2.length >= 5){
             ref.child("users/" +address+ "/observations_2" ).push({
                 teacherName,
                 content: set_obs_2,
                 subject: materia,
                 teacherCode,
                 date: today
             }).then(result => M.toast({html: 'Se ha enviado la observacion', classes: 'green'}))
           }else{
             console.log("No hubo observacion")
           }

           ref.child("users/" +address+ "/grades/" + materia + "/").update({
             nusp: set_nusp,
             ndsp: set_ndsp,
             ntsp: set_ntsp,
             ncsp: set_ncsp,
             ncisp: set_ncisp,
             nsesp: set_nsesp,
             nsisp: set_nsisp,
             nosp: set_nosp,
             nesp: set_nesp,
             auto_2: set_auto_2,
             coe_2: set_coe_2,
             ave_2
           }).then(result => {
             M.toast({html: 'Se han enviado las notas', classes: 'green'})
             $(this).css("background-color", "green")
             $(this).attr("saved", "saved")
           })
             .catch(err => M.toast({html: 'Error'}))
       })

       $(".submit-third-period").on("click", function(){
        let tableInputs = $(".third-period input[type='number']")
         tableInputs.each(i => {
          let inputValue = tableInputs[i]
          if(inputValue.value == ""){
            console.log(`Input numero: ${i}` )
            inputValue.value = 2
          }
          //console.log(inputValue.value)
         })
         var address = $(this).attr("href")
         var set_nutp = parseFloat($(`.${address}-set-nutp`).val())
         var set_ndtp = parseFloat($(`.${address}-set-ndtp`).val())
         var set_nttp = parseFloat($(`.${address}-set-nttp`).val())
         var set_nctp = parseFloat($(`.${address}-set-nctp`).val())
         var set_ncitp = parseFloat($(`.${address}-set-ncitp`).val())
         var set_nsetp = parseFloat($(`.${address}-set-nsetp`).val())
         var set_nsitp = parseFloat($(`.${address}-set-nsitp`).val())
         var set_notp = parseFloat($(`.${address}-set-notp`).val())
         var set_netp = parseFloat($(`.${address}-set-netp`).val())
         var set_auto_3 = parseFloat($(`.${address}-set-auto-3`).val())
         var set_coe_3 = parseFloat($(`.${address}-set-coe-3`).val())
         var set_obs_3 = $(`.${address}-observacion-3`).val()
         var ave_3 = (((set_nutp + set_ndtp + set_nttp)/3)*0.15)+(((set_nctp + set_ncitp + set_nsetp)/3)*0.30)+(((set_nsitp + set_notp)/2)*0.30)+((set_nsetp)*0.20)+(((set_auto_3 + set_coe_3)/2)*0.05)
         console.log(address)
         /*ref.child(`users/${address}/grades/${materia}/observations_`).update({
             observation: set_obs_3,
             teacher: data.val()[userId].info.name,
             subject: materia,
             date: today
           })*/
           //Send Observation
           if(set_obs_3.length >= 5){
             ref.child("users/" +address+ "/observations_3" ).push({
                 teacherName,
                 content: set_obs_3,
                 subject: materia,
                 teacherCode,
                 date: today
             }).then(() => M.toast({html: 'Se ha enviado la observacion', classes: 'green'}))
           }else{
             console.log("No hubo observacion")
           }
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
             netp: set_netp,
             auto_3: set_auto_3,
             coe_3: set_coe_3,
             ave_3
           }).then(result => {
             M.toast({html: 'Se han enviado las notas', classes: 'green'})
             $(this).css("background-color", "green")
             $(this).attr("saved", "saved")
         })
           .catch(err => Materialize.toast("Error", 3000, "red"))
       })
     }
})
   }else{
     Materialize.toast("La Plataforma Fue Deshabilitada", 3000, "red")
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
    beforeLogout()
  })
 function beforeUnload(e){
  if($("#primero").hasClass("active") && $("tr.first-period button").attr("saved") != "saved"){
      return "Faltan cambios por guardar en primer periodo."
      $(this).css("background-color", "red")
      e.preventDefault()
    }else if($("#segundo").hasClass("active") && $("tr.second-period button").attr("saved") != "saved"){
      return "Faltan cambios por guardar en segundo periodo."
      $(this).css("background-color", "red")
      e.preventDefault()
    }else if($("#tercero").hasClass("active") && $("tr.third-period button").attr("saved") != "saved"){
      return "Faltan cambios por guardar en el tercer periodo."
      $(this).css("background-color", "red")
      e.preventDefault()
    }else{
      auth.signOut();
      window.location.href = "index.html"
    }

    e.preventDefault()
 }
 function beforeLogout(e){
  if($("#primero").hasClass("active") && $("tr.first-period button").attr("saved") != "saved"){
      alert("Faltan cambios por guardar en primer periodo.")
      e.preventDefault()
    }else if($("#segundo").hasClass("active") && $("tr.second-period button").attr("saved") != "saved"){
      alert("Faltan cambios por guardar en segundo periodo.")
      e.preventDefault()
    }else if($("#tercero").hasClass("active") && $("tr.third-period button").attr("saved") != "saved"){
      alert("Faltan cambios por guardar en el tercer periodo.")
      e.preventDefault()
    }else{
      auth.signOut();
      window.location.href = "index.html"
    }

    e.preventDefault()
 }

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
}())


function pickSubject(uid, placement, mobilePlacement){
  ref.child(`users/${uid}/info/subjects`).on("value", snap => {
     let pickSubject = Object.keys(snap.val())
     pickSubject.forEach(sub => {
       console.log(sub)
       var htmlSubjects = `<option>${snap.val()[sub]}</option>`
       var htmlSubjectsMobile = `<li><a class="waves-effect blue-text" href="#${snap.val()[sub]}" id="${snap.val()[sub]}">${snap.val()[sub]}</a></li>`
       $(placement).append(htmlSubjects)
       $(mobilePlacement).append(htmlSubjectsMobile)
     })
     $(".user-name").text(teacherName)
       $("#choose-subject-mobile a").on("click", function(){
        materia = this.getAttribute("id")
        console.log(materia)
        $("#choose-subject-mobile").hide(500)
      }) 
  })
   console.log("Holo")
}
