<?php 
include 'php/conexion.php';

	

$cons = "SELECT * FROM estudiantes";
$res = mysqli_query($conexion, $cons);

while ($users = mysqli_fetch_assoc($res)) {

			
			$username = $users["nombre"];
			$usercode = $users["codEstu"];

			?>
		
		<div class="out-users teal lighten-2">
			<a href="pchat.php?id=<?php echo $usercode; ?>" ><?php echo $username; ?></a>
		</div>
			<?php 
}

	




?>



<style>
	.out-users{
	cursor: pointer;
	color: black;
	margin-top: 10px;
	text-align: center;
}

.out-users a{
	color: white;
	line-height: 50px;

}

	

</style>