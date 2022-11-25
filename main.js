var nameError = document.getElementById("name-error")
var emailError  = document.getElementById("mail-error")
var pswError = document.getElementById("psw-error")
var submitError = document.getElementById("submit-error");


function validateName(){ 
  var name = document.getElementById("name").Value;
if(name.length == 0){
    nameError.innerHTML = "Name is required";
    return false;

}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
  
    nameError.innerHTML = "write full name";
    return false;
}

nameError.innerHTML = "Name is fine";
    return true;
}



