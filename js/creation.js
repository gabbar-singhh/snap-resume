responsiveVoice.speak(
  "Hey Human, Lets start your process of Resume",
  "UK English Female",
  { rate: 0.8 }
);

responsiveVoice.speak(
  "Write your the job title you want.",
  "UK English Female",
  { rate: 0.8 }
);

// data
var jobTitleValue;
var fullNameValue;
var emailValue;
var phoneNumberValue;
var professionalSummaryValue;
var cityNameValue;
var stateNameValue;
var skillsValue;
var experienceValue;
var degreeNameValue;
var collegeNameValue;
var startDateValue;
var endDateValue;
var linkedinValue;
var engValue;
var hindiValue;

var nextBtnClick = 0;
const navBar = document.querySelector(".menu-items");
const navBarCreation = document.querySelector('.Creation-NavBar');
const resumePdf = document.querySelector("#resume-download-pdf");
const downloadBtn = document.querySelector(".download-btn");

const jobTitleInput = document.querySelector("#jobTitleInput");
const fullNameInput = document.querySelector("#fullNameInput");
const emailInput = document.querySelector("#emailInput");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
const professionalSummaryInput = document.querySelector(
  "#professionalSummaryInput"
);
const cityNameInput = document.querySelector("#cityNameInput");
const stateNameInput = document.querySelector("#stateNameInput");
const skillsInput = document.querySelector("#skillsInput");
const experienceInput = document.querySelector("#experienceInput");
const degreeNameInput = document.querySelector("#degreeNameInput");
const collegeNameInput = document.querySelector("#collegeNameInput");
const startDateInput = document.querySelector("#startDateInput");
const endDateInput = document.querySelector("#endDateInput");
const linkedinInput = document.querySelector("#linkedinInput");
const engLangInput = document.getElementById("eng-options");
const hindiLangInput = document.getElementById("hindi-options");

let nextBtn = document.querySelector(".next-btn");
let question1 = document.querySelector(".question-1");
let question2 = document.querySelector(".question-2");
let question3 = document.querySelector(".question-3");
let question4 = document.querySelector(".question-4");
let question5 = document.querySelector(".question-5");
let question6 = document.querySelector(".question-6");
let question7 = document.querySelector(".question-7");
let question8 = document.querySelector(".question-8");
let question9 = document.querySelector(".question-9");
let question10 = document.querySelector(".question-10");
let question11 = document.querySelector(".question-11");

let main = document.querySelector(".main");

let sideImg = document.querySelector("#side-img");

nextBtn.addEventListener("click", () => {
  nextBtnClick += 1;

  if (nextBtnClick == 1) {
    responsiveVoice.speak("Write your full name", "UK English Female", {
      rate: 0.8,
    });

    question1.classList.add("hidden");
    jobTitleValue = jobTitleInput.value;
    question2.classList.remove("hidden");
    sideImg.setAttribute("src", "/assets/q-2.png");
    sideImg.setAttribute("height", "422px");
    navBarCreation.classList.remove('hidden')
  } else if (nextBtnClick == 2) {
    question2.classList.add("hidden");
    fullNameValue = fullNameInput.value;
    question3.classList.remove("hidden");
    responsiveVoice.speak(
      "Write your personal active E-mail ID.",
      "UK English Female",
      { rate: 0.8 }
    );
    sideImg.setAttribute("src", "/assets/q-3.png");
    sideImg.setAttribute("height", "422px");
  } else if (nextBtnClick == 3) {
    question3.classList.add("hidden");
    emailValue = emailInput.value;
    sideImg.setAttribute("src", "/assets/q-4.png");
    responsiveVoice.speak(
      "Write your active mobile number.",
      "UK English Female",
      { rate: 0.8 }
    );
    question4.classList.remove("hidden");
  } else if (nextBtnClick == 4) {
    question4.classList.add("hidden");
    phoneNumberValue = phoneNumberInput.value;
    sideImg.setAttribute("src", "/assets/q-5.png");
    responsiveVoice.speak(
      "Write briefly about your professional summary.",
      "UK English Female",
      { rate: 0.8 }
    );
    question5.classList.remove("hidden");
  } else if (nextBtnClick == 5) {
    question5.classList.add("hidden");
    sideImg.setAttribute("src", "/assets/q-6.png");
    professionalSummaryValue = professionalSummaryInput.value;
    responsiveVoice.speak(
      "Provide your city and state in which you are currently living",
      "UK English Female",
      { rate: 0.8 }
    );

    question6.classList.remove("hidden");
  } else if (nextBtnClick == 6) {
    question6.classList.add("hidden");
    sideImg.setAttribute("src", "/assets/q-7.png");
    sideImg.setAttribute("height", "422px");

    cityNameValue = cityNameInput.value;
    stateNameValue = stateNameInput.value;
    responsiveVoice.speak(
      "Write the skills in which you are proficient.",
      "UK English Female",
      { rate: 0.8 }
    );

    question7.classList.remove("hidden");
  } else if (nextBtnClick == 7) {
    question7.classList.add("hidden");
    sideImg.setAttribute("src", "/assets/q-8.png");
    sideImg.setAttribute("height", "200px");

    skillsValue = skillsInput.value;
    responsiveVoice.speak(
      "Write about your work experience or any internship you have done, or maybe something about any of your cool projects.",
      "UK English Female",
      { rate: 0.8 }
    );

    question8.classList.remove("hidden");
  } else if (nextBtnClick == 8) {
    question8.classList.add("hidden");
    experienceValue = experienceInput.value;
    sideImg.setAttribute("src", "/assets/q-9.png");
    sideImg.setAttribute("height", "422px");

    responsiveVoice.speak(
      "Write your college degree and college date along when your started and graduated. ",
      "UK English Female",
      { rate: 0.8 }
    );

    question9.classList.remove("hidden");
  } else if (nextBtnClick == 9) {
    question9.classList.add("hidden");
    sideImg.setAttribute("src", "/assets/q-10.png");
    sideImg.setAttribute("height", "422px");
    degreeNameValue = degreeNameInput.value;
    collegeNameValue = collegeNameInput.value;
    startDateValue = startDateInput.value;
    endDateValue = endDateInput.value;
    responsiveVoice.speak(
      "Please provide your linkedin profile link, or your personal website, if you have one.",
      "UK English Female",
      { rate: 0.8 }
    );

    question10.classList.remove("hidden");
  } else if (nextBtnClick == 10) {
    question10.classList.add("hidden");
    // personalWebValue = personalWebInput.value;
    linkedinValue = linkedinInput.value;
    question11.classList.remove("hidden");
    sideImg.setAttribute("src", "/assets/q-11.png");
  } else if (nextBtnClick == 11) {
    engValue = engLangInput.value;
    hindiValue = hindiLangInput.value;

    responsiveVoice.speak(
      "Thank You for Using Our Service.",
      "UK English Female",
      { rate: 0.8 }
    );
    responsiveVoice.speak("Please Download Your Resume.", "UK English Female", {
      rate: 0.8,
    });

    nextBtn.classList.add("hidden");
    sideImg.setAttribute("src", "");
    navBar.classList.add("hidden");
    main.classList.add("hidden");

    downloadBtn.classList.remove("hidden");

    let skillsValueArray = skillsValue.replaceAll(" ", "").split(",");
    let experienceValueArray = experienceValue.split(".");
    console.log(experienceValueArray);

    let html = `

        <div class="name-web-d"> ${fullNameValue} </div>

        <div class="jobTitle-web-d">${jobTitleValue}</div>

        <div class="professionalSummary-web-d">
            ${professionalSummaryValue}
        </div>

        <div class="email-phoneNumber-location-linkedIn-persoanlWeb-d">
            <div>
                <img src="/icons/email.svg" class="resume-icons-d" alt="">
                ${emailValue}
            </div>
            <div>
                <img src="/icons/call.svg" class="resume-icons" alt="">
                ${phoneNumberValue}
            </div>
            <div>
                <img src="/icons/location.svg" class="resume-icons" alt="">
                ${cityNameValue}, ${stateNameValue}
            </div>
            <div>
                <img src="/icons/linkedin.svg" class="resume-icons" alt="">
                <a class="aa" href="#">${fullNameValue}</a>
            </div>
        </div>

        <div class="skills-web-d">

            <div class="skills-head-web-d sub-heading-web-d">SKILLS</div>

            <div id="skills-list-id" class="skill-list-d">
               
            
        </div>

        </div>

        <div class="work-experience-web-d">
            <div class="sub-heading-web-d">WORK EXPERIENCE/ INTERSHIPS/ PROJECTS</div>
            <ul id="work-esperience-ul" >
               
            </ul>
        </div>

        <div class="education-web-d">
            <div class="sub-heading-web-d">EDUCATION</div>
            <div class="degreeName-web-d">
                ${degreeNameValue}
            </div>

            <div class="collegeName-web-d">
                ${collegeNameValue}
            </div>

            <div class="startDAte-endDate-web-d">
                ${startDateValue} - ${endDateValue}
            </div>
        </div>

        <div class="lang-web-d">
            <div class="sub-heading-web-d">LANGUAGES</div>

            <div class="lang-web-div-d">

                <div class="english-web-d">
                    <div>English</div>
                    <span>${engValue}</span>
                </div>

                <div class="hindi-web-d">
                   <div>Hindi </div>
                    <span>${hindiValue}</span>
                </div>

            </div>

        </div>
    `;

    document.querySelector(".web-resume-d").classList.remove("hidden");
    document.querySelector("#resume-download-pdf").innerHTML = html;
    document.querySelector(".aa").setAttribute("href", `${linkedinValue}`);

    experienceValueArray.forEach((element) => {
      document.querySelector(
        "#work-esperience-ul"
      ).innerHTML += `<li>${element}</li>`;
    });

    skillsValueArray.forEach((element) => {
      document.querySelector(
        "#skills-list-id"
      ).innerHTML += `<div>${element}</div>`;
    });
  }
});

function getValues() {
  console.log(jobTitleValue);
  console.log(fullNameValue);
  console.log(emailValue);
  console.log(phoneNumberValue);
  console.log(professionalSummaryValue);
  console.log(cityNameValue);
  console.log(stateNameValue);
  console.log(skillsValue);
  console.log(experienceValue);
  console.log(degreeNameValue);
  console.log(collegeNameValue);
  console.log(startDateValue);
  console.log(endDateValue);
  console.log(linkedinValue);
  console.log(engValue);
  console.log(hindiValue);
  // console.log('done workinf');
}