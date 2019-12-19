let myDiv = document.getElementById("test");
let myLastParagraph = myDiv.lastElementChild;
// let secondChild = document.getElementsByTagName("p")
// console.log(secondChild);
// console.log(myLastParagraph);
// Koga probav vaka da go selektiram spored zakomentiranoto gore ne mi uspevase. Pa precizirav so ID
function ChickenCalc() {
    setTimeout(() => {
        let input = prompt("Please Enter your Current weight");
        let chickenWeight = 0.5;
        let myChickenWeight = input * chickenWeight;
        console.log(input);
        // document.getElementById("answer").innerHTML = "" + "Your Chicken weight is: " + myChickenWeight + " kgs";
        if (isNaN(input)) {
            alert("Sorry You cannot write characters!");
        }
        else if (input <= 0) {
            alert("Invalid Input");
        }
        else {
            document.getElementById("answer").innerHTML = "" + "Your Chicken weight is: " + myChickenWeight + " kgs";
        }
    }, 2000);
}
ChickenCalc();  