// console.log("connected");

// ********************  Task 1 ********************

// function testNumber (number){
//     return new Promise((resolve, reject) =>{
//         if(number <= 10){
//             reject(`The Number you entered is ${number} and it must be greater then 10!`)
//         }else{
//             setTimeout(() =>{
//                 resolve(`The Number you entered is ${number} and it's greater then 10!`)
//             },2000);

//         };
//     });
// };

// Test Print 1

// testNumber(2)
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(err => console.log(err))

// Print 2 

// const runMyfunction = async (number)  => {
//     try {
//         console.log(await testNumber(number));
//     }catch (error){
//         console.log(error);
//     };
// };

// runMyfunction(44);


// ********************  Task 2 ********************

let fruits = ["banana", "mango", "peach", "ananas", "strawberry", "blueberry"];
// console.log(fruits);

// Function One ********************* Capitalize
function checkString(string) {
    return string !== String
};

function caps(array) {
    return array.map(fruit => { return fruit.toUpperCase() })
};

const isNotString = (currentValue) => currentValue === String(currentValue);
// console.log(fruits.every(isNotString));

// Vo ovaa funkcija go dobiv  i vtoroto baranje od Task 2 bez dopolnitelno da pravam uste edna funkcija.

// let allToCaps = (array) => {
//     return new Promise((resolve, reject) =>{
//         if (fruits.every(isNotString) === false || fruits.length <= 1){
//             reject("There is smth else in the array")
//         }else{
//             setTimeout(() => {
//                 resolve(caps(array.sort()))

//             },2000)

//         }
//     })
// };

let allToCaps = (array) => {
    return new Promise((resolve, reject) => {
        if (fruits.every(isNotString) === false) {
            reject("There is smth else in the array")
        } else {
            setTimeout(() => {
                resolve(caps(array))

            }, 2000)

        }
    })
};

// Test Print this function

// const allCapitalized = async (array) => {
//     try {
//         console.log(await allToCaps(array));
//     } catch (error) {
//         console.log(error);
//     };
//     console.log(`Everything is done in ${Math.round(performance.now())} ms`)
// };

// allCapitalized(fruits)


// Function Two ********************* Sorting

let sortinArray = (array) => {
    return new Promise((resolve, reject) => {
        if (fruits.every(isNotString) === false || array.length <= 1) {
            reject("There are not enough words in the array!")
        } else {
            setTimeout(() => {
                resolve(array.sort())

            }, 2000)

        }
    })
};

// Test Print 

// const allSorted = async (array) => {
//     try {
//         console.log(await sortinArray(array));
//     } catch (error) {
//         console.log(error);
//     };
//     console.log(`Everything is done in ${Math.round(performance.now())} ms`)
// };

// allSorted(fruits);

// Final Print 

async function showArrayAsync(array) {
    try {
        const allCapita = await allToCaps(array)
        //    console.log(await allToCaps(array))
        console.log(await sortinArray(allCapita))
    } catch (err) {
        console.log(err);
    };
    console.log(`Everything is done in ${Math.round(performance.now())} ms`)
};
showArrayAsync(fruits);