$(function(){
  autocompleteSubjectsChips("groups", "subjects", "#teacher-subject")
  $("#register-student").click(function(){
    let email = $("#student-email").val()
    let pass = $("#student-password").val()
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(){
        registerStudent()
    })
  })
  $("#register-teacher").click(function(){
    let email = $("#teacher-email").val()
    let pass = $("#teacher-password").val()
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(){
        registerTeacher()
    })
  })
  $("#register-admin").click(function(){
    let email = $("#admin-email").val()
    let pass = $("#admin-password").val()
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(){
        registerAdmin()
    })
  })




  function registerStudent(){
    let name = $("#student-name").val()
    let user = $("#student-user").val()
    let email = $("#student-email").val()
    let group = $("#student-group").val()
    let phoneNumber = $("#student-phone").val()
    let code = $("#student-code").val()
    let pass = $("#student-password").val()
    let id = $("#student-id").val()
    let rol = "student"
    let userId = firebase.auth().currentUser.uid
    firebase.database().ref("la-presentacion-el-paraiso/users").child(userId).set({
        info:{
          name: name,
          email: email,
          user: user,
          group: group,
          phoneNumber: phoneNumber,
          code: code,
          pass: pass,
          id: id,
          rol: rol
        },
        grades:{
        Catedra_de_Paz : {
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
            auto_1: true,
            auto_2: true,
            auto_3: true,
            coe_1: true,
            coe_2: true,
            coe_3: true,
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
    }).then( () => Materialize.toast("Usuario Creado", 3000, "green"))
      .catch( () => Materialize.toast("Hubo algo mal", 3000, "red"))
  }

  function registerTeacher(){
    let name = $("#teacher-name").val()
    let user = $("#teacher-user").val()
    let email = $("#teacher-email").val()
    let phoneNumber = $("#teacher-phone").val()
    let code = $("#teacher-code").val()
    let pass = $("#teacher-password").val()
    let id = $("#teacher-id").val()
    let rol = "teacher"
    let subjectArray = $("#teacher-subject").val()
    let subjects = Object.assign({}, subjectArray);
    console.log(subjectArray, subjects)
    let userId = firebase.auth().currentUser.uid

    firebase.database().ref("la-presentacion-el-paraiso/users").child(userId).set({
      info:{
        name,
        user,
        email,
        phoneNumber,
        code,
        pass,
        id,
        rol,
        subjects
      },
      grades:{
      Catedra_de_Paz : {
          active: true
        },
        Ciencias_Naturales : {
          active: true
        },
        Comprension_de_textos : {
          active: true
        },
        Contabilidad : {
          active: true
        },
        Educacion_Fisica : {
          active: true
        },
        Español : {
          active: true
        },
        Espiritu_Emprendedor : {
          active: true
        },
        Estadistica : {
          active: true
        },
        Etica_y_Valores : {
          active: true
        },
        Fisica : {
          active: true
        },
        Fundamentos_de_Economia : {
          active: true
        },
        Ingles : {
          active: true
        },
        Musica : {
          active: true
        },
        Religion : {
          active: true
        },
        Teorias_Administrativas : {
          active: true
        },
        filosofia : {
          active: true
        },
        matematica : {
          active: true
        },
        quimica : {
          active: true
        },
        sistemas : {
          active: true
        }
    }
    })
  }

function registerAdmin(){
    let name = $("#name").val()
    let user = $("#user").val()
    let email = $("#email").val()
    let phoneNumber = $("#phone").val()
    let code = $("#code").val()
    let pass = $("#password").val()
    let id = $("#id").val()
    let rol = "teacher"
    let userId = firebase.auth().currentUser.uid
    firebase.database().ref("la-presentacion-el-paraiso/users").child(userId).set({
        info:{
        name,
        user,
        email,
        phoneNumber,
        code,
        pass,
        id,
        rol
      },
      grades:{
      Catedra_de_Paz : {
          active: true
        },
        Ciencias_Naturales : {
          active: true
        },
        Comprension_de_textos : {
          active: true
        },
        Contabilidad : {
          active: true
        },
        Educacion_Fisica : {
          active: true
        },
        Español : {
          active: true
        },
        Espiritu_Emprendedor : {
          active: true
        },
        Estadistica : {
          active: true
        },
        Etica_y_Valores : {
          active: true
        },
        Fisica : {
          active: true
        },
        Fundamentos_de_Economia : {
          active: true
        },
        Ingles : {
          active: true
        },
        Musica : {
          active: true
        },
        Religion : {
          active: true
        },
        Teorias_Administrativas : {
          active: true
        },
        filosofia : {
          active: true
        },
        matematica : {
          active: true
        },
        quimica : {
          active: true
        },
        sistemas : {
          active: true
        }
    }
    })
}

/*function bringSubjectsForTeachers(){
  firebase.database().ref("la-presentacion-el-paraiso/groups").on("value", snap => {
    let data = snap.val()
    let keys = Object.keys(data)

    keys.forEach(k => {
      let subject = data[k].subjects
      if(subject){
          let subjectKeys = Object.keys(subject)
          subjectKeys.forEach(sk => {
            console.log(`${k}: ${subject[sk]}`)
          })
      }



    })
  })
}*/


})
