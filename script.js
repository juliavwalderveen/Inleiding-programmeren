// Array aanmaken voor de kaartjes
const cardArray = [
    {
        name: 'Denemarken',
        img:'img/Denemarken_foto_1.jpg',
    },
    {
        name: 'Hongarije',
        img:'img/Hongarije_foto_2.jpg',
    },
    {
        name: 'Ierland',
        img:'img/Ierland_foto_3.jpg',
    },
    {
        name: 'Italie1',
        img:'img/Italie_foto_4.jpg',
    },
    {
        name: 'Italie2',
        img:'img/Italie_foto_5.jpg',
    },
    {
        name: 'Marokko1',
        img:'img/Marokko_foto_6.jpg',
    },
    {
        name: 'Marokko2',
        img:'img/Marokko_foto_7.jpg',
    },
    {
        name: 'Oostenrijk',
        img:'img/Oostenrijk_foto_8.jpg',
    },
    {
        name: 'Polen',
        img:'img/Polen_foto_9.jpg',
    },
    {
        name: 'Slovenie1',
        img:'img/Slovenie_foto_10.jpg',
    },
    {
        name: 'Slovenie2',
        img:'img/Slovenie_foto_11.jpg',
    },
    {
        name: 'Spanje',
        img:'img/Spanje_foto_12.jpeg',
    },
    {
        name: 'Tsjechie',
        img:'img/Tsjechie_foto_13.jpg',
    },
    {
        name: 'Zweden1',
        img:'img/Zweden_foto_14.jpg',
    },
    {
        name: 'Zweden2',
        img:'img/Zweden_foto_15.jpg',
    },
    {
        name: 'Zweden3',
        img:'img/Zweden_foto_16.jpg',
    },
    {
        name: 'Denemarken',
        img:'img/Denemarken_foto_1.jpg',
    },
    {
        name: 'Hongarije',
        img:'img/Hongarije_foto_2.jpg',
    },
    {
        name: 'Ierland',
        img:'img/Ierland_foto_3.jpg',
    },
    {
        name: 'Italie1',
        img:'img/Italie_foto_4.jpg',
    },
    {
        name: 'Italie2',
        img:'img/Italie_foto_5.jpg',
    },
    {
        name: 'Marokko1',
        img:'img/Marokko_foto_6.jpg',
    },
    {
        name: 'Marokko2',
        img:'img/Marokko_foto_7.jpg',
    },
    {
        name: 'Oostenrijk',
        img:'img/Oostenrijk_foto_8.jpg',
    },
    {
        name: 'Polen',
        img:'img/Polen_foto_9.jpg',
    },
    {
        name: 'Slovenie1',
        img:'img/Slovenie_foto_10.jpg',
    },
    {
        name: 'Slovenie2',
        img:'img/Slovenie_foto_11.jpg',
    },
    {
        name: 'Spanje',
        img:'img/Spanje_foto_12.jpeg',
    },
    {
        name: 'Tsjechie',
        img:'img/Tsjechie_foto_13.jpg',
    },
    {
        name: 'Zweden1',
        img:'img/Zweden_foto_14.jpg',
    },
    {
        name: 'Zweden2',
        img:'img/Zweden_foto_15.jpg',
    },
    {
        name: 'Zweden3',
        img:'img/Zweden_foto_16.jpg',
    }
];

// Kaartjes random sorteren
cardArray.sort(() => 0.5 - Math.random());

// Variabelen aanmaken om later mee te kunnen werken
const grid = document.querySelector("#grid");
const resultGrid = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

const cheat = document.querySelector("body")
cheat.addEventListener("keydown", cheatF)

// Bord aanmaken
function createBord() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "Achterkant.svg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
        card.classList.add("card");
    };
}
createBord()

// Checken voor een match
function checkMatch() {
    const cards = document.querySelectorAll("img");
    const clickedOne = cardsChosenIds[0];
    const clickedTwo = cardsChosenIds [1];
    if (clickedOne == clickedTwo) {
        cards[clickedOne].setAttribute("src", "Achterkant.svg");
        cards[clickedTwo].setAttribute("src", "Achterkant.svg");
        turnOffAlert("Je hebt al op dit plaatje geklikt, kies een andere"); // als je op dezelfde kaart klikt krijg je een melding
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        turnOffAlert("Het is een match!");
        const audioMatch = new Audio("audio/pop2-84862.mp3"); // (Pixabay Mp3, z.d.)
        audioMatch.play();
        cards[clickedOne].setAttribute("src", "white.png");
        cards[clickedTwo].setAttribute("src", "white.png");
        cards[clickedOne].removeEventListener("click", flipCard);
        cards[clickedTwo].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[clickedOne].setAttribute("src", "Achterkant.svg");
        cards[clickedTwo].setAttribute("src", "Achterkant.svg");
        turnOffAlert("Helaas, probeer opnieuw");
    }
    // (freeCodeCamp.org, 2022) en oud klasgenoot als hulp voor dit en bovenstaand stukje code

// Score van gevonden matches
    resultGrid.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    endGame();
}

// Einde spel wanneer alle matches gevonden zijn
function endGame() {
    if (cardsWon.length == (cardArray.length/2)) {
        resultGrid.textContent = "gefeliciteerd!";
        alert("Gefeliciteerd, je hebt alles gevonden");
        const audioFinish = new Audio("audio/short-applause-96213.mp3"); // (Pixabay Mp3, z.d.)
        audioFinish.play();
    }
}

function cheatF() {
    resultGrid.textContent = "gefeliciteerd!";
    alert("Gefeliciteerd, je hebt alles gevonden");
    const audioFinish = new Audio("short-applause-96213.mp3"); // (Pixabay Mp3, z.d.)
    audioFinish.play();
    }


// Functie om de kaarten te laten flippen
function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    const audioFlip = new Audio("audio/flipcard-91468.mp3"); // (Pixabay Mp3, z.d.)
    audioFlip.play();
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 750);
    }
}

// Timer
let minutesLabel = document.getElementById("minuten");
let secondsLabel = document.getElementById("secondes");
let totalSeconds = 0;
let timerInterval = setInterval(setTime, 1000);

// Seconden en minuten, stopt wanneer alle matches gevonden zijn
function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    if (document.querySelector("#result").textContent === "gefeliciteerd!") {
        clearInterval(timerInterval);
    }
}
// (Chat Gpt, z.d.) 

// Zet integers om naar strings
function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
    return "0" + valString;
    } 
    else {
    return valString;
    }
}

// Melding weg na een seconde
function turnOffAlert(message) {
    // div aanmaken voor de alert
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert");
    alertBox.textContent = message;

    // Voegt de melding toe
    document.body.appendChild(alertBox);

    // Zorgt ervoor dat de melding na een seconde verdwijnt
    setTimeout(function() {
        alertBox.remove();
    }, 1000);
} 
// (Chat Gpt, z.d.) voor debugging




// Bronnenlijst:
// Chat gpt. (z.d.). Chatgpt. Geraadpleegd op 21 maart 2024, van https://chat.openai.com/
// Pixabay mp3. (z.d.). Pixabay. Geraadpleegd op 21 maart 2024, van https://pixabay.com/nl/sound-effects/search/explosie/
// freeCodeCamp.org. (2022, 28 februari). Learn JavaScript by Building 7 Games - Full Course [Video]. YouTube. https://www.youtube.com/watch?v=ec8vSKJuZTk