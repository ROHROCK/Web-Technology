<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Login in</title>
<link href=”css/bootstrap.min.css” rel=”stylesheet” type=”text/css” />
<script type=”text/javascript” src=”js/bootstrap.min.js”></script>
</head>
<body class="container">
 <button type="button" class="btn btn-primary">Primary <span class="badge">7</span></button> 
	<form action="LoginServ" method="post">
	<table>
	<tr>
		<td>Enter your name:</td>
		<td> <input type="text" name="username" required placeholder="Enter your name here" autocomplete="true"/><br>
		</td>
	</tr>
	<tr>	
		<td>Enter your password:</td>
		<td><input type="password" name="password" required placeholder="Enter your password here"/><br>
		</td>
	</tr>
	</table>
	<input class="btn btn-danger" type="submit" id="SubmitButton" value="Login"/>
	</form>
	
</body>
</html>