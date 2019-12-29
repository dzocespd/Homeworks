let inputText = $("input").first();
console.log(inputText);
let inputColor = $("input").last();
console.log(inputColor);
let myBtn = $("button");
console.log(myBtn);
let myColorPick = $("#colorPick");



// ATTEMPT #1


inputColor.keypress(function (key) {
    if (key.charCode <= 48 || key.charCode <= 57) return false;

}); // Probav nekoja restrikcija da napravam za znacite, no ipak nekoj ne gi fakja.

myBtn.click(function () {

    if (Number(inputColor.val())) {
        alert("Sorry Mate you can't write number in the input of colors!")
    }
    else {
        myBtn.after(`<br><br><h3 style="color: ${inputColor.val()};">${inputText.val()} </h3>`)
    }
    console.log(inputColor.val())
});


//ATTEMPT #2 Uncomment input type: color and label for colorpicker in HTML if you want to test this one!



// myBtn.click(function(){
//     myBtn.after(`<br><br><h3 style="color: ${myColorPick.val()};">${inputText.val()} </h3>`)
// })