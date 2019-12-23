let inputOne = document.getElementById("textOne");
let myBtn = document.getElementById("myBtn");
let myParag = document.getElementById("myParagraph");
let mySelect = document.getElementById("mySelect");
let secondPara = document.getElementById("secondPara");

// Example #1

function Animals(pet, name, kind){
    this.pet = pet;
    this.name = name;
    this.kind = kind;
    this.printResults = testAnimals() 
 
};
let dog = new Animals("Dog", "Kim", "Streeter");
let cat = new Animals("Cat", "Riki", "Persian");
let bird = new Animals("Bird", "Tufi", "Vrapce");
let cow = new Animals("Cow", "Stojna", "Milka");


function testAnimals (){
    myBtn.addEventListener("click", function(){
        if (mySelect.value === "Dog"){
            myParag.innerHTML = `<li>Pet is: ${dog.pet} <li> Name of the ${dog.pet} is: ${dog.name} <li> The Kind of the ${dog.pet} is: ${dog.kind}`
            secondPara.innerHTML = `${dog.pet} says: Woof Woof `;
        }
        else if (mySelect.value === "Cat"){
            myParag.innerHTML = `<li>Pet is: ${cat.pet} <li> Name of the ${cat.pet} is: ${cat.name} <li> The Kind of the ${cat.pet} is: ${cat.kind}`
            secondPara.innerHTML = `${cat.pet} says: Meow Meow `;
        }
        else if (mySelect.value === "Bird"){
            myParag.innerHTML = `<li>Pet is: ${bird.pet} <li> Name of the ${bird.pet} is: ${bird.name} <li> The Kind of the ${bird.pet} is: ${bird.kind}`
            secondPara.innerHTML = `${bird.pet} says: Tweak Tweak `;
        }
        else if (mySelect.value === "Cow"){
            myParag.innerHTML = `<li>Pet is: ${cow.pet} <li> Name of the ${cow.pet} is: ${cow.name} <li> The Kind of the ${cow.pet} is: ${cow.kind}`
            secondPara.innerHTML = `${cow.pet} says: Tweak Tweak `;
        }
        else {
            myParag.innerHTML = "What Does the Fox SAY?!";
            secondPara.innerHTML = `<iframe width="350" height="315" src="https://www.youtube.com/embed/jofNR_WkoCE"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
    });
};


// Example #2

// let animal = {
//     pet: "Dog",
//     name: "Kim",
//     kind: "Streeter",
//     expression: testAnimal()
// };

// let animalCat = {
//     pet: "Cat",
//     name: "Riki",
//     kind: "Persion",
//     expression: testAnimal()
// }
// let animalBird = {
//     pet: "Bird",
//     name: "Tufi",
//     kind: "Vrapce",
//     expression: testAnimal()
// }
// let animalCow = {
//     pet: "Cow",
//     name: "Stojna",
//     kind: "Milka",
//     expression: testAnimal()
// }
// console.log(animal);



// function testAnimal() {
//     myBtn.addEventListener("click", function () {
//         if (mySelect.value === "Dog") {
//             myParag.innerHTML = "<ul>Pet is: " + Animal.dog + "</ul> " + "<ul> The Kind is: " + animal.kind + "</ul> "
//              + "<ul>The name of this lovely dog is " + animal.name + "</ul>";
//             secondPara.innerHTML = "<ul>The Dog says: " + " Woof Woof</ul>";
//         }
//         else if (mySelect.value === "Cat") {
//             myParag.innerHTML = "<ul>Pet is: " + animalCat.pet + "</ul> " + "<ul>The name of this lovely cat is " + animalCat.name + "</ul> "
//              + "<ul> The Kind is: " + animalCat.kind + "</ul>";
//             secondPara.innerHTML = "<ul>The Cat says: " + " Meow Meow</ul>";
//         }
//         else if (mySelect.value === "Cow") {
//             myParag.innerHTML ="<ul>Pet is: " + animalCow.pet + "</ul> " + "<ul>The name of this lovely cow is " + animalCow.name + "</ul> "
//              + "<ul> The Kind is: " + animalCow.kind + "</ul>";
//             secondPara.innerHTML = "<ul>The Cow says: "+"Moo Moo</ul>";
//         }
//         else if (mySelect.value === "Bird") {
//             myParag.innerHTML ="<ul>Pet is: " + animalBird.pet + "</ul> " + "<ul>The name of this lovely bird is " + animalBird.name + "</ul> "
//              + "<ul> The Kind is: "+animalBird.kind + "</ul>";
//             secondPara.innerHTML = "<ul>The Bird sings: "+"Tweak Tweak</ul>";
//         }
//         else {
//             myParag.innerHTML = "What Does the Fox SAY?!";
//             secondPara.innerHTML = `<iframe width="350" height="315" src="https://www.youtube.com/embed/jofNR_WkoCE"
//              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//         }
//     })
// };


