$(function(){
	$('.modal').modal();
	$('.switch-edit').click(function() {
    var switchEdit = $(this);
    if ($(this).attr('href')) {
        $(this).removeAttr('href');
    } else {
        $(this).attr('href', "checked");
    }
});
	/*$("#switch-edit-teachers").click(function(){
		$(this).toggleClass("checked")
	})
	$("#switch-edit-admin").click(function(){
		$(this).toggleClass("checked")
	})*/

	$("#input-students-seeker").on("keyup", function(){
		searchStudents()
		searchStudentsToEdit()
	})
	$("#input-teachers-seeker").on("keyup", function(){
		searchTeachers()
		searchTeachersToEdit()
	})
	$("#input-admin-seeker").on("keyup", function(){
		searchAdmin()
		searchAdminToEdit()
	})

	function searchStudents() {
		// Declare variables
		var input, filter, ul, li, a1, a2, a3, i;
		input = document.getElementById('input-students-seeker');
		filter = input.value.toUpperCase();
		ul = document.getElementById("tbody-students-info");
		li = ul.getElementsByTagName('tr');

		// Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
				a1 = li[i].getElementsByTagName("td")[0];
				a2 = li[i].getElementsByTagName("td")[1];
				a3 = li[i].getElementsByTagName("td")[2];
				a4 = li[i].getElementsByTagName("td")[3];
				a5 = li[i].getElementsByTagName("td")[4];
				if (a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
						li[i].style.display = "";
				} else if(a2.innerHTML.toUpperCase().indexOf(filter) > -1){
						li[i].style.display = "";
				}else if(a3.innerHTML.toUpperCase().indexOf(filter) > -1){
						li[i].style.display = "";
				}else if(a4.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
				}else if(a5.innerHTML.toUpperCase().indexOf(filter) > -1){//JUST CHAGE THIS TO "a8.innerHTML.toUpperCase().indexOf(filter) > -1" IF YOU WANT A REALTIME SEARCHER
					li[i].style.display = "";
				}else{
					li[i].style.display = "none";
				}
		}
}

function searchStudentsToEdit(){
	// Declare variables
	var input, filter, ul, li, a1, a2, a3, i;
	input = document.getElementById('input-students-seeker');
	filter = input.value.toUpperCase();
	ul = document.getElementById("to-edit-students");
	li = ul.getElementsByTagName('tr');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
			a1 = li[i].getElementsByTagName("td")[0];
			a2 = li[i].getElementsByTagName("td")[1];
			a3 = li[i].getElementsByTagName("td")[2];
			a4 = li[i].getElementsByTagName("td")[3];
			a5 = li[i].getElementsByTagName("td")[4];
			if (a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else if(a2.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a3.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a4.innerHTML.toUpperCase().indexOf(filter) > -1){
				li[i].style.display = "";
			}else if(a5.innerHTML.toUpperCase().indexOf(filter) > -1){//JUST CHAGE THIS TO "a8.innerHTML.toUpperCase().indexOf(filter) > -1" IF YOU WANT A REALTIME SEARCHER
				li[i].style.display = "";
			}else{
				li[i].style.display = "none";
			}
	}
}

function searchTeachers(){
	var input, filter, ul, li, a1, a2, a3, i;
	input = document.getElementById('input-teachers-seeker');
	filter = input.value.toUpperCase();
	ul = document.getElementById("tbody-teachers-info");
	li = ul.getElementsByTagName('tr');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
			a1 = li[i].getElementsByTagName("td")[0];
			a2 = li[i].getElementsByTagName("td")[1];
			a3 = li[i].getElementsByTagName("td")[2];
			a4 = li[i].getElementsByTagName("td")[3];
			a5 = li[i].getElementsByTagName("td")[4];
			if (a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else if(a2.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a3.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a4.innerHTML.toUpperCase().indexOf(filter) > -1){
				li[i].style.display = "";
			}else if(a5.innerHTML.toUpperCase().indexOf(filter) > -1){//JUST CHAGE THIS TO "a8.innerHTML.toUpperCase().indexOf(filter) > -1" IF YOU WANT A REALTIME SEARCHER
				li[i].style.display = "";
			}else{
				li[i].style.display = "none";
			}
	}
}
function searchTeachersToEdit(){
	// Declare variables
	var input, filter, ul, li, a1, a2, a3, i;
	input = document.getElementById('input-teachers-seeker');
	filter = input.value.toUpperCase();
	ul = document.getElementById("to-edit-teachers");
	li = ul.getElementsByTagName('tr');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
			a1 = li[i].getElementsByTagName("td")[0];
			a2 = li[i].getElementsByTagName("td")[1];
			a3 = li[i].getElementsByTagName("td")[2];
			a4 = li[i].getElementsByTagName("td")[3];
			a5 = li[i].getElementsByTagName("td")[4];
			if (a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else if(a2.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a3.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a4.innerHTML.toUpperCase().indexOf(filter) > -1){
				li[i].style.display = "";
			}else if(a5.innerHTML.toUpperCase().indexOf(filter) > -1){//JUST CHAGE THIS TO "a8.innerHTML.toUpperCase().indexOf(filter) > -1" IF YOU WANT A REALTIME SEARCHER
				li[i].style.display = "";
			}else{
				li[i].style.display = "none";
			}
	}
}

function searchAdmin(){
	var input, filter, ul, li, a1, a2, a3, i;
	input = document.getElementById('input-admin-seeker');
	filter = input.value.toUpperCase();
	ul = document.getElementById("tbody-admin-info");
	li = ul.getElementsByTagName('tr');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
			a1 = li[i].getElementsByTagName("td")[0];
			a2 = li[i].getElementsByTagName("td")[1];
			a3 = li[i].getElementsByTagName("td")[2];
			a4 = li[i].getElementsByTagName("td")[3];
			a5 = li[i].getElementsByTagName("td")[4];
			if (a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else if(a2.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a3.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a4.innerHTML.toUpperCase().indexOf(filter) > -1){
				li[i].style.display = "";
			}else if(a5.innerHTML.toUpperCase().indexOf(filter) > -1){//JUST CHAGE THIS TO "a8.innerHTML.toUpperCase().indexOf(filter) > -1" IF YOU WANT A REALTIME SEARCHER
				li[i].style.display = "";
			}else{
				li[i].style.display = "none";
			}
	}
}
function searchAdminToEdit(){
	// Declare variables
	var input, filter, ul, li, a1, a2, a3, i;
	input = document.getElementById('input-admin-seeker');
	filter = input.value.toUpperCase();
	ul = document.getElementById("to-edit-admin");
	li = ul.getElementsByTagName('tr');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
			a1 = li[i].getElementsByTagName("td")[0];
			a2 = li[i].getElementsByTagName("td")[1];
			a3 = li[i].getElementsByTagName("td")[2];
			a4 = li[i].getElementsByTagName("td")[3];
			a5 = li[i].getElementsByTagName("td")[4];
			if (a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else if(a2.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a3.innerHTML.toUpperCase().indexOf(filter) > -1){
					li[i].style.display = "";
			}else if(a4.innerHTML.toUpperCase().indexOf(filter) > -1){
				li[i].style.display = "";
			}else if(a5.innerHTML.toUpperCase().indexOf(filter) > -1){//JUST CHAGE THIS TO "a8.innerHTML.toUpperCase().indexOf(filter) > -1" IF YOU WANT A REALTIME SEARCHER
				li[i].style.display = "";
			}else{
				li[i].style.display = "none";
			}
	}
}
})
