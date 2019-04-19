// function to validate data entered by the user
function validationFun(){
    // store the data entered 
    var email = document.forms[0].elements[2].value;
    var phoneNumber = document.forms[0].elements[1].value;
    var flag = 0;
    // alert(document.forms[0].elements[1].value);
    var regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regExpPhone = /\d{10}/;
    if(regExpEmail.test(email)){
        flag++;
    }else{
        alert("Entered Email is Invalid !");
    }
    if(regExpPhone.test(phoneNumber)){
        flag++;
    }else{
        alert("Entered Phone number is Invalid !");
    }
    // To accept the inputs by the user 
    if(flag == 2){
        alert("data successfully added");
    }
}