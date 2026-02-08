let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * btns.length);
  let randcolor = btns[randIdx];
  let randbtn = document.querySelector(`.${randcolor}`);

  //   console.log(randIdx);
  //   console.log(randcolor);
  //   console.log(randbtn);

  gameSeq.push(randcolor);
    console.log(gameSeq) ;

  gameflash(randbtn);
}

function checkans(idx) {
  // console.log( " current level :" , level) ;

  // let idx = level - 1 ;

  if (userSeq[idx] == gameSeq[idx]) {
    // console.log("same value") ;

    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over Your score was  <b> ${level}  </b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red" ; 
    setTimeout( function () {
        document.querySelector("body").style.backgroundColor =  "white" ; 

    } , 150  ) ; 
    reset();
  }
}

function btnpress() {
  //   console.log(this);
  let btn = this;
  userflash(btn);

  let usercolor = btn.getAttribute("id");
  //    console.log(usercolor) ;
  userSeq.push(usercolor);

  checkans(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".button");
for (button of allbtns) {
  button.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
