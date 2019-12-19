// PRVIOT HEADER

document.getElementById("myTitle").innerHTML = " " + " Hello, my name is Cortona!";
let paragraphsOne = document.getElementsByClassName("paragraph");
// console.log(paragraphsOne[0]);




// PRVITE DVA PARAGRAPHS
paragraphsOne[0].innerHTML = " " + "And I am not boring as people say ! ";
paragraphsOne[1].innerHTML = " " + " I am Kidding, I can be boring!";



// TEXT-OT
let secondText = document.getElementsByTagName("text");
secondText[0].innerHTML = " "  + " So that's why most people disable me!";
// console.log(secondText);




// POSLEDNIOT DIV I SELEKTIRANJE NA NEGOVITE HEADERS
let myDivs = document.getElementsByTagName("div");
// console.log(myDivs);
let lastDiv = myDivs[2];
// console.log(lastDiv);
let firstHeader = lastDiv.firstElementChild;
// console.log(firstHeader);
firstHeader.innerHTML = "Don't worry i am used to disabling! :)";

let secondHeader = firstHeader.nextElementSibling;
// console.log(secondHeader);
secondHeader.innerHTML = " With or without Cortona Windows is still good :)"

// POSTOJAT I DRUGI NACHINI NA SELEKTIRANJE NO VO MOMENTOT GI ISPROBUVAV I TESTIRAV OVIE :)