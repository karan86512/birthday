 /* ==========================================
   Birthday Surprise V2
   Part 1
========================================== */

// Pages

const loadingPage = document.getElementById("loading");
const balloonPage = document.getElementById("balloonPage");
const giftPage = document.getElementById("giftPage");
const rosePage = document.getElementById("rosePage");
const letterPage = document.getElementById("letterPage");
const cakePage = document.getElementById("cakePage");
const finalPage = document.getElementById("finalPage");


// Buttons

const startBtn = document.getElementById("startBtn");
const giftBtn = document.getElementById("giftBtn");
const roseNext = document.getElementById("roseNext");
const letterNext = document.getElementById("letterNext");
const cakeBtn = document.getElementById("cakeBtn");


// Popup

const photoPopup = document.getElementById("photoPopup");
const popupPhoto = document.getElementById("popupPhoto");


// Balloons

const balloons = document.querySelectorAll(".balloon");


// Letter

const letterText = document.getElementById("letterText");


// Final

const finalMessage = document.getElementById("finalMessage");


// Sounds

const popSound = new Audio("assets/pop.mp3");

const bgMusic = new Audio("assets/music.mp3");

bgMusic.loop = true;
bgMusic.volume = .5;


// Images

const balloonImages = [

"assets/img1.jpeg",

"assets/img2.jpeg",

"assets/img3.jpeg",

"assets/img4.jpeg"

];


// Current Balloon

let currentBalloon = 0;



/* ==========================================
   FUNCTIONS
========================================== */

function showPage(page){

document.querySelectorAll("section").forEach(sec=>{

sec.style.display="none";

});

page.style.display="flex";

}



function playMusic(){

bgMusic.play().catch(()=>{});

}



function playPop(){

popSound.currentTime=0;

popSound.play();

}



function showPopup(src){

popupPhoto.src=src;

photoPopup.style.display="flex";

}



function hidePopup(){

photoPopup.style.display="none";

}



/* ==========================================
   START
========================================== */

startBtn.addEventListener("click",()=>{

playMusic();

showPage(balloonPage);

});



/* ==========================================
   BALLOON GAME
========================================== */

balloons.forEach((balloon,index)=>{

balloon.addEventListener("click",()=>{

if(index!==currentBalloon) return;


// Pop Sound

playPop();


// Animation

balloon.style.pointerEvents="none";

balloon.style.transition=".4s";

balloon.style.transform="scale(0)";

balloon.style.opacity="0";


// Show Photo

setTimeout(()=>{

showPopup(

balloonImages[index]

);

},400);


// Hide after 3 sec

setTimeout(()=>{

hidePopup();

balloon.remove();

currentBalloon++;


// Finished

if(currentBalloon===balloons.length){

setTimeout(()=>{

showPage(giftPage);

},400);

}

},3400);

});

});

/* ==========================================
   GIFT PAGE
========================================== */

giftBtn.addEventListener("click", () => {

    giftBtn.disabled = true;

    const giftImage = document.querySelector(".giftImage");

    giftImage.style.transition = "1s";
    giftImage.style.transform = "scale(1.25) rotate(15deg)";

    setTimeout(() => {

        showPage(rosePage);

    }, 1200);

});


/* ==========================================
   ROSE PAGE
========================================== */

roseNext.addEventListener("click", () => {

    showPage(letterPage);

    document.querySelector(".envelope")
        .classList.add("open");

    setTimeout(() => {

        startLetter();

    }, 800);

});


/* ==========================================
   LETTER
========================================== */

const letterMessage = `Happy Birthday Arati ❤️

I hope today becomes one of the most beautiful days of your life.

May you always stay happy,
keep smiling,
achieve every dream,
and always be surrounded by people who truly care about you.

Thank you for being such a wonderful person.

Enjoy your special day. 🎂🌸`;


let letterIndex = 0;


 function startLetter() {

    letterText.textContent = "";

    letterIndex = 0;

    updateLetterButton();

    typeLetter();
}

 function typeLetter() {

    if (letterIndex < letterMessage.length) {

        letterText.textContent +=
            letterMessage.charAt(letterIndex);

        letterIndex++;

        updateLetterButton();

        setTimeout(typeLetter, 35);

    } else {

        updateLetterButton();

    }
}


function updateLetterButton() {

    const letter = document.querySelector(".letter");
    const button = document.getElementById("letterNext");

    if (!letter || !button) return;

    const letterHeight = letter.offsetHeight;

    button.style.marginTop = "25px";
}
/* ==========================================
   NEXT
========================================== */

letterNext.addEventListener("click", () => {

    showPage(cakePage);

});



/* ==========================================
   CAKE
========================================== */

cakeBtn.addEventListener("click", () => {

    cakeBtn.disabled = true;

    document.querySelector(".cake")
        .style.transform = "scale(.9)";

    document.querySelector(".cake")
        .style.transition = ".5s";

    setTimeout(() => {

        showPage(finalPage);

        startFinalTyping();

        birthdayEffects();

    }, 900);

});



/* ==========================================
   FINAL MESSAGE
========================================== */

const finalWish =

`✨ Happy Birthday Arati ✨

May all your dreams come true.

Stay Happy ❤️

Stay Healthy 🌸

Stay Blessed ✨

Have an amazing year ahead 🎂`;


let finalIndex = 0;


function startFinalTyping() {

    finalMessage.innerHTML = "";

    finalIndex = 0;

    typingFinal();

}


function typingFinal() {

    if (finalIndex < finalWish.length) {

        finalMessage.innerHTML +=

            finalWish.charAt(finalIndex);

        finalIndex++;

        setTimeout(typingFinal, 40);

    }

}

/* ==========================================
   PREMIUM EFFECTS
========================================== */

// Launch all effects together

function birthdayEffects(){

    launchConfetti();

    floatingHearts();

    fireworks();

    createStars();

    fallingPetals();

}


/* ==========================================
   CONFETTI
========================================== */

function launchConfetti(){

    const colors=[
        "#ff4b91",
        "#ffd166",
        "#06d6a0",
        "#3a86ff",
        "#8338ec",
        "#ffffff"
    ];

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        c.style.left=Math.random()*100+"vw";

        c.style.animationDuration=
        (2+Math.random()*3)+"s";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },6000);

    }

}


/* ==========================================
   FLOATING HEARTS
========================================== */

function floatingHearts(){

    const interval=setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=
        (18+Math.random()*20)+"px";

        heart.style.animationDuration=
        (4+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },7000);

    },350);

    setTimeout(()=>{

        clearInterval(interval);

    },18000);

}


/* ==========================================
   FIREWORKS
========================================== */

function fireworks(){

    const interval=setInterval(()=>{

        for(let i=0;i<20;i++){

            const spark=document.createElement("div");

            spark.className="spark";

            spark.innerHTML="✨";

            spark.style.left=
            Math.random()*100+"vw";

            spark.style.top=
            Math.random()*100+"vh";

            spark.style.fontSize=
            (16+Math.random()*20)+"px";

            document.body.appendChild(spark);

            setTimeout(()=>{

                spark.remove();

            },1800);

        }

    },1200);

    setTimeout(()=>{

        clearInterval(interval);

    },18000);

}


/* ==========================================
   STARS
========================================== */

function createStars(){

    for(let i=0;i<90;i++){

        const star=document.createElement("div");

        star.className="star";

        const size=Math.random()*4+2;

        star.style.width=size+"px";

        star.style.height=size+"px";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=
        Math.random()*2+"s";

        finalPage.appendChild(star);

    }

}


/* ==========================================
   ROSE PETALS
========================================== */

function fallingPetals(){

    const interval=setInterval(()=>{

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌹";

        petal.style.left=
        Math.random()*100+"vw";

        petal.style.fontSize=
        (18+Math.random()*20)+"px";

        petal.style.animationDuration=
        (5+Math.random()*3)+"s";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },7000);

    },500);

    setTimeout(()=>{

        clearInterval(interval);

    },15000);

}


/* ==========================================
   MUSIC BUTTON (Optional)
========================================== */

let musicPlaying=true;

function toggleMusic(){

    if(musicPlaying){

        bgMusic.pause();

        musicPlaying=false;

    }else{

        bgMusic.play();

        musicPlaying=true;

    }

}


console.log("Birthday Surprise V2 Loaded ❤️");

function updateLetterButton() {

    const letter = document.querySelector(".letter");
    const envelope = document.querySelector(".envelope");
    const button = document.getElementById("letterNext");

    if (!letter || !envelope || !button) return;

    const letterBottom =
        letter.offsetTop + letter.offsetHeight;

    envelope.style.height =
        (letterBottom + 30) + "px";
}
