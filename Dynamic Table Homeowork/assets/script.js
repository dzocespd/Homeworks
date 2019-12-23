let myRows = document.getElementById("rows");
let myColumns = document.getElementById("columns");
let myBtn = document.getElementById("myBtn");
let myDiv = document.getElementById("divTest");


myBtn.addEventListener("click", function () {
    if (isNaN(myRows.value + myColumns.value)) {
        alert("Sorry Invalid Input Please Write Numbers!");
    };

    let myTable = ("<table border=1>");
    for (i = 0; i < myRows.value; i++) {
        myTable += "<tr>";
        for (j = 0; j < myColumns.value; j++) {
            myTable += "<td width=70 height=70>" + "Column: " + j + " Row: " + i + "</td>";
        }
        myTable += "</tr>";
    }
    myTable += "</table>"
    myDiv.innerHTML = myTable;

});

