	//Excel
$("#students-info").on('click', requestStudents);

function requestStudents(){
	$("#students-table").table2excel({
       name: "Estudiantes",
       exclude: ".noExl",
       filename: "estudiantes.xls"
   })
}
