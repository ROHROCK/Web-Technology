<?php
require_once "connection.php";
$id = $_GET['removeRow'];
$q = "delete from emp where id=".$id;
$result = mysqli_query($con,$q);
?>