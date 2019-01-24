<?php 

include 'inc/session_start.php';


if( $pagina = "user_account" or $pagina = "chat"){
    session_start();
} 

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <link rel="stylesheet" href="css/estilos.css">
   <link rel="stylesheet" href="css/buscador.css">
   <link rel="stylesheet" href="css/estStyle.css">
   <link rel="stylesheet" href="css/header.css">
    
    <!-- icons materialize -->
   <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

   <?php if($pagina = "chat"){echo "<link rel='stylesheet' href='css/chat.css'>";}?>
   <?php if($pagina = "inserNotas"){echo "<link rel='stylesheet' href='css/inserNotas.css'>";}?>
   <link rel="stylesheet" href="../materialize/css/materialize.min.css">
   
    <!-- google icons -->
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <meta charset="UTF-8">
    <title>DG Diseños Web</title>
</head>
<body>
  <script src="js/jquery.min.js"></script>
  <script src="../materialize/js/materialize.min.js"></script>
   
  
   
      
      
      <header id="header-register">
       <nav class="nav nav-header" id="nav">
          
        
      <!-- muestra de nombre de usuario -->
       
      
      <ul>
            
            <li class="li-nav li-nav1">
            <a href="index.php" class="a-1 a-li-nav">Inicio</a>
            </li>
            
            <li class="li-nav"><a href='chat.php' class='a-2 a-li-nav'>Chat</a><a href='servicios.php' class='a-2 a-li-nav'>Servicios</a></li>
            
            <li class="li-nav"><a href="account.php" class="a-3 a-li-nav">Mi Cuenta</a></li>
            
            <li class="li-nav"><a href='registro.php' class='a-3 a-li-nav'>Noticias</a></li>


            <li class="li-nav"><?php if(isset($_SESSION["codEstu"])){} else{echo "<a class='login2' href='iniciar.php'>Login</a>";}?></li>
      </ul>
          
      <!-- fin de seccion de navegacion -->
      
          
      <a class="btn btn-floating hoverable" id="menu-icon" href="#modal1" data-target="modal1"><i class="material-icons">menu</i></a> 

      <p class="p-user"><?php if(isset($_SESSION["codEstu"])){echo $nom;}?></p>

        </nav>
        
        <!-- incluyo la version del nav para celulares -->

        <?php include 'modals/modal1.php';?>
        
        
        <!-- .p-user: Esta clase está definida en el codigo PHP -->
          
    
    
        
        
        
           
        
    </header>
