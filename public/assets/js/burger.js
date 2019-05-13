$("#hey").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("Hey")

    var newburger = {
      name: $("#burgername").val().trim(),
    };
    
    console.log(newburger)
    console.log(newburger.name)

    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // console.log("Amazing")

  // function addbutton(){
  //   $(".button").append("<button class='devourbutton'>devour</button>")
  // }

// addbutton()
var fuckyou = {
    devoured: 1
}

$(".button").on("click", function(event) {
    console.log(this)
    console.log($(this).attr("data-id"))
    event.preventDefault();

    $.ajax("/api/burger/"+ $(this).attr("data-id"), {
      type: "PUT",
      data: fuckyou
    }).then(
      function() {
        console.log("you devoured that burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });