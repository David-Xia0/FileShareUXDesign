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
  $(".related").toggleClass("fileBorder");
}



function displayIndexDetails() {
  $(".detailsContainer").toggle();
  $(".related").toggleClass("fileBorder");
}