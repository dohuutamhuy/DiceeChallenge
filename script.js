function setDice(imgElement, diceValue) {
  if (!imgElement)
    return;
  switch (diceValue) {
    case 1:
      imgElement.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      imgElement.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      imgElement.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      imgElement.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      imgElement.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      imgElement.setAttribute("src", "images/dice6.png");
      break;
    default:
      window.alert(`Error: This diceValue should not happen - value: ${diceValue}`);
      break;
  }
}

function randomDiceValue() {
  return Math.floor(Math.random()*6)+1;
}

function main() {
  var d1 = randomDiceValue();
  var d2 = randomDiceValue();
  setDice(document.querySelector(".img1"), d1);
  setDice(document.querySelector(".img2"), d2);
  if (d1 > d2) {
    document.querySelector(".container>h1").textContent = "Player 1 Wins!";
  } else if (d2 > d1) {
    document.querySelector(".container>h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector(".container>h1").textContent = "Refresh Me";
  }
}

main()
