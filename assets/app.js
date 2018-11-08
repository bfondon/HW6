$(document).ready(function(){

    //Initial array of animals.
    var animals=["dog", "cat", "hedgehog", "racoon", "turtle"];

        function addButtons(){
            $("#buttons-view").empty();
            for(var i=0; i<animals.length; i++){
                var button = $("<button>");
                button.addClass("gif-btn");
                button.attr("data-name", animals[i]);
                button.text(animals[i]);
                $("#buttons-view").append(button);
            }
        };
        
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
        gifImg.attr("class", "thing");
        gifImg.attr("src", result[i].images.fixed_width.url);
        $("#gif-container").prepend(gifImg);
        console.log(result);
        };
    });
    };
    addButtons();

    $("#add-gif").on("click", function(event){
        event.preventDefault();
        var newGif= $("#animal-input").val();
        animals.push(newGif);
        addButtons();
    })

    $(document).on("click",".gif-btn",showGifs);
})