const randomNumber1 = Math.floor((Math.random() *6 )+ 1);
console.log(randomNumber1)

let heading = document.getElementById("game-heading")
let dice1 = document.getElementById("img-1");

switch (randomNumber1) {
    case 1:
        dice1.setAttribute("src", "images/dice1.png");
        break;
    case 2:
        dice1.setAttribute("src", "images/dice2.png");
        break;
    case 3:
        dice1.setAttribute("src", "images/dice3.png");
        break;
    case 4:
        dice1.setAttribute("src", "images/dice4.png");
        break;
    case 5:
        dice1.setAttribute("src", "images/dice5.png");
        break;
    case 6:
        dice1.setAttribute("src", "images/dice6.png");
        break;

    default:
        break;
}


const randomNumber2 = Math.floor((Math.random() *6 )+ 1);
console.log(randomNumber1)

let dice2 = document.getElementById("img-2");

switch (randomNumber2) {
    case 1:
        dice2.setAttribute("src", "images/dice1.png");
        break;
    case 2:
        dice2.setAttribute("src", "images/dice2.png");
        break;
    case 3:
        dice2.setAttribute("src", "images/dice3.png");
        break;
    case 4:
        dice2.setAttribute("src", "images/dice4.png");
        break;
    case 5:
        dice2.setAttribute("src", "images/dice5.png");
        break;
    case 6:
        dice2.setAttribute("src", "images/dice6.png");
        break;

    default:
        break;
}


if(randomNumber1 > randomNumber2) {
    heading.innerHTML = "🎏 Player 1  Wins 🎏";

}

else if (randomNumber2 > randomNumber1){
    heading.innerHTML = "🎏 Player 2 Wins 🎏"
}

else {
    heading.innerHTML = "🎏 Draw 🎏"
}

const button = document.querySelector("button")

button.addEventListener("click" , function(){
    window.location.reload();
})
