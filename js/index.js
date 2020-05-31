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
  $(".related").toggleClass("fileBorder");
}

$(".homework").click(function() {
  $(".homework").removeClass("homework-clicked")
  $(this).toggleClass("homework-clicked");

  var id = $(this).attr('id');

  if (id == "softeng-111"){

  }
});
