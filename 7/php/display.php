<?php

require_once "connection.php";

$q = "select * from emp";
$result = mysqli_query($con,$q);

echo '<table class="table table-bordered" >';
echo "<th>Id</th> <th>Name </th> <th>Email </th> <th>Phone </th> <th width='200px'>Action</th>";
while($row = mysqli_fetch_assoc($result)){
	echo '<tr> <td>'.$row['id'].'</td>';
	echo '<td><input type="text" value="'.$row['name'].'"/></td>';
	echo '<td><input type="text" value="'.$row['email'].'"/></td>';
	echo '<td><input type="text" value="'.$row['phone'].'"/></td>';
	echo '<td data-id="'.$row['id'].'"><input class="btn btn-danger remove-item" type="submit" value="Delete"/>
	<input class="btn btn-primary edit-item" type="submit" value="Edit"/>
	</td></tr>';
}
echo '</table>';
?>