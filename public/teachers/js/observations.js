$(function(){

  $("#seeker-1").on("keyup", () => {
    seeker_1()
  })
  $("#seeker-2").on("keyup", () => {
    seeker_2()
  })
  $("#seeker-3").on("keyup", () => {
    seeker_3()
  })

  function seeker_1(){
    // Declare variables
    var input, filter, ul, li, a1, a2, a3, i;
    input = document.getElementById('seeker-1');
    filter = input.value.toUpperCase();
    ul = document.getElementById("obs-first-period");
    li = ul.getElementsByTagName('tr');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a1 = li[i].getElementsByTagName("td")[0];
        a2 = li[i].getElementsByTagName("td")[1];
        a3 = li[i].getElementsByTagName("td")[2];
        a4 = li[i].getElementsByTagName("td")[3];
        if (a1.innerHTML.toUpperCase().toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else if(a2.innerHTML.toUpperCase().toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else if(a3.innerHTML.toUpperCase().toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else if(a4.innerHTML.toUpperCase().toUpperCase().indexOf(filter) > -1){
        	li[i].style.display = "";
        }else{
          li[i].style.display = "none";
        }
    }
  }

  function seeker_2(){
    // Declare variables
    var input, filter, ul, li, a1, a2, a3, i;
    input = document.getElementById('seeker-2');
    filter = input.value.toUpperCase();
    ul = document.getElementById("obs-second-period");
    li = ul.getElementsByTagName('tr');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a1 = li[i].getElementsByTagName("td")[0];
        a2 = li[i].getElementsByTagName("td")[1];
        a3 = li[i].getElementsByTagName("td")[2];
        a4 = li[i].getElementsByTagName("td")[3];
        if (a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else if(a2.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else if(a3.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else if(a4.innerHTML.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = "";
        }else{
          li[i].style.display = "none";
        }
    }
  }

  function seeker_3(){
    // Declare variables
    var input, filter, ul, li, a1, a2, a3, i;
    input = document.getElementById('seeker-3');
    filter = input.value.toUpperCase();
    ul = document.getElementById("obs-third-period");
    li = ul.getElementsByTagName('tr');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a1 = li[i].getElementsByTagName("td")[0];
        a2 = li[i].getElementsByTagName("td")[1];
        a3 = li[i].getElementsByTagName("td")[2];
        a4 = li[i].getElementsByTagName("td")[3];
        if (a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else if(a2.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else if(a3.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else if(a4.innerHTML.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = "";
        }else{
          li[i].style.display = "none";
        }
    }
  }
})
