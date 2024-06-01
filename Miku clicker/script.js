document.getElementById("play-button").addEventListener("click", function() {
    document.getElementById("play-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "flex";
});

const mikuImg = document.getElementById("miku-img");
const coinsDisplay = document.getElementById("coins");
const leeksContainer = document.getElementById("leeks");

let coins = 0;
let clickValue = 1;
let autoClickers = 0;
let autoClickValue = 0;

function updateCoinsDisplay() {
    coinsDisplay.textContent = coins;
}

function playClickSound() {
    // Add your sound file here
    const clickSound = new Audio("sound.mp3");
    clickSound.play();
}

mikuImg.addEventListener("click", function() {
    const income = clickValue;
    coins += income;
    updateCoinsDisplay();
    playClickSound();
});

function addLeek() {
    const leekIcon = document.createElement("img");
    leekIcon.src = "images/leek-icon.png";
    leekIcon.alt = "Leek";
    leeksContainer.appendChild(leekIcon);

    const interval = setInterval(() => {
        const autoIncome = autoClickValue;
        coins += autoIncome;
        updateCoinsDisplay();
    }, 5000);
}

document.getElementById("income-0.1").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        clickValue += clickValue * 0.001;
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("income-0.5").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        clickValue += clickValue * 0.005;
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("income-10").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        clickValue += clickValue * 0.1;
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("income-50").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        clickValue += clickValue * 0.5;
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("income-100").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        clickValue += clickValue;
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("add-leek-1").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        autoClickValue += clickValue * 0.3;
        coins -= cost;
        updateCoinsDisplay();
        addLeek();
    }
});

document.getElementById("add-leek-39").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        for (let i = 0; i < 39; i++) {
            autoClickValue += clickValue * 0.3;
        }
        coins -= cost;
        updateCoinsDisplay();
        for (let i = 0; i < 39; i++) {
            addLeek();
        }
    }
});

// Avatar and Background buttons functionality
document.getElementById("avatar-1").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        mikuImg.src = "images/wooden-miku.png";
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("avatar-2").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        mikuImg.src = "images/bronze-miku.png";
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("avatar-3").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        mikuImg.src = "images/black-miku.png";
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("avatar-4").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        mikuImg.src = "images/gold-miku.png";
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("avatar-5").addEventListener("click", function() {
    const cost = parseInt(this.getAttribute("data-cost"));
    if (coins >= cost) {
        mikuImg.src = "images/diamond-miku.png";
        coins -= cost;
        updateCoinsDisplay();
    }
});

document.getElementById("background-1").addEventListener("click", function() {
    document.body.style.background = "linear-gradient(to bottom, #ff69b4, #ff1493)";
});

document.getElementById("background-2").addEventListener("click", function() {
    document.body.style.background = "#87ceeb"; // sky blue
});

document.getElementById("background-3").addEventListener("click", function() {
    document.body.style.background = "#7fff00"; // chartreuse
});

document.getElementById("background-4").addEventListener("click", function() {
    document.body.style.background = "#00ced1"; // dark turquoise
});

document.getElementById("background-5").addEventListener("click", function() {
    document.body.style.background = "#ffa07a"; // light salmon
});
