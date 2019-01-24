 $(document).ready(function(){
    $('#modal2').modal();
     $('.parallax').parallax();
     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
      $('select').formSelect();
      $('ul.tabs').tabs();
      $('.sidenav').sidenav();
      $('.collapsible').collapsible();

//PDF
$("#boletin-first-period-pdf").click(function(){
  var doc = new jsPDF()

  var toPdf = $("#first-period-table").text()
  doc.text(20, 20, toPdf)
  doc.save("Boletin-Primer-Periodo.pdf")
})

//Excel
var BoletinExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()

$("#BoletinExcel-first-period").on('click', requestDescargar_1);
$("#BoletinExcel-second-period").on('click', requestDescargar_2);
$("#BoletinExcel-third-period").on('click', requestDescargar_3);

function requestDescargar_1(){
BoletinExcel('first-period-table', 'BoletinExcel')
}

function requestDescargar_2(){
BoletinExcel('second-period-table', 'BoletinExcel')
}

function requestDescargar_3(){
BoletinExcel('third-period-table', 'BoletinExcel')
}
 });

 
