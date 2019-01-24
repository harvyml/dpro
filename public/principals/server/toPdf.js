firebase.auth().onAuthStateChanged(user => {
    if(user){
        firebase.database().ref("la-presentacion-el-paraiso/users/").once("value", snap => {
    var keys = Object.keys(snap.val())
    var data = snap.val()
    var k = localStorage.getItem("k") 
    console.log(localStorage.getItem("k"))   
    var totalProfit = 0;
    var studentInfo = `
                    <li>Nombre: <span class="bold">${data[k].info.name}</span></li>
                    <li>Documento De Identidad: <span class="bold">${data[k].info.id}</span></li>
                    <li>Grupo: <span class="bold">${data[k].info.group}</span></li>
                    `    
    var observations_1 = data[k].observations_1
    var Keysobservations_1 = Object.keys(data[k].observations_1)
    Keysobservations_1.forEach(o1 => {
        var pathObs_1 = data[k].observations_1[o1]
        var keysObs_1 = Object.keys(data[k].observations_1[o1])
        var htmlObservations_1 = `
                        <tr>
                            <td>${data[k].observations_1[o1].teacherName}</td>
                            <td>${data[k].observations_1[o1].content}</td>
                            <td>${data[k].observations_1[o1].subject}</td>
                            <td>${data[k].observations_1[o1].date}</td>
                        </tr>
                        `    
        $(".observations").append(htmlObservations_1)
    })
    
    $(".student-info").html(studentInfo)
        //$("#content").append(`<li>${snap.val()[k].info.name}: ${snap.val()[k].info.group}</li>`)
        //console.log(snap.val()[k].info.name)

        var keysSubjects = Object.keys(snap.val()[k].grades)
        keysSubjects.forEach(ks => {
            var keysGrades = Object.keys(data[k].grades[ks])
            var nota_1_1 = parseFloat(data[k].grades[ks].nupp)
                var nota_2_1 = parseFloat(data[k].grades[ks].ndpp)
                var nota_3_1 = parseFloat(data[k].grades[ks].ntpp)
                var nota_4_1 = parseFloat(data[k].grades[ks].ncpp)
                var nota_5_1 = parseFloat(data[k].grades[ks].ncipp)
                var nota_6_1 = parseFloat(data[k].grades[ks].nsepp)
                var nota_7_1 = parseFloat(data[k].grades[ks].nsipp)
                var nota_8_1 = parseFloat(data[k].grades[ks].nopp)
                var nota_auto_1 = parseFloat(data[k].grades[ks].auto_1)
                var nota_coe_1 = parseFloat(data[k].grades[ks].coe_1)
                //var obs_1 = data[k].grades[ks].observation_1.observation
                //var obs_date_1 = data[k].grades[ks].observation_1.date
                //var obs_teacher_1 = data[k].grades[ks].observation_1.teacher
                var profit_compromiso_en_clase_1 = (nota_1_1 + nota_2_1) / 2 * 15 / 100;
                var profit_evaluacion_final_1 = (nota_3_1) /1 * 20 / 100;
                var profit_evaluaciones_1 = (nota_4_1 + nota_5_1) /2 * 30 / 100;
                var profit_trabajo_personal_1 = (nota_6_1 + nota_7_1 + nota_8_1 )/3 * 30 / 100;
                var profit_auto_coe_1 = (nota_auto_1 + nota_coe_1) / 2 * 5 / 100;

                var profit_1 = parseFloat(profit_compromiso_en_clase_1 + profit_evaluacion_final_1 + profit_evaluaciones_1 + profit_trabajo_personal_1 + profit_auto_coe_1).toFixed(2)


                //Second period
                var nota_1_2 = parseFloat(data[k].grades[ks].nusp)
                var nota_2_2 = parseFloat(data[k].grades[ks].ndsp)
                var nota_3_2 = parseFloat(data[k].grades[ks].ntsp)
                var nota_4_2 = parseFloat(data[k].grades[ks].ncsp)
                var nota_5_2 = parseFloat(data[k].grades[ks].ncisp)
                var nota_6_2 = parseFloat(data[k].grades[ks].nsesp)
                var nota_7_2 = parseFloat(data[k].grades[ks].nsisp)
                var nota_8_2 = parseFloat(data[k].grades[ks].nosp)
                var nota_auto_2 = parseFloat(data[k].grades[ks].auto_2)
                var nota_coe_2 = parseFloat(data[k].grades[ks].coe_2)
                //var obs_2 = data[k].grades[ks].observation_2.observation
                //var obs_date_2 = data[k].grades[ks].observation_2.date
                //var obs_teacher_2 = data[k].grades[ks].observation_2.teacher
                var profit_compromiso_en_clase_2 = (nota_1_2 + nota_2_2) / 2 * 15 / 100;
                var profit_evaluacion_final_2 = (nota_3_2) /1 * 20 / 100;
                var profit_evaluaciones_2 = (nota_4_2 + nota_5_2) /2 * 30 / 100;
                var profit_trabajo_personal_2 = (nota_6_2 + nota_7_2 + nota_8_2 )/3 * 30 / 100;
                var profit_auto_coe_2 = (nota_auto_2 + nota_coe_2) / 2 *5 / 100;

                var profit_2 = parseFloat(profit_compromiso_en_clase_2 + profit_evaluacion_final_2 + profit_evaluaciones_2 + profit_trabajo_personal_2 + profit_auto_coe_2).toFixed(2)

                //Third Period
                var nota_1_3 = parseFloat(data[k].grades[ks].nutp)
                var nota_2_3 = parseFloat(data[k].grades[ks].ndtp)
                var nota_3_3 = parseFloat(data[k].grades[ks].nttp)
                var nota_4_3 = parseFloat(data[k].grades[ks].nctp)
                var nota_5_3 = parseFloat(data[k].grades[ks].ncitp)
                var nota_6_3 = parseFloat(data[k].grades[ks].nsetp)
                var nota_7_3 = parseFloat(data[k].grades[ks].nsitp)
                var nota_8_3 = parseFloat(data[k].grades[ks].notp)
                var nota_auto_3 = parseFloat(data[k].grades[ks].auto_3)
                var nota_coe_3 = parseFloat(data[k].grades[ks].coe_3)
                //var obs_3 = data[k].grades[ks].observation_3.observation
                //var obs_date_3 = data[k].grades[ks].observation_3.date
                //var obs_teacher_3 = data[k].grades[ks].observation_3.teacher
                var profit_compromiso_en_clase_3 = (nota_1_3 + nota_2_3) / 2 * 15 / 100;
                var profit_evaluacion_final_3 = (nota_3_3) /1 * 20 / 100;
                var profit_evaluaciones_3 = (nota_4_3 + nota_5_3) /2 * 30 / 100;
                var profit_trabajo_personal_3 = (nota_6_3 + nota_7_3 + nota_8_3)/3 * 30 / 100;
                var profit_auto_coe_3 = (nota_auto_3 + nota_coe_3) / 2 *5 / 100;

                var profit_3 = parseFloat(profit_compromiso_en_clase_3 + profit_evaluacion_final_3 + profit_evaluaciones_3 + profit_trabajo_personal_3 + profit_auto_coe_3).toFixed(2)

                totalProfit = ((parseFloat(profit_1) * 30)/100) + ((parseFloat(profit_2) * 30)/100) + ((parseFloat(profit_3)* 40)/100)
                console.log(totalProfit)

                $("#grades").append(`<tr>
                                        <td class="bold">${ks}</td>
                                        <td>${data[k].info.group}</td>
                                        <td>${profit_2}</td>
                                    </tr>`)
        })
                $("#extra-info").append(`
                                    <tr>
                                        <td>Puesto</td>
                                        <td>${totalProfit}</td>
                                    </tr>
                                        `)
})
    }
})





/*
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('.toPdf').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});
*/
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
}
$('#cmd').click(function () {
    html2canvas($(".mainpdf"), {
        'elementHandlers': specialElementHandlers,
        onrendered: function (canvas){
            var img = canvas.toDataURL("image/png");
            var doc = new jsPDF()
            doc.addImage(img, "JPEG", 15, 5)
            doc.save("test.pdf")
        }
    })
});

$('#dgp').click(function () {
    $(".mainpdf").remove()
    setTimeout(function(){
        html2canvas($(".observationspdf"), {
            'elementHandlers': specialElementHandlers,
            onrendered: function (canvas){
                var img = canvas.toDataURL("image/png");
                var doc = new jsPDF()
                doc.addImage(img, "JPEG", 5, 5)
                doc.save("test.pdf")
            }
        })
    }, 1000)
    
});


    