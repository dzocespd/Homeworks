// console.log("connected");

// ----------------AJAX CALLS FOR PLANETS----------------

// PLANET 1***

$("button").on("click", () => {

    $.ajax({
        url: "https://swapi.co/api/planets/?page=1",
        success: response => {
            pageOnePlanets(response)
        },
        error: error => {
            errorResult(error)
        }
    });
});


// PLANET 2***

let next10planets = () => {
$.ajax({
    url: "https://swapi.co/api/planets/?page=2",
    success: response => {
        pageTwoPlanets(response)
    },
    error: error => {
        errorResult(error)
    }
});
};

// PREVIOUS PLANET*** (OVA MI TREBA ZA ONCLICK="" PODOLU)

let prev10Planets = () => {
    $.ajax({
        url: "https://swapi.co/api/planets/?page=1",
        success: response => {
            pageOnePlanets(response) 
        },
        error: error => {
            errorResult(error)
        }
    });
}

// ----------------PLANETS FUNCTIONS----------------


// Planet 1 Function

let pageOnePlanets = firstPlanetInfo => {
    let counter = 1;

    $("#myTbody").empty()
    firstPlanetInfo.results.forEach((planetOneInfo) => {

        $("#myTbody").append(`
        <tr>
            <td>${counter++}</td>
            <td>${planetOneInfo.name}</td>
            <td>${planetOneInfo.population}</td>
            <td>${planetOneInfo.climate}</td>
            <td>${planetOneInfo.gravity}</td>
        </tr>
        `)
    
    })
    
    $("#firstBtnDiv").html(`<button onclick="next10planets()">Next 10</button>`)
    $("#firstBtnDiv").show()
    $("#secondBtnDiv").html(``)
};

// Planet 2 Function 

let pageTwoPlanets = secondPlanetInfo =>{
    let counter = 1;

    $("#myTbody").empty()
    secondPlanetInfo.results.forEach((planetTwoInfo) => {

        $("#myTbody").append(`
        <tr>
        <td>${counter++}</td>
        <td>${planetTwoInfo.name}</td>
        <td>${planetTwoInfo.population}</td>
        <td>${planetTwoInfo.climate}</td>
        <td>${planetTwoInfo.gravity}</td>
    </tr>
        `)
    })
    
    $("#firstBtnDiv").hide()
    $("#secondBtnDiv").html(`<button onclick="prev10Planets()">Previous 10</button>`)
    
   
};

// Error Function for Planets

let errorResult = errorPlanetInfo => {
    $("table").hide()
    $("h3").text(`Ooops something went wrong ${errorPlanetInfo.status}`).css("color","red")
}






