let mySelect = document.getElementById("mySelect");
let myParagraph = document.getElementById("myParagraph");
let myParagraphTwo = document.getElementById("myParagraphTwo");
let myBtn = document.getElementById("myButton");

function Books(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.printInfo = bookInfo();

    console.log(title);
};

let harryPotterHbP = new Books("Harry Potter and the Half Blood Prince", "J.K. Rowling", false);
let theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", true);
let theWitch = new Books("The Witch", "Venko Andonovski", true);
let joseMou = new Books("Jose Mourinho: The Art of Winning", "Andrew J. Kirby", false);

function bookInfo() {
    myBtn.addEventListener("click", function () {
        if (mySelect.value === "Harry Potter and The Half Blood Prince") {
            myParagraph.innerHTML = `<li> Title of the book: "${harryPotterHbP.title}" 
            <li> Author of the book: <a href="https://www.jkrowling.com/about/" target="blank"> ${harryPotterHbP.author}.</a>`
            if (harryPotterHbP.readingStatus === true) {
                myParagraphTwo.innerHTML = `Well done for reading such a great book dude! :)`
            }
            if (harryPotterHbP.readingStatus === false) {
                myParagraphTwo.innerHTML = `Shame on you for not reading such a book :/... Atleast watch the movies haha :D`
            };
        };
        if (mySelect.value === "The Hobbit") {
            myParagraph.innerHTML = `<li> Title of the book: "${theHobbit.title}"
            <li> Author of the book: <a href="https://en.wikipedia.org/wiki/J._R._R._Tolkien" target="blank"> ${theHobbit.author}.</a>`
            if (theHobbit.readingStatus === true) {
                myParagraphTwo.innerHTML = `Middle Earth stories are always good! Well Done!!! :)`
            }
            if (theHobbit.readingStatus === false) {
                myParagraphTwo.innerHTML = `Shame for you bro, go to the book store and get the book! ASAP`
            };
        };
        if (mySelect.value === "The Witch") {
            myParagraph.innerHTML = `<li> Title of the book: "${theWitch.title}" 
            <li> Author of the book: <a href="https://en.wikipedia.org/wiki/Venko_Andonovski" target="blank"> ${theWitch.author}.</a>`
            if (theWitch.readingStatus === true) {
                myParagraphTwo.innerHTML = `I don't usually read books, but this one I loved it :)`
            }
            if (theWitch.readingStatus === false) {
                myParagraphTwo.innerHTML = `One of the best Macedonian Authors! You must read this book!!!`
            };
        };
        if (mySelect.value === "Jose Mourinho: The Art of Winning") {
            myParagraph.innerHTML = `<li> Title of the book: "${joseMou.title}" 
            <li> Author of the book: <a href="https://www.amazon.com/Andrew-Kirby/e/B01NH2UZAS%3Fref=dbs_a_mng_rwt_scns_share" target="blank"> ${joseMou.author}.</a>`
            if (joseMou.readingStatus === true) {
                myParagraphTwo.innerHTML = `Jose Mourinho Jose Mourinhoo!!! :)`
            }
            if (joseMou.readingStatus === false) {
                myParagraphTwo.innerHTML = `If you are not fan of Mourinho then your team haven't won the League Title for long time.. Losers :D`
            };
        };
    });
};