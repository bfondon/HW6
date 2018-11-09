$(document).ready(function(){

    //Initial array of animals.
    var animals=["dog", "cat", "hedgehog", "racoon", "turtle"];

        //Function that renders buttons for items existing in the array.
        function addButtons(){
            //Empty anything with the buttons-view id to prevent duplicate buttons being created.
            $("#buttons-view").empty();
            //For loop that iterates through the animals array.
            for(var i=0; i<animals.length; i++){
                //Create a button variable that generates a <button> tag in html
                var button = $("<button>");
                //Add class "gif-btn" to the new button being generated so it can be styled in CSS.
                button.addClass("gif-btn");
                //Assign animals[i] as the data name attribute for the new button.
                button.attr("data-name", animals[i]);
                //The animal name will be assigned as the button label.
                button.text(animals[i]);
                //Within the "buttons-view" div, the new button will be added to the end.
                $("#buttons-view").append(button);
            }
        };
    //Entire function that pulls gifs from API
    function showGifs(){

    // Create a new gif variable with the "data-name" attribute that was set above.
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=2oymWSq5gf6sV3uMIsO84cxxEfDxAmjW&limit=10";
    //Ajax call that actually retrieves info
    $.ajax({
        url: queryURL,
        method: "GET"
    //When info is retrieved, create a new image and add it to the gif container.
    }).then(function(response){
        var result = response.data;
        for(i=0; i<result.length; i++){
        var rated = response.data[i].rating;
        var gifImg = $("<img>");
        var ratedDisplay = $("<div>");
        ratedDisplay.html(rated);
        console.log(rated);
        gifImg.attr("class", "gif-class");
        gifImg.attr("src", result[i].images.fixed_width_still.url);
        gifImg.attr("data-state", "still");
        gifImg.attr("data-animate", result[i].images.fixed_width.url);
        gifImg.attr("data-still", result[i].images.fixed_width_still.url)
        $("#gif-container").prepend(ratedDisplay);
        $("#gif-container").prepend(gifImg);
        };
    });
    };
    //Call addButtons.
    addButtons();

    //Click event that takes form input, adds it to the array, and runs addButton function when "submit" is clicked.
    $("#add-gif").on("click", function(event){
        event.preventDefault();
        var newGif= $("#animal-input").val();
        animals.push(newGif);
        addButtons();
    })
    //When anything with class "gif-btn" is clicked, run showGifs function.
    $(document).on("click",".gif-btn",showGifs);

    $(document).on("click",".gif-class", function(){
        var state = $(this).attr("data-state");
        var still = $(this).attr("data-still");
        var animate = $(this).attr("data-animate");
        if (state==="still"){
            $(this).attr("src", animate);
            $(this).attr("data-state", "animate");
        } else{
            $(this).attr("src", still);
            $(this).attr("data-state", "still");
        }
        });
})


//Source for moving gif & source for still image.
// Loads the still source
// On click, change to the moving source.