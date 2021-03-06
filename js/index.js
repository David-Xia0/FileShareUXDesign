/* This function toggles the display (hide/shows) property of the middle section */
function hide(event) {
  var driveIsHighlighted = $(event).hasClass("selected");
  $(".drive").removeClass("selected"); //Rid of all current selections.

  // Highlight or remove highlighting of the selected drive
  if (driveIsHighlighted) {
    $(event).removeClass("selected");
  } else {
    $(event).toggleClass("selected");
  }

  // Toggle display of the middle section
  $(".middle-section").css("display", "none");
  switch (event.text) {
    case "My Drive":
      if (driveIsHighlighted) {
        resetToDefaultMiddleSection();
      } else {
        $(".my-drive").css("display", "inline-block");
      }
      break;
    default:
      resetToDefaultMiddleSection();
  }
}

/* Remove all highlighting and details pane popup, except for calendar highlighting */
function resetToDefaultMiddleSection() {
  $(".no-drive").css("display", "inline-block");
  $(".detailsContainer").hide();
  $(".file").removeClass("file-clicked");
  $(".relatedFile").hide();
}

/* Toggle the display setting of the sucess pop up */
function successPopup() {
  $(".pop-up-container").toggle();
  $(".success-container").toggle();
}

/* Close the success pop up */
function successClose() {
  successPopup();
  togglePopup();
}

/* Toggle the share pop up */
function togglePopup() {
  $(".pop-up").toggle();
}

/* Toggle function for the display panel. Only index.html pane was implemented */
function displayDetails(event) {
  var id = $(event).attr("id");

  if (id === "index-html") {
    $(".relatedFile").toggle();
    $(".detailsContainer").toggle();
  } else {
    $(".detailsContainer").hide();
    $(".relatedFile").hide();
  }
}

/* Second click handler for the files in the middle */
$(".file").click(function() {
  var fileIsHighlighted = $(this).hasClass("file-clicked");
  $(".file").removeClass("file-clicked");
  if (!fileIsHighlighted) {
    $(this).toggleClass("file-clicked");
  }
});

/* Click handler for the tasks on the calendar */
$(".task").click(function() {
  var id = "";
  var taskIsHighlighted = $(this).hasClass("task-clicked");

  $(".task").removeClass("task-clicked"); //Rid of all current selections.

  if (!taskIsHighlighted) {
    $(this).toggleClass("task-clicked");
    id = $(this).attr("id"); //id can now be used to highlight related files.
  }

  //Highlight appropriate related files in your drive, accordingly to the task clicked.
  $(".file").removeClass("calendar-related-file");
  if (id === "softeng-111") {
    $("#index-html").toggleClass("calendar-related-file");

  } else if (id === "get-doc-done") {
    $("#style-css").toggleClass("calendar-related-file");
    $("#index-js").toggleClass("calendar-related-file");

  } else if (id === "softeng-250") {
    $("#style-css").toggleClass("calendar-related-file");

  } else if (id === "hand-in-brief") {
    $("#assignment-brief").toggleClass("calendar-related-file");
  }
});
