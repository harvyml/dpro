
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


// ----------------------------------- register -------------------------------------

// references already declared
var ref = firebase.database().ref("la-presentacion-el-paraiso/studentsList/")
// register 

$("#btnSignUp").on("click", function(){
  var txtUser = $("#regUser").val()
  var txtName = $("#regName").val()
  var txtEmail = $("#regEmail").val()
  var txtPass = $("#regPass").val()
  var txtCode = $("#regCode").val()
  var txtPhone = $("#regPhone").val()
  var txtGroup = $("#regGroup").val()
  var txtNivel = txtGroup.substr(0,1)
  console.log(txtNivel)
  
  if(txtGroup.length < 4 && txtNivel > 5){
    console.log("está entre 6 y 9")

  }else if(txtNivel < 5 && txtGroup.length < 4){
    console.log("Está en primaria")
  }else {
    console.log("Esta entre 10 y 11")
    
  firebase.auth().createUserWithEmailAndPassword(txtEmail, txtPass).then(function(){
     const refRegister = firebase.database().ref("la-presentacion-el-paraiso/studentsList/")
     var userId = firebase.auth().currentUser.uid
     refRegister.child(userId).set({
       info: {
        code: txtCode,
        email: txtEmail,
        group: txtGroup,
        name: txtName,
        pass: txtPass,
        phone: txtPhone,
        user: txtUser,
        level: txtNivel
      },

      grades: {
        Catedra_de_Paz : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Ciencias_Naturales : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Comprension_de_textos : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Contabilidad : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Educacion_Fisica : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Español : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Espiritu_Emprendedor : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Estadistica : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Etica_y_Valores : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Fisica : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Fundamentos_de_Economia : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Ingles : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Musica : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          Religion : {
              nupp:true,
              ndpp:true,
              ntpp:true,
              ncpp:true,
              ncipp:true,
              nsepp:true,
              nsipp:true,
              nopp:true,
              //Segundo periodo
              nusp:true,
              ndsp:true,
              ntsp:true,
              ncsp:true,
              nsesp:true,
              nsisp:true,
              nosp:true,
              nutp:true,
              ndtp:true,
              nttp:true,
              nctp:true,
              ncitp:true,
              nsetp:true,
              nsitp:true,
              notp: true
          },
          Teorias_Administrativas : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          filosofia : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          matematica : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          quimica : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          },
          sistemas : {
            nupp:true,
            ndpp:true,
            ntpp:true,
            ncpp:true,
            ncipp:true,
            nsepp:true,
            nsipp:true,
            nopp:true,
            //Segundo periodo
            nusp:true,
            ndsp:true,
            ntsp:true,
            ncsp:true,
            nsesp:true,
            nsisp:true,
            nosp:true,
            nutp:true,
            ndtp:true,
            nttp:true,
            nctp:true,
            ncitp:true,
            nsetp:true,
            nsitp:true,
            notp: true
          }
      }
     })
  })  
  }
 

    /*var groupNumber = txtGroup.lenght;
    if(groupNumber == 4){
      console.log("Es de Secundaria")
    }else if(groupNumber < 4){
      console.log("Es de Primaria")
    }else{
      console.log("Nothing")
    }*/


    

   /* refRegister.set(information).then(function(){
      console.log("Alright")
    })*/

  })



// ---------------------------------------- login --------------------------------------
// references
const auth = firebase.auth();

$("#btnLogin").on("click", e =>{

  const email = $("#input-email-1").val();
  const pass = $("#input-pass-1").val();
  const keyname = $("#input-code-1").val();


  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch( e => console.log("there´s an error"))

  e.preventDefault()
})


// -------------------------- Logged ------------------------------------

auth.onAuthStateChanged( firebaseUser => {
  if(firebaseUser){

    const userId = firebaseUser.uid
    var refInfo = firebase.database().ref("la-presentacion-el-paraiso/studentsList/" + userId + "/info");
    var name = firebaseUser.name
    console.log(name)
      refInfo.on("value", function(snapshot){
      console.log(snapshot.val().user + "<br />" +
                  snapshot.val().name + "<br />" +
                  snapshot.val().code + "<br />" +
                  snapshot.val().pass + "<br />" +
                  snapshot.val().group + "<br />" +
                  snapshot.val().phone)
      



    //borrar info de los containers
    $(".student-info").show(300)
    $(".student-info #student-name:first").text(snapshot.val().user);
    $(".ul-student-info").html("<li>"+ snapshot.val().name+ "</li>"+
                              "<li>"+ snapshot.val().phone+ "</li>" +
                              "<li>"+ snapshot.val().code+ "</li>" +
                              "<li>"+ snapshot.val().pass+ "</li>"
                        )

    // cambios en modales / changes in modals
          $(".name-modal").text(snapshot.val().user);
          $(".email-modal").text(snapshot.val().email)
      })

    $(".to-hide").hide(700)
    $(".hidden").show(700)
    $("#menu-icon").hide()
    $(".nav-header ul li a").hide()
    $(".nav-header ul li a").text(name)
    
    //bring data
    // TODO: REMEMBER TO MAKE THE HTML CODE FOR SELECTING THE GROUP WHERE MARKS ARE GONNA BE DISPLAYED

  var ul_1 = $("#notas-1");
  var ul_2 = $("#notas-2");
  var ul_3 = $("#notas-3");

    const clickedLevel = $(this).text()
    console.log(clickedLevel)
    const keyname = $("#input-code-1").val();
    var refGrade = firebase.database().ref("la-presentacion-el-paraiso").child("studentsList").orderByKey().equalTo(userId)
    refGrade.once("value", data => {

      console.log(data.val())
      var grades = data.val()
      var keys = Object.keys(grades)
      console.log(keys)

      for (var i = 0; i < keys.length; i++){
        var k = keys[i]
        var group = grades[k].info.group;
        var groupLength = group.length;
        const level = grades[k].info.level;
        
        // Algoritmo para mostrar correctamente las notas a cada estudiante
        if(level > 5){
          // Mostrar notas desde Sexto Hasta Noveno
          console.log("Secundaria")
        }else if(groupLength >= 4){
          //Mostrar notas desde Decimo hasta Once
          console.log("Secundaria")
          //matematica 
          var matematica = grades[k].grades.matematica;
          var matematica = Object.values(matematica).join("\n")
          var tr = document.createElement("tr")
          ul_1.append(tr) 
          var td = document.createElement("td")
          tr.append(td)
          tr.appendChild(td)
          td.setAttribute("class", "td")
          td.innerText =  " Matematica \n" + "Primer periodo Mitad:  " +grades[k].grades.matematica.nupp +"\n" + "Primer periodo Total:  " + grades[k].grades.matematica.ndpp;
          //Musica
          var musica = grades[k].grades.Musica;
          var musica = Object.values(musica).join("\n")
          var tr = document.createElement("tr")
          ul_1.append(tr) 
          var td = document.createElement("td")
          tr.append(td)
          tr.appendChild(td)
          td.setAttribute("class", "td")
          td.innerText =  " Musica \n" + "Primer periodo Mitad:  " +grades[k].grades.Musica.nupp +"\n" + "Primer periodo Total:  " + grades[k].grades.Musica.ndpp;

        }else if(level < 5){
          // Mostrar notas desde primero hasta quinto
          console.log("primaria")
        }        
      }
    })

    $(".hidden").show(300)
    console.log("logged in");
  }else{
    console.log("not logged in");
    $(".hidden").hide()
  }
})

// Functions to tell the user to reload data
ref.on("child_changed",  function(snapshot) {
  console.log(snapshot.val())
  Materialize.toast('Los Profesores están agregando notas', 4000, 'light-blue lighten-3') 
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
  console.log(trLength)
      for(i = 0; i < trLength; i++){
        $("#notas-1 tr").hide()
      }
  })
}*/
