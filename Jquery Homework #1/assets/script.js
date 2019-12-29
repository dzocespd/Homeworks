let myInput = $("#firstInput");
console.log(myInput);
let myBtn = $("button");

// myBtn.first().click(function(){
//     myInput.first().after("Hello " + myInput.val()+ " " + "And Have a Nice Holidays!")
// });

myBtn.first().click(function(){
 myInput.first().after(`<h1 style="color: blue;">Hello ${myInput.val()} and have a lovely holidays!</h1>`).css("color", "red");

});