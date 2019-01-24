<?php 
session_start();
   

if(isset($_SESSION['codEstu'])){

	$codEstu = $_SESSION['codEstu'];

	include 'php/conexion.php';

	$traer = "SELECT * FROM estudiantes WHERE codEstu = $codEstu";

	$res = mysqli_query($conexion, $traer);

	while($all = mysqli_fetch_assoc($res)){
		$email = $all["email"];
		$tel = $all["telefonoEst"];
		$nom = $all["nombre"];
		$usuario = $all["usuario"];
		/*---- codEstu ya está definido ----*/
		$edad = $all["edad"];
		$madre = $all["madre"];
		$padre = $all["padre"];

	} 
	
}


    
?>
