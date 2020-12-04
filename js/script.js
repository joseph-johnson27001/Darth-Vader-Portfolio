
//
// BEGINNINGS OF FUNCTIONS FOR PAGES TO FADE OUT AND NEW PAGE FADE BACK IN
//
//
// introTextContainer.classList.add("fade-out", "hide");
// introTextContainer.classList.remove("hide", "fade-out"); introTextContainer.classList.add("fade-in")
//

/* ================================================================================
FUNCTIONS
================================================================================ */

function hideIntroSection() {
  introTextContainer.classList.add("fade-out");
    setTimeout(function(){
    introTextContainer.classList.add("hide");
  }, 400);
}

function hideAboutSection() {
  aboutMeContainer.classList.add("fade-out");
    setTimeout(function(){
    aboutMeContainer.classList.add("hide");
  }, 400);
}

function showIntroSection() {
  introTextContainer.classList.remove("hide", "fade-out");
  introTextContainer.classList.add("fade-in")
}

function showAboutSection() {
  aboutMeContainer.classList.remove("hide");
  aboutMeContainer.classList.add("fade-in");
}

function showServicesSection() {
  servicesContainer.classList.remove("hide");
  servicesContainer.classList.add("fade-in");
}




/* ================================================================================
VARIABLES
================================================================================ */

// ON PAGE BUTTONS

const aboutMeButton = document.getElementById("about-me-button")
const servicesButton = document.getElementById("services-button")


// CONTAINERS
const introTextContainer = document.getElementById("intro-text-container")
const aboutMeContainer = document.getElementById("about-me-container")
const servicesContainer = document.getElementById("services-container")



/* ================================================================================
EVENT LISTENERS
================================================================================ */

aboutMeButton.addEventListener("click", () => {
  hideIntroSection();
  setTimeout(showAboutSection, 400);
});

servicesButton.addEventListener("click", () => {
  hideAboutSection();
  setTimeout(showServicesSection, 400);
})


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
