function hide(event) {
  var driveIsHighlighted = $(event).hasClass("selected");

  $(".drive").removeClass("selected");

  if (driveIsHighlighted){
    $(event).removeClass("selected");
  } else {
    $(event).toggleClass("selected");
  }
  $(".middle-section").css("display", "none");
  switch (event.text) {
    case "My Drive":
        if (driveIsHighlighted){
          $(".no-drive").css("display", "inline-block");
        } else {
          $(".my-drive").css("display", "inline-block");
        }
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

$(".file").click(function() {
  var fileIsHighlighted = $(this).hasClass("file-clicked");
  $(".file").removeClass("file-clicked");
  if (!fileIsHighlighted){
    $(this).toggleClass("file-clicked");
  }
});

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
  $(".fileTitle").removeClass("calendar-related-file");
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
