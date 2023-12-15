const start = document.querySelector(".start");
const landingPage = document.querySelector(".landing-page");
const questionPage = document.querySelector(".question-page");
//when button is click game starts
//landing page to be hidden and show game page.
const startGame = () => {
landingPage.classList.add('hidden');
questionPage.classList.remove("hidden");
}

start.addEventListener("click", startGame)