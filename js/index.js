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

$(".task").click(function() {
  var hasClass = $(this).hasClass("task-clicked");

  $(".task").removeClass("task-clicked");

  if (!hasClass){
    $(this).toggleClass("task-clicked");
  }

  var id = $(this).attr('id');

  if (id === "softeng-111"){
    $("#index.html").toggleClass("calendar-related-file");
  }
});
