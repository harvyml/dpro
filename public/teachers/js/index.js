$(function(){
	 $('.tabs').tabs();
	 $('.collapsible').collapsible();
	 $('select').formSelect();
	 $('.sidenav').sidenav();
	 // It has to be repeated: DON`T EREASE
         $("#con-rooms-show").click(function(){
               $(".con-rooms").show(400)
               $(".con-rooms").css("display", "block")
               alert("Clicked")
         })
	 //Function for moving the explaining sidebar while the user is scrolling
	 $("#seeker").on("keyup", function(){
		searchStudents()
	})

	function searchStudents() {
		// Declare variables
		var input, filter, ul, li, a1, a2, a3, i;
		input = document.getElementById('seeker');
		filter = input.value.toUpperCase();
		ul = document.getElementById("obs");
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

	 $(".room a").on("click", function(){
	 	var scroll = $(window).scrollTop()
	 	$(".description").addClass("descriptionAnimated")
	 	$(".description").removeClass("col")
	 })


	 $(".button-hide").on("click", function(){
	 	$(".description").hide()
	 	$(".con-notas").hide()
	 })

	 $(".export-to-excel-1").on("click", function(){
	 	$("#primero table").table2excel({
	 		filename: "primer periodo",
	 		exclude: ".noExl"
	 	})
	 })
	 $(".export-to-excel-2").on("click", function(){
	 	$("#segundo table").table2excel({
	 		filename: "primer periodo",
	 		exclude: ".noExl"
	 	})
	 })
	 $(".export-to-excel-3").on("click", function(){
	 	$("#tercero table").table2excel({
	 		filename: "primer periodo",
	 		exclude: ".noExl"
	 	})
	 })
})
