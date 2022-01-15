const close = document.getElementById("close");
const header = document.getElementById("header");
const setting = document.getElementById("setting");
const text_input = document.getElementById("text_input");
const rand_text = document.getElementById("rand_text");
const score_val = document.getElementById("score");
const game_over = document.getElementById("game_over");
const time_left = document.getElementById("time_left");
const score_over = document.getElementById("score_over");
const reset = document.getElementById("reset");
const difficulty = document.getElementById("difficulty");


const words_easy = [
    "sigh",
    "tense",
    "ball",
    "pies",
    "juice",
    "warlike",
    "bad",
    "north",
    "steer",
    "silver",
    "quince",
    "eight",
    "feeble",
    "admit",
    "drag",
    "loving"
];

const words_medium = [
    "airplane",
    "dependent",
    "highfalutin",
    "superficial",
    "pomegranate",
    "gladiolus",
    "canvass",
    "woodsy",
    "jealous",
    "salesperson",
    "personality",
    "community",
    "compromise"
];  

const words_hard = [
    "Consanguineous",
    "Psychotomimetic",
    "Trichotillomania",
    "Omphaloskepsis",
    "Myrmecophilous",
    "Xenotransplantation",
    "Embourgeoisement",
    "Polyphiloprogenitive",
    "Tergiversation",
    "Impedimenta",
    "Jackasseries",
    "Connecticutian"
]

let random_word;
let score = 0;
let timer = 9;
let chosenWorldList;

const setchosenWorldList =  () => {
    if (difficulty.value == "medium") {
        chosenWorldList = words_medium;
    } else if (difficulty.value == "easy") {
        chosenWorldList = words_easy;
    } else {
        chosenWorldList = words_hard;
    }
}

const generateRandomWord = () => {
    setchosenWorldList();
    random_word = chosenWorldList[Math.floor(Math.random() * chosenWorldList.length)];
    rand_text.innerText = random_word;
}

text_input.focus();

setting.style.display == "none";

close.addEventListener("click", () => {
    header.classList.toggle("zero_height");
    setting.classList.toggle("show");
})

setting.addEventListener("click", () => {
    header.classList.toggle("zero_height");
    setting.classList.toggle("show");
})

text_input.addEventListener("input", (e) => {
    if (e.target.value === random_word) {
        score++;
        score_val.innerText = score;
        e.target.value = "";
        generateRandomWord();
    }
})

reset.addEventListener("click", (e)=>{
    generateRandomWord();
    game_over.classList.toggle("show");
    score = 0;
    score_val.innerText = score;
    timer = 10;
    time_left.innerText = timer + "s";
    text_input.focus();
    run();
})

difficulty.addEventListener("change", (e)=>{
    setchosenWorldList();
})

const run = () => {
    const updater = setInterval(()=>{
        time_left.innerText = timer + "s";
        if (timer === 0) {
            clearInterval(updater);
            game_over.classList.toggle("show");
            score_over.innerText = score;
        }
        timer--;
    },1000);
}

generateRandomWord();
score_val.innerText = score;
run();


