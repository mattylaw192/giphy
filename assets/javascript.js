

$("#addImageButton").on("click", function () {

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=47knbJVz9ApSdFnyQ8P7WGFSfASrNSck";

    $.ajax({
        URL: queryURL,
        Method: "GET"
    })


        .then(function (response) {


            var imageUrl = response.data.image_original_url;


            // Creating and storing an image tag
            var gifImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            gifImage.attr("src", imageUrl);
            gifImage.attr("alt", "gif image");

            // Prepending the catImage to the images div
            $("#images").prepend(gifImage);
        })


})