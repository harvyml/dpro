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
