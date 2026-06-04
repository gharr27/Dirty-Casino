let balance = localStorage.getItem('balance') || 100;
let playerHand = 0;
let dealerHand = 0;

//Elements
const balanceText = document.querySelector(".balance");
const blackjackDialog = document.getElementById("blackjackDialog");

//Buttons:
const spinBtn = document.getElementById("spin");
const blackjackOpenBtn = document.getElementById("blackjackOpen");
const hitBtn = document.getElementById("hitBtn");
const stayBtn = document.getElementById("stayBtn");

updateBalance();

//Blackjack
function openBlackjack() {
	console.log("open blackjack");
	blackjackDialog.showModal();
	
	dealerHand = 0;
	playerHand = 0;
	
	balance -= 10;
	updateBalance();
	
	blackjack();
}
function closeBlackjack() {
	blackjackDialog.close();
}
function hit() {
	blackjack();
}
function stay() {
	
	if (playerHand == dealerHand) {
		console.log("Tie");
		balance += 10;
	}
	else if (playerHand == 21) {
		console.log("You win!");
		balance += 100;
	}
	else if (playerHand > dealerHand && playerHand <= 21) {
		console.log("You win!");
		balance += 100;
	}
	else {
		console.log("You lose.");
	}
	updateBalance();
	closeBlackjack();
}
function dealCard() {
	let card = Math.floor(Math.random() * 10) + 1;
	console.log(card);
	return card;
}
function blackjack() {
	if(dealerHand <= 16) {
		dealerHand += dealCard();
	}
	playerHand += dealCard();
	
	if (playerHand >= 21 || dealerHand >= 21) {
		stay();
	}
	console.log(`Dealer Hand: ${dealerHand}`);
	console.log(`Player Hand: ${playerHand}`);
}

//Slot Machine
function updateBalance() {
  balanceText.textContent = `Balance: $${balance}`;
  localStorage.setItem('balance', balance);
}

function slotMachine() {
  const result = document.querySelector(".result");
  let spin = Math.floor(Math.random() * 10) + 1;
  
  console.log(spin);
  
  if (spin == 10) {
    result.textContent = "You win!";
    balance += 10;
  }
  else {
    result.textContent = "You Lose!";
    balance -= 1;
  }
  
  updateBalance();
}

spinBtn.addEventListener("click", slotMachine);
blackjackOpenBtn.addEventListener("click", openBlackjack);
hitBtn.addEventListener("click", hit);
stayBtn.addEventListener("click", stay);