$(document).ready(function(){
     $('#modal2').modal('open');
     $('.parallax').parallax();
     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
      $('select').material_select();
      $('ul.tabs').tabs();
      $('ul.tabs').tabs('select_tab', 'tab_id');
      $(".button-collapse").sideNav();

 });

 
