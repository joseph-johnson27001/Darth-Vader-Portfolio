/* =============================================================================
VARIABLES
================================================================================ */
//NAVIGATION
const btnContainer = document.getElementById("navbarNav");
const btns = btnContainer.getElementsByClassName("nav-link");

// ON PAGE BUTTONS
const aboutMeButton = document.getElementById("about-me-button")
const servicesButton = document.getElementById("services-button")
const portfolioButton = document.getElementById("portfolio-button")
const blogButton = document.getElementById("blog-button")
const contactButton = document.getElementById("contact-button")
const homeButton = document.getElementById("home-button")

// CONTAINERS
const informationContentContainer = document.getElementById("information-content-container")
const introTextContainer = document.getElementById("intro-text-container")
const aboutMeContainer = document.getElementById("about-me-container")
const servicesContainer = document.getElementById("services-container")
const portfolioContainer = document.getElementById("portfolio-container")
const blogContainer = document.getElementById("blog-container")
const contactContainer = document.getElementById("contact-container")

// ARRAYS
let allContentContainers = informationContentContainer.children




/* ================================================================================
EVENT LISTENERS
================================================================================ */

aboutMeButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showAboutSection, 400);
});

servicesButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showServicesSection, 400);
});

portfolioButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showPortfolioSection, 400)
});

blogButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showBlogSection, 400)
});

contactButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showContactSection, 400)
});

homeButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showIntroSection, 400)
});

/* =============================================================================
FUNCTIONS
================================================================================ */

// NAVIGATION FUNCTIONS
// =============================================================================

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

// MAIN CONTENT FUNCTIONS
// =============================================================================

// FUNCTION TO HIDE CURRENT SECTION

function hideCurrentSection() {
  for (let i = 0; i < allContentContainers.length; i++) {
      allContentContainers[i].classList.add("fade-out")
      setTimeout(function(){
      allContentContainers[i].classList.add("hide")
    }, 400)
  }
}

//Function to show introduction div

function showIntroSection() {
  introTextContainer.classList.remove("hide", "fade-out");
  introTextContainer.classList.add("fade-in")
}

// Function to show about section div

function showAboutSection() {
  aboutMeContainer.classList.remove("hide", "fade-out");
  aboutMeContainer.classList.add("fade-in");
}

// Funciton to show services div

function showServicesSection() {
  servicesContainer.classList.remove("hide", "fade-out");
  servicesContainer.classList.add("fade-in");
}

// Funciton to show portfolio div

function showPortfolioSection() {
  portfolioContainer.classList.remove("hide", "fade-out");
  portfolioContainer.classList.add("fade-in");
}

// Funciton to show blog div

function showBlogSection() {
  blogContainer.classList.remove("hide", "fade-out");
  blogContainer.classList.add("fade-in");
}
// Funciton to show contact div

function showContactSection() {
  contactContainer.classList.remove("hide", "fade-out");
  contactContainer.classList.add("fade-in");
}
