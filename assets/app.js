$(document).ready(function(){

    //Initial array of animals.
    var animals=["dog", "cat", "hedgehog", "racoon", "turtle"];

        function addButtons(){
            $(".gif-btn").empty();
            for(var i=0; i<animals.length; i++){
                var button = $("<button>");
                button.addClass("gif-btn");
                button.attr("data-name", animals[i]);
                button.text(animals[i]);
                $("#buttons-view").append(button);
            }
        }
    addButtons();

    function showGifs(){

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=2oymWSq5gf6sV3uMIsO84cxxEfDxAmjW&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var result = response.data;
        for(i=0; i<result.length; i++){
        var gifImg = $("<img>");
        gifImg.attr("src", result[i].images.fixed_width);
        gifImg.attr("id",);
        $("#gif-container").prepend(gifImg);
        console.log(result);
            };
        })    
    })    
    showGifs(); 
    console.log('E is the best and the patriots are dynasty!')
}); 


//1. When the page loads, populate pre-existing buttons.
        //A. Need an onload function.
        //B. Need a variable that stores the pre-existing buttons.
        //C. Every time the page loads, empty all existing buttons and reload the new page. This prevents the same buttons being re-loaded over and over.
        //D. Create a for loop that goes through the array and creates buttons for each. 
            // d. Need a variable to store the button tag. 
            // e. Add class using .addClass.
            // f. Add attributes .attr - assigns a specific identifier to each button.
            // g. Add text to each button - what is displayed - this is equal to animals[i].
            // h. Go into html, search for a button id, and append/shove button to the end of the array.
            // i. Call the function.
//2. When a button is clicked, put gifs in a container.
    //A. Need an event listener (doc.onclick) for any button clicked.
    //B. When a button is clicked, run a function.
    //C. 

//3. When you submit an input, a new button is created that behaves like the original buttons.