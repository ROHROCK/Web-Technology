<?php
require_once "connection.php";
$id = $_GET['id'];
$name = $_GET['updateName'];
$phoneNumber = $_GET['updateNumber'];
$email = $_GET['updateEmail'];

$q = "UPDATE emp SET name = '".$name."',phone = ".$phoneNumber.",email='".$email."'WHERE ID ='".$id."';";
echo $q;
$result = mysqli_query($con,$q);
?>