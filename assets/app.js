//Initial array of animals.
var animals=["dog", "cat", "hedgehog", "racoon", "turtle"];

function displayGifs(){
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=2oymWSq5gf6sV3uMIsO84cxxEfDxAmjW&q=" + gif "&limit=10&offset=0&rating=G&lang=en";
    
    .ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){
        //Create a div to hold the returned gifs.
        var gifDiv = $("<div class='gif'>");
    })
}