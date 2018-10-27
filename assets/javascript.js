var animals = ["Giraffe", "Baboon", "Dog","cow"];

console.log(animals);

function displayAnimalData() {

    // $(".animal").on("click", function buildQueryURL() {
        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=47knbJVz9ApSdFnyQ8P7WGFSfASrNSck&limit=10";
        console.log(animal);
        console.log(queryURL);


        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {

            var animalDiv = $("<div class='originalAnimal'>")
            var results = response.data;

                console.log(results);

                for (var i = 0; i < results.length; i++) {

                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        var gifDiv = $("<div>");

                        var rating = results[i].rating;

                        var p = $("<p>").text("Rating: " + rating);

                        var animalImage = $("<img>");
                        animalImage.attr("src", results[i].images.fixed_height.url);

                        gifDiv.append(p);
                        gifDiv.append(animalImage);

                        $("#images").prepend(gifDiv);
                    }

                }

            });



    // });
};


function displayButtons() {

    $("#animal-buttons").empty();

    for (var i = 0; i < animals.length; i++) {

        var a = $("<button>");

        a.addClass("animal");

        a.addClass("btn btn-success");

        a.attr("data-name", animals[i]);

        a.text(animals[i]);

        $("#animal-buttons").append(a);
    }

}

//Handles when a button is clicked
$("#add-animal").on("click", function (event) {

    event.preventDefault();

    var animal = $("#animal-input").val().trim();


    animals.push(animal);

    displayButtons();
});

    $(document).on("click", ".animal", displayAnimalData);
    console.log(animals);

    displayButtons();
// displayAnimalData();





// displayAnimalData();