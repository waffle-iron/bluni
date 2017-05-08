<?php
$db = "bluni";
$host = "localhost";
$username = "root";
$password = "root";

if(!$conn = mysqli_connect($host,$username,$password,$db))
{
	echo 'Impossibile connettersi a MySql';
	die;
}

?>