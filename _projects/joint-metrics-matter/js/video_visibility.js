  function toggleVideoVisibility(divID, buttonID) {
    const videoDiv = document.getElementById(divID);
    const button = document.getElementById(buttonID);

    if (videoDiv.style.display === "none") {
      videoDiv.style.display = "block";
      button.innerHTML = "Hide";
    } else {
      videoDiv.style.display = "none";
      button.innerHTML = "Show";
    }
  }