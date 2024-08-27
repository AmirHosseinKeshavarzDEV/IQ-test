let body = document.querySelector("body");

let container = document.createElement("div");
container.classList = "container";

// Show Login Form when Form Loaded
body.addEventListener("load", loadForm());
function loadForm() {
  let formLogin = `
    <div id="form" >
         <div>
            <img src="Images/person.png" alt="">
        </div>
        
        <input id="name" name="text" class="input" placeholder="Name" type="input">
        
        <input id="age" name="text" class="input" placeholder="Age" type="number">


      <div class="checkbox-wrapper-4 checkbox">
        <input class="inp-cbx" id="morning" type="checkbox">
        <label class="cbx" for="morning"><span>
        <svg width="12px" height="10px">  
        </svg></span><span>Remember me</span></label>
        <svg class="inline-svg">
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
        </svg>
      </div>

      <button id="btnForm">
        <span class="span-mother btnForm">
          <span>L</span>
          <span>O</span>
          <span>G</span>
          <span>I</span>
          <span>N</span>
        </span>

        <span class="span-mother2 btnForm">
          <span>L</span>
          <span>O</span>
          <span>G</span>
          <span>I</span>
          <span>N</span>
        </span>
      </button>
    </div>
            `;
  body.insertAdjacentHTML("afterbegin", formLogin);
  addButtonDL();
}

function addButtonDL() {
  let button = document.createElement("button");
  button.classList.add("buttonMood");
  button.innerText = "MODE";
  body.appendChild(button);
  button.addEventListener("click", lightPage);
}

function lightPage() {
  if (body.classList.contains("body")) {
    body.classList.remove("body");
    body.classList.add("bodyMood");
  } else {
    body.classList.remove("bodyMood");
    body.classList.add("body");
  }
}

let form = document.querySelector("#form");
let btnForm = document.querySelector("#btnForm");

btnForm.addEventListener("click", () => {
  let Name = document.querySelector("#name").value;
  let Age = document.querySelector("#age").value;

  if (Name && Age) {
    form.style = `display:none;`;
    body.appendChild(container);
    container.style = `visibility: visible;`;
    addNewQuestionAndAnswer();
    localStorage.setItem("Name", Name);
  }
});

function template(indexIMG) {
  return `
  <div id="questionsForm">
          <a href="#" class="btn-shine">Choose One !</a>

    <div id="top">

        <img class="image-test" src="Images/${indexIMG}/test${indexIMG}.png" alt="">
    </div>
    <div id="buttom">
        <img class="image image1" src="Images/${indexIMG}/${indexIMG}-1.png" alt="">
        <img class="image image2" src="Images/${indexIMG}/${indexIMG}-2.png" alt="">
        <img class="image image3" src="Images/${indexIMG}/${indexIMG}-3.png" alt="">
        <img class="image image4" src="Images/${indexIMG}/${indexIMG}-4.png" alt="">
        <img class="image image5" src="Images/${indexIMG}/${indexIMG}-5.png" alt="">
        <img class="image image6" src="Images/${indexIMG}/${indexIMG}-6.png" alt="">
    </div>
    </div>

    <div class="btns">
    <button id="back">
        <img src="Images/arrow-backward (1).png" alt="">
    </button>
    <button id="next">
        <img src="Images/arrow-forward.png" alt="">
    </button>
    </div>
    `;
}

function template2(indexIMG) {
  return `
    <div id="top">
        <img class="image-test" src="Images/${indexIMG}/test${indexIMG}.png" alt="">
    </div>
    <div id="buttom">
        <img class="image image1" src="Images/${indexIMG}/${indexIMG}-1.png" alt="">
        <img class="image image2" src="Images/${indexIMG}/${indexIMG}-2.png" alt="">
        <img class="image image3" src="Images/${indexIMG}/${indexIMG}-3.png" alt="">
        <img class="image image4" src="Images/${indexIMG}/${indexIMG}-4.png" alt="">
        <img class="image image5" src="Images/${indexIMG}/${indexIMG}-5.png" alt="">
        <img class="image image6" src="Images/${indexIMG}/${indexIMG}-6.png" alt="">
        <img class="image image7" src="Images/${indexIMG}/${indexIMG}-7.png" alt="">
        <img class="image image8" src="Images/${indexIMG}/${indexIMG}-8.png" alt="">
    </div>
    `;
}

let indexIMG = 0;
function addNewQuestionAndAnswer() {
  if (container != -1) {
    container.innerHTML = "";
  }
  indexIMG += 1;

  if (indexIMG <= 12) {
    container.insertAdjacentHTML("afterbegin", template(indexIMG));
  } else if (indexIMG <= 30) {
    container.insertAdjacentHTML("afterbegin", template2(indexIMG));
  } else if (indexIMG == 31) {
    container.insertAdjacentHTML("afterbegin", answer());
  }
}

let answers = [
  3, 1, 5, 5, 2, 1, 2, 2, 2, 6, 4, 1, 4, 7, 2, 3, 1, 6, 5, 8, 4, 4, 7, 6, 4, 7,
  7, 3, 2, 8,
];

container.addEventListener("click", userChose);
let indexAnswer = -1;

let score = 0;

function userChose(e) {
  if (e.target.classList.contains("image")) {
    indexAnswer++;

    if (e.target.classList.contains("image" + answers[indexAnswer])) {
      score += 1;
    }
    addNewQuestionAndAnswer();
  }
}

function answer() {
  let nameInLs = localStorage.getItem("Name");
  score = (score * 3.325).toFixed();
  let aboutScore = "";
  if (score == 100) {
    aboutScore = `Good Job ${nameInLs} !`;
  }
  if (score <= 99) {
    aboutScore = `Well Done ${nameInLs} !`;
  }
  if (score <= 75) {
    aboutScore = `Not that Bad, ${nameInLs} !`;
  }
  if (score <= 50) {
    aboutScore = `Try It Again, ${nameInLs} !`;
  }
  if (score <= 25) {
    aboutScore = `Try More, ${nameInLs} ..`;
  }
  return `
        <div class="container-score">

          <div class="resultForm">
            <div class="rsltPic">
              <img src="Images/check.png" alt="">
            </div>

          <div class="result">
            <div class="resultTop">
              <p>${aboutScore}</p>
              <p> You Answered ${score}% of the Questions Correctly.</p>
            </div>

          <div class="resultBot">
            <a href="#">Try Again?</a>
            <a href="#" class="export">Export Result</a>
          </div>
        </div>

          <div class="rsltBtn">
            <a href="#">Exit</a>
           </div>
          </div>
        </div>
    `;
}
