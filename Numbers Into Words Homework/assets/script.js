let numberInput = $("input").first();
// console.log(numberInput);
let numToWords = $("input").last();
// console.log(numToWords);
let myButton = $("button").first();
// console.log(myButton);

let oneNumber = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let twoNumbers = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let fullNumbers = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];



function convertation(number) {
    if (number === "0") {
        return "Zero"
    }
    else if (number < 0) {
        alert("Sorry Mate But Negative Numbers are NOT Supported!")
    }
    else if (isNaN(number)) {
        alert("Sorry Mate, but you can't write characters in this input :)!!")
    }
    else {
        return convertMilion(number);
    }
};

function convertMilion(number) {
    if (number >= 1000000) {
        return convertMilion(Math.floor(number / 1000000)) + " million " + convertThousand(number % 1000000);
    } else {
        return convertThousand(number);
    }
};

function convertThousand(number) {
    if (number >= 1000) {
        return convertThousand(Math.floor(number / 1000)) + " thousand " + convertHundred(number % 1000);
    } else {
        return convertHundred(number);
    }
};

function convertHundred(number) {
    if (number > 99) {
        return oneNumber[Math.floor(number / 100)] + " hundred " + convertTens(number % 100);
    } else {
        return convertTens(number);
    }
};

function convertTens(number) {
    if (number < 10) {
        return oneNumber[number];
    }
    else if (number >= 10 && number < 20) {
        return twoNumbers[number - 10];
    } else {
        return fullNumbers[Math.floor(number / 10)] + " " + oneNumber[number % 10];
    }
};


myButton.click(function () {
    numToWords.val(convertation(numberInput.val()))
});

