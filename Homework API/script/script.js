// console.log("connected");
var testingforNames = []; // Otkako ke kliknam na submit btn vo ovoj array mi se polni responsot od vtoriot ajax call
// I zosto koga ovoj array go deklaliram vnatre kaj so mi e ostaniot KOD  mi vika deka array-ot ne e defined
// Dali e prakticno ova $(function (){}) (Kratenka od $(document).ready(function){})kaj so mi e vgezden celiot COD e prakticno? 

$(function () {
    $("#myBtn").on("click", () => {
        $.ajax({
            url: "https://swapi.co/api/films/",
            success: response => {
                filmInfo(response)
            },
            error: error => {
                errorResult(error)
            }
        })
    });


    function filmInfo(information) {

        information.results.forEach((filminfo) => {

            // Vtoriot Ajax Povik mora da e vo ovaa funckija poradi toa shto ne ja fajka na drugo mesto
            $("#myTabBody").append(`
            <tr>
                <td>${filminfo.title}</td>
                <td>${filminfo.director}</td>
                <td>${filminfo.producer}</td>
                <td>${filminfo.episode_id}</td>
                <td><a href="${filminfo.url}" target="blank"</a>URL of The Movie Info</td>
                <td><span style="color: red;">${filminfo.characters.length}</span> Characters Casted in the Movie</td>
                <td><span style="color: red;">${filminfo.planets.length}</span> Planets are Involved in the Movie</td>
                <td><span style="color: red;">${filminfo.starships.length}</span> Starships are Involved in the Movie</td>
                <td><span style="color: red;">${filminfo.vehicles.length}</span> Vehicles are Involved in the Movie</td>
                <td><span style="color: red;">${filminfo.species.length}</span> Spieces are Involved in the Movie</td>
                <td></td> 
            </tr> `)

            $("#myTabBody").empty();

            // Veke koga od prvoto API INFO gi zedov charaters.API ovde moram da go povikam APITO za characters (nad ovoj scope ne go fakase)
            $.ajax({
                url: filminfo.characters[0],
                success: response => {
                    let respArray = [];
                    respArray.push(response)
                    testingforNames.push(response)
                    console.log(respArray[0].name) // Kako ovoj response koj da go Printam vo gornoto TD :D 
                    // Ovde nemozev da ja RE-iskoristam gornata funkcija. 
                    $("#myTabBody").append(`
                <tr>
                    <td>${filminfo.title}</td>
                    <td>${filminfo.director}</td>
                    <td>${filminfo.producer}</td>
                    <td>${filminfo.episode_id}</td>
                    <td><a href="${filminfo.url}" target="blank"</a>URL of The Movie Info</td>
                    <td><span style="color: red;">${filminfo.characters.length}</span> Characters Casted in the Movie</td>
                    <td><span style="color: red;">${filminfo.planets.length}</span> Planets are Involved in the Movie</td>
                    <td><span style="color: red;">${filminfo.starships.length}</span> Starships are Involved in the Movie</td>
                    <td><span style="color: red;">${filminfo.vehicles.length}</span> Vehicles are Involved in the Movie</td>
                    <td><span style="color: red;">${filminfo.species.length}</span> Spieces are Involved in the Movie</td>
                    <td>${respArray[0].name}</td>   
                </tr>
                    
                `)
                },
                error: error => {
                    errorResult(error)
                }
            })

        });

    };

    function errorResult(errorInfo) {
        $("table").hide()
        $("p").text("Ooops something went wrong error: " + errorInfo.status + " " + errorInfo.statusText).css("color", "red").css("font-size", "2rem").css("font-weight", "bold");
    };
});




