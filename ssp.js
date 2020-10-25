let winCounter = 0;
let loseCounter = 0;

const generateNumber = () => {
  const val = Math.random() * 3;
  return Math.floor(val);
};

const generateHand = () => {
  numb = generateNumber();
  let pchand = null;
  if (numb === 0) {
    pchand = "Sten";
  } else if (numb === 1) {
    pchand = "Saks";
  } else {
    pchand = "Papir";
  }
  userHand = document.getElementById("ditvalg").value;
  document.getElementById("hand").innerText = pchand;
  const resultat = hasUserWon(pchand, userHand);
  if (resultat === null) {
    document.getElementById("result").innerText = "Tie";
    document.getElementById("result").style.color = "black";
  } else if (resultat) {
    document.getElementById("result").innerText = "WON";
    document.getElementById("result").style.color = "green";
    winCounter += 1;
    document.getElementById("x").innerText =
      "Wins: " + winCounter.toString() + "<3";
  } else {
    document.getElementById("result").innerText = "Lose";
    document.getElementById("result").style.color = "red";
    loseCounter += 1;
    document.getElementById("y").innerText = "Loses: " + loseCounter.toString();
  }
};

const hasUserWon = (hand, userHand) => {
  if (hand === userHand) {
    return null;
  } else if (hand === "Sten" && userHand !== "Papir") {
    return false;
  } else if (hand === "Saks" && userHand !== "Sten") {
    return false;
  } else if (hand === "Papir" && userHand !== "Saks") {
    return false;
  } else {
    return true;
  }
};
