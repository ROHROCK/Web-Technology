// load the table from the database
$(document).ready(function() {
	$.get("display.php", function(data, status) {
		$("#tableId").html(data);
	})
});
// to remove data form the table 
$("body").on("click", ".remove-item", function() {
	var id = $(this).parent("td").data("id");
	$.get("remove.php/?removeRow=" + id);
	$.get("display.php", function(data, status) {
		$("#tableId").html(data);
		if(status == "success"){
			console.log("Successfuly updated !");
			$("#status-div").html("<div id='alert-div' class='alert alert-warning'><strong>Successfully Deleted</strong></div>").delay(2000).fadeOut(function(){
			$("#alert-div").remove();
			document.getElementById("status-div").style="";
			});
		}
	})
});
// to update data from the table
$("body").on("click",".edit-item",function(){
	let id = $(this).parent("td").data("id");
	let name = $(this).parent("td").prev("td").prev("td").prev("td").find('input').val();
	let email = $(this).parent("td").prev("td").prev("td").find('input').val();
	let phone = $(this).parent("td").prev("td").find('input').val();
	let query = "update.php/?id="+id+"&updateName="+name+"&updateNumber="+phone+"&updateEmail="+email;
	$.get(query,function(data,status){
		console.log(query);
		if(status == "success"){
			console.log("Successfuly updated !");
			$("#status-div").html("<div id='alert-div'class='alert alert-success'><strong>Successfully Updated</strong></div>").delay(2000).fadeOut(function(){
			$("#alert-div").remove();
			document.getElementById('status-div').style ="";
			});
		}
	});
	
})
// function to validate data entered by the user
function validationFun(email, phoneNumber) {
	var regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
	var flag = 0;
	var regExpPhone = /\d{10}/;
	if (regExpEmail.test(email)) {
		flag++;
	} else {
		alert("Entered Email is Invalid !");
	}
	if (regExpPhone.test(phoneNumber)) {
		flag++;
	} else {
		alert("Entered Phone number is Invalid !");
	}
	// To accept the inputs by the user 
	if (flag == 2) {
		return true;
	}
	return false;
}
const url = 'add.php';
const form = document.querySelector('form');
// to send data from server
form.addEventListener('submit', e => {
	e.preventDefault()
	// store the data entered 
	var name = document.forms[0].elements[0].value;
	var email = document.forms[0].elements[2].value;
	var phoneNumber = document.forms[0].elements[1].value;
	var flag = false;
	flag = validationFun(email, phoneNumber);
	if (flag) {
		var param = '?name=' + name + '&number=' + phoneNumber + '&email=' + email;
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", url + param, false); // false for synchronous request
		xmlHttp.send(null);
		$.get("display.php", function(data, status) {
			$("#tableId").html(data);
			if(status == "success"){
			console.log("Successfuly updated !");
			$("#status-div").html("<div id='alert-div' class='alert alert-success'><strong>Successfully Added</strong></div>").delay(2000).fadeOut(function(){
			$("#alert-div").remove();
			document.getElementById("status-div").style="";
			});
		}
		});
	} else {
		console.log("Failed To Upload due to invalid data");
	}
})