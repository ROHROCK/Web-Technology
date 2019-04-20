<?php

require_once "connection.php";
$name = $_GET['name'];
$email = $_GET['email'];
$phoneNumber = $_GET['number'];

$q = "insert into emp(name,email,phone) values('".$name."','".$email."',$phoneNumber);";
$result = mysqli_query($con,$q);

?>