var animals = ["Giraffe","Baboon","Dog"];



function displayButtons() {

    $("#animal-buttons").empty();

    for (var i = 0; i < animals.length; i++){
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name",animals[i]);
        a.text(animals[i]);
        $("#animal-buttons").append(a);
    }

}

$("#add-animal").on("click", function(event){

    event.preventDefault();

    var animal = $("#animal-input").val().trim();

    animals.push(animal);

    displayButtons();


})




displayButtons();



function buildQueryURL(){
    var animal = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?" + animal + "&api_key=47knbJVz9ApSdFnyQ8P7WGFSfASrNSck";

    $.ajax({
        URL: queryURL,
        method: "GET"
    }).then(function(response){
        var imageURL = response.data.image_original_url;

        var animalImage = $("<img>");

        animalImage.attr("src", imageURL);
        catImage.attr("alt", "animal image");
        $("images").prepend(animalImage);
    });


};

buildQueryURL();




// $.ajax({
//     URL: queryURL,
//     Method: "GET"
// })


//     .then(function (response) {


//         var imageUrl = response.data.image_original_url;


//         // Creating and storing an image tag
//         var gifImage = $("<img>");

//         // Setting the catImage src attribute to imageUrl
//         gifImage.attr("src", imageUrl);
//         gifImage.attr("alt", "gif image");

//         // Prepending the catImage to the images div
//         $("#images").prepend(gifImage);
//     })



// $("#addImageButton").on("click", function () {

    

// })