// console.log("connected");

// Dali e prakticno ova $(function (){}) (Kratenka od $(document).ready(function){})kaj so mi e vgezden celiot COD e prakticno? 
$(function () {
    $("#myBtn").click(function () {
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


    function filmInfo(filmInfos) {
        for (let i = 0; i < filmInfos.results.length; i++) {
            $("#myTabBody").append(`<tr>
            <td>${filmInfos.results[i].title}</td>
            <td>${filmInfos.results[i].director}</td>
            <td>${filmInfos.results[i].producer}</td>
            <td>${filmInfos.results[i].episode_id}</td>
            <td><a href="${filmInfos.results[i].url}" target="blank"</a>URL of The Movie Info</td>
            <td><span style="color: red;">${filmInfos.results[i].characters.length}</span> Characters Casted in the Movie</td>
            <td><span style="color: red;">${filmInfos.results[i].planets.length}</span> Planets are Involved in the Movie</td>
            <td><span style="color: red;">${filmInfos.results[i].starships.length}</span> Starships are Involved in the Movie</td>
            <td><span style="color: red;">${filmInfos.results[i].vehicles.length}</span> Vehicles are Involved in the Movie</td>
            <td><span style="color: red;">${filmInfos.results[i].species.length}</span> Spieces are Involved in the Movie</td>
            <td><a href="${filmInfos.results[i].characters[0]}" target="blank"</a>Info to the First Character</td>
        </tr>`
            );
        };
    };
    function errorResult(errorInfo) {
        $("table").hide()
        $("p").text("Ooops something went wrong error: " + errorInfo.status + " " + errorInfo.statusText).css("color", "red").css("font-size", "2rem").css("font-weight", "bold");
    };
});



