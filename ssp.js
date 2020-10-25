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
  } else if (resultat) {
    document.getElementById("result").innerText = "WON";
  } else {
    document.getElementById("result").innerText = "Lose";
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
