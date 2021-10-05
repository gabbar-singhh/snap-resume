const createNewBtn = document.querySelector("#createNewBtn");
const feedbackLi = document.querySelector("#feedback-li");
const aboutLi = document.querySelector("#about-li");
const homeLi = document.querySelector("#home-li");

createNewBtn.addEventListener("click", (e) => {
  console.log(e);
  window.location.href = "/files/creation.html";
  console.log("e");
});

homeLi.addEventListener("click", (e) => {
  window.location.href = "index.html";
  console.log("index.html reached");
});
