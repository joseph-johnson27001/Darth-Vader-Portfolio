
// 
// BEGINNINGS OF FUNCTIONS FOR PAGES TO FADE OUT AND NEW PAGE FADE BACK IN
//
//
// introTextContainer.classList.add("fade-out", "hide");
// introTextContainer.classList.remove("hide", "fade-out"); introTextContainer.classList.add("fade-in")
//


/* ================================================================================
VARIABLES
================================================================================ */

let introTextContainer = document.getElementById("intro-text-container");





/* ================================================================================
NAV BAR
================================================================================ */

// Get the container element
var btnContainer = document.getElementById("navbarNav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
