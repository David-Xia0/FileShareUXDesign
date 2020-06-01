function hide(event) {
  console.log(event);
  $(".drive").removeClass("selected");
  event.classList += " selected";
  $(".middle-section").css("display", "none");
  switch (event.text) {
    case "My Drive":
      $(".my-drive").css("display", "inline-block");
      break;
    default:
      $(".no-drive").css("display", "inline-block");

  }
}

function togglePopup() {
  $(".pop-up").toggle();
}

function displayIndexDetails() {
  $(".detailsContainer").toggle();
  $(".relatedFile").toggle();
}

/**Click handler for the tasks on the calendar.*/
$(".task").click(function() {
  var id = "";
  var taskIsHighlighted = $(this).hasClass("task-clicked");

  $(".task").removeClass("task-clicked");
  if (!taskIsHighlighted){
    $(this).toggleClass("task-clicked");
    id = $(this).attr('id'); //id can now be used to highlight related files.
  }

  //Highlight appropriate related files in your drive.
  $(".file").removeClass("calendar-related-file");
  if (id === "softeng-111"){
    $("#index-html").toggleClass("calendar-related-file");

  } else if (id === "get-doc-done"){
    $("#style-css").toggleClass("calendar-related-file");
    $("#index-js").toggleClass("calendar-related-file");

  } else if (id === "softeng-250"){
    $("#style-css").toggleClass("calendar-related-file");

  } else if (id === "hand-in-brief"){
    $("#assignment-brief").toggleClass("calendar-related-file");
  }
});
