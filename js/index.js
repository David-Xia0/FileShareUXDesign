function hide(event) {
  console.log(event);
  event.class += "hide";
}

function w3_open() {
  // document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("right-section").style.width = "15%";
  document.getElementById("right-section").style.display = "inline-block";
  document.getElementById("open-calendar").style.display = 'none';
}
function w3_close() {
  //document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("right-section").style.display = "none";
  document.getElementById("open-calendar").style.display = "inline-block";
}