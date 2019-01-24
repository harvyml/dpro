<?php 

include "conexion.php";

$codigo = $_POST["codigo"];
$clave = $_POST["clave"];

if(isset($_SESSION["codigo"]) && isset($_SESSION["clave"])){
	$conexion;

	$consulta = "SELECT * FROM maestros WHERE codigo = $codigo AND clave = $clave";

	$resultado = mysqli_query($conexion, $consulta);

	if(mysqli_num_rows($resultado) > 0){
		
		header("location: account.php");
		
	}else{
		echo "Tu usuario No existe en la base de datos, intentalo de nuevo";
	}
}

?>