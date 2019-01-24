var arrayChart = []
var arrayTotal = {
  f:{},
  s: {},
  t: {}
}
var arrayToChart = []
var cdp = 0

firebase.auth().onAuthStateChanged(user => {
  if(user){
    firebase.database().ref("la-presentacion-el-paraiso/users").once("value", snap => {
      var studentsLength = (Object.keys(snap.val()).length)
      var keys = Object.keys(snap.val())
      var data = snap.val()
      $(".sendData").click(sendAverageToDB())
      //Second way
      function sendAverageToDB(average){
        keys.forEach(userKey => {
          var userKeys = Object.keys(data[userKey].grades)
          console.log(userKeys)
          userKeys.forEach((subject) => {
            let refGrade = data[userKey].grades[subject]
            //First Period
            var averageFirstPeriod = (parseFloat(refGrade.nupp) +
                                     parseFloat(refGrade.ndpp) +
                                     parseFloat(refGrade.ntpp) +
                                     parseFloat(refGrade.ncpp) +
                                     parseFloat(refGrade.ncipp) +
                                     parseFloat(refGrade.nsepp) +
                                     parseFloat(refGrade.nsipp) +
                                     parseFloat(refGrade.nopp) +
                                     parseFloat(refGrade.auto_1) +
                                     parseFloat(refGrade.coe_1)) / 10
            //Second Period
            var averageSecPeriod = (parseFloat(refGrade.nusp) +
                                     parseFloat(refGrade.ndsp) +
                                     parseFloat(refGrade.ntsp) +
                                     parseFloat(refGrade.ncsp) +
                                     parseFloat(refGrade.ncisp) +
                                     parseFloat(refGrade.nsesp) +
                                     parseFloat(refGrade.nsisp) +
                                     parseFloat(refGrade.nosp) +
                                     parseFloat(refGrade.auto_2) +
                                     parseFloat(refGrade.coe_2)) / 10
            //Third Period
            var averageThirdPeriod = (parseFloat(refGrade.nutp) +
                                     parseFloat(refGrade.ndtp) +
                                     parseFloat(refGrade.nttp) +
                                     parseFloat(refGrade.nctp) +
                                     parseFloat(refGrade.ncitp) +
                                     parseFloat(refGrade.nsetp) +
                                     parseFloat(refGrade.nsitp) +
                                     parseFloat(refGrade.notp) +
                                     parseFloat(refGrade.auto_3) +
                                     parseFloat(refGrade.coe_3)) / 10

            console.log(`${subject}: primer Periodo: ${averageFirstPeriod} \n
                                     segundo Periodo: ${averageSecPeriod} \n
                                     Tercer Periodo ${averageThirdPeriod}`)
            
            arrayChart.push({
              [subject]: averageFirstPeriod
            })
            //console.log(arrayChart)
          })
        })
        //completeAverage()
      }

      /*function completeAverage(){
        var arrayKeys = []
        var arraySubs = []
        var objTotalAverage = {}
        var multi = 0;
        var iterator = arrayChart.keys(); 
        for (let key of iterator) {
          //console.log(key); // expected output: 0 1 2
          let sub = Object.keys(arrayChart[key])
          arraySubs.push(sub)
          var value = arrayChart[key][sub]
          console.log(sub.toString())

              if(sub.indexOf("matematica") != -1){
              arrayKeys.push(key)
              let keysLength = arrayKeys.length
              multi += value
              var totalAverage = multi / keysLength
              objTotalAverage[sub] = totalAverage
              console.log(objTotalAverage)
            }
          //For Math
          
        }


      }*/
      //console.log(keys, snap.val())
      //beginning of first way
      
      keys.forEach(k => {
        var subjects = Object.keys(data[k].grades)
        subjects.forEach(s => {
          var des = data[k].grades[s]
          var grades = Object.keys(data[k].grades[s])
          var info = data[k].info
          var total1 = 0;
          //var score = data[k].grades[s][g]
          //console.log(s)
          //arrayChart = [[k], [s], [des]]
          //console.log(arrayChart[0])  

          //10-2 Chart
          if(s == "Catedra_de_Paz" || s == "matematica" || s == "quimica" && info.group == "10-2"){
            arrayChart = [[k], [s], [des], [info]]
            //console.log(arrayChart)  
            //console.log(s)
            des = Object.values(arrayChart[2])
            var multiplication1 = 0;
            var multiplication2 = 0;
            var multiplication3 = 0;
            des.forEach(o => {
              var average = Object.keys(o)
              average.forEach(l => {
                //-------------- first three grades --------------------
                var group = arrayChart[3][0].group
                let nutp = arrayChart[2][0].nutp
                let ndtp = arrayChart[2][0].ndtp
                let nttp = arrayChart[2][0].nttp
                let nctp = arrayChart[2][0].nctp
                //console.log(o, l.length)
                  if(nutp || ndtp || nttp || nctp){
                    //console.log(nutp, ndtp, nttp, nctp)
                    //First Period
                    multiplication1 += parseFloat(o.nupp) + parseFloat(o.ndpp) + parseFloat(o.ntpp) + parseFloat(o.ncpp) + parseFloat(o.ncipp) + parseFloat(o.nsepp) + parseFloat(o.nsipp) + parseFloat(o.nopp)
                    var numberKeys = Object.keys(arrayChart[2][0]).length
                    total1 = multiplication1 / numberKeys / 8
                    total1 = parseFloat(total1).toFixed(2)
                    //Second Period
                    multiplication2 += parseFloat(o.nusp) + parseFloat(o.ndsp) + parseFloat(o.ntsp) + parseFloat(o.ncsp) + parseFloat(o.ncisp) + parseFloat(o.nsesp) + parseFloat(o.nsisp) + parseFloat(o.nosp)
                    total2 = multiplication2 / numberKeys / 8
                    total2 = parseFloat(total2).toFixed(2)
                    //Third Period
                    multiplication3 += parseFloat(o.nutp) + parseFloat(o.ndtp) + parseFloat(o.nttp) + parseFloat(o.nctp) + parseFloat(o.ncitp) + parseFloat(o.nsetp) + parseFloat(o.nsitp) + parseFloat(o.notp)
                    total3 = multiplication3 / numberKeys / 8
                    total3 = parseFloat(total3).toFixed(2)
                    
                    arrayTotal.f[s] = total1
                    arrayTotal.s[s] = total2
                    arrayTotal.t[s] = total3
                    //Change Nan Values
                    var keys = Object.keys(arrayTotal)
                    for(var i = 0; i < keys.length; i++){
                      var k = keys[i]
                      var sKeys = Object.keys(arrayTotal[k])
                      sKeys.forEach(o => {
                        var grade = arrayTotal[k][o]
                        if(isNaN(grade) == true){
                          //console.log(grade)
                          arrayTotal[k][o] = 2
                          console.log(arrayTotal[k][o])
                          console.log(arrayChart, arrayTotal)
                        }
                      })
                    }
                    console.log(arrayChart)
                    //-----------------------
                    //console.log(total1, arrayChart)
                    //console.log(arrayTotal)
                  }
              })
            })
          }
        })
      })
      //Reset value of subjects 
      
      //console.log(cdp)
      
      //End of first way


    })
  }
})

      
      setTimeout(function(){
        google.charts.load('current', {'packages':['line']});
        google.charts.setOnLoadCallback(drawChart);  
      }, 2000)//Charts
      

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Month');  
      data.addColumn('number', 'Matematica'); 
      data.addColumn('number', 'Catedra_de_Paz');
      data.addColumn('number', 'quimica');


      data.addRows([
        [new Date(2018, 7), parseFloat(arrayTotal.f.matematica),  parseFloat(arrayTotal.f.Catedra_de_Paz), parseFloat(arrayTotal.f.quimica)],
        [new Date(2018, 11),  parseFloat(arrayTotal.s.matematica),  parseFloat(arrayTotal.s.Catedra_de_Paz), parseFloat(arrayTotal.s.quimica)],
        [new Date(2019, 3),  parseFloat(arrayTotal.t.matematica),  parseFloat(arrayTotal.t.Catedra_de_Paz), parseFloat(arrayTotal.t.quimica)]
      ]);

      var options = {
        chart: {
          title: 'Asignaturas Importantes nivel 10',
          subtitle: 'De 0 a 5'
        },
        width: 600,
        height: 600
      };

      var chart = new google.charts.Line(document.getElementById('chart_div'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
