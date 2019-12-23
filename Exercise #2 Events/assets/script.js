let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let myPass = document.getElementById("password");
let eMail = document.getElementById("eMail");
let myBtn = document.getElementById("myBtn");
let result = document.getElementById("answer");





myBtn.addEventListener("click", function(){
    result.innerText = `Your Pesonal Informations are: 
    First Name: ${firstName.value}
    Last Name: ${lastName.value} 
    Your Password: ${myPass.value}
    Your E-mail: ${eMail.value}`
    
});

