let myTextView = $("#myTextView").first();
console.log(myTextView);

let equal = $(".equalBtn");
console.log(equal)

$(".buttonNumber").click(function(){
    myTextView.val(myTextView.val() + $(this).attr("name"));
});

$(".operator").click(function(){
    let operName = $(this).attr("name");
    if (operName === "substr" && myTextView.val().length === 0){
        myTextView.val("-");
    }else {
        myTextView.attr("name", myTextView.val());
        myTextView.val("");
        equal.removeClass();
        equal.addClass(operName);   
    }
});

equal.click(function(){
    let firstInput = parseFloat(myTextView.attr("name"));
    let secondInput = parseFloat(myTextView.val());
    if (equal.hasClass("add")){
        myTextView.val(firstInput + secondInput);
    }else if (equal.hasClass("substr")){
        myTextView.val(firstInput - secondInput);
    }else if (equal.hasClass("multiply")){
        myTextView.val(firstInput * secondInput);
    }else if (equal.hasClass("divide")){
        myTextView.val(firstInput / secondInput);
    }
});

$("#clear").click(function(){
    myTextView.val("");
});

$("#bckSpace").click(function(){
    myTextView.val(myTextView.val().slice(0, myTextView.val().length -1));
});
















