let mySpace = document.getElementById("myDiv");

let numbers = [ 100 , 73419, 10038, 75, 20, 1, 23, 75, 1259];
let total = 0;
function printingNumbers () {
    // mySpace.innerHTML = ""; Ova varijabla ja zakomentirav posto DA vidov deka mi go brise <h1> od html-ot :) 
    mySpace.innerHTML += "<ul>";
    for ( let i = 0; i < numbers.length; i++) {
        mySpace.innerHTML += `<li>${numbers[i]} </li>`
    }
    mySpace.innerHTML += "</ul>";
}
printingNumbers();

let header = document.getElementById("headerOne");
let sndHeader = document.getElementById("headerTwo");

header.innerHTML = ` The sum of the numbers above is :`
function sumNumbers () {
    
    for ( let i = 0; i < numbers.length; i ++){
        header.innerHTML = `The sum of the numbers above is : ${total += numbers[i]}`;
        sndHeader.innerHTML = `How I got here : ${numbers[0]} + ${numbers[1]} + ${numbers[2]} + ${numbers[3]} + ${numbers[4]} 
        + ${numbers[5]} + ${numbers[6]}+${numbers[7]} + ${numbers[8]} = ` + `${total}`;
    }
}
/* Sigurno postoi po dobar nachin od ovoj za da prikazesh kako si dosol do zbirot od nizata.
ke se potrudam da najdam i drug nachin :D */
