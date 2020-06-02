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
          resetToDefaultMiddleSection();
        } else {
          $(".my-drive").css("display", "inline-block");
        }
      break;
    default:
      resetToDefaultMiddleSection();
  }
}

/**Remove all highlighting and details pane popup, except for calendar highlighting.*/
function resetToDefaultMiddleSection(){
  $(".no-drive").css("display", "inline-block");
  $(".detailsContainer").hide();
  $(".file").removeClass("file-clicked");
  $(".relatedFile").hide();
}

function successPopup() {
  $(".pop-up-container").toggle();
  $(".success-container").toggle();
}

function successClose() {
  successPopup();
  togglePopup();
}

function togglePopup() {
  $(".pop-up").toggle();
}

function displayDetails(event) {
var id = $(event).attr("id");

  if (id === "index-html"){
    $(".relatedFile").toggle();
    $(".detailsContainer").toggle();
  } else {
    console.log("hi");
    $(".detailsContainer").hide();
    $(".relatedFile").hide();
  }
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
    id = $(this).attr("id"); //id can now be used to highlight related files.
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
