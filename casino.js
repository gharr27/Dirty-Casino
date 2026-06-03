let balance = localStorage.getItem('balance') || 100;

const balanceText = document.querySelector(".balance");

const spinBtn = document.getElementById("spin");
const blackjackDialog = document.getElementById("blackjackDialog");
const blackjackOpenBtn = document.getElementById("blackjackOpen");
const blackjackCloseBtn = document.getElementById("blackjackClose");

updateBalance();

function openBlackjack() {
	console.log("open blackjack");
	blackjackDialog.showModal();
}

function closeBlackjack() {
	console.log("close blackjack");
	blackjackDialog.close();
}

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

function blackjack() {
	//Bet $10
	//Double if win
	//Hit or Stay
	//Dealer and player
	
	balance -= 10;
	updateBalance();
	
	let playerHand = 0;
	let dealerHand = 0;
	
	let choice = true;
	
	while (choice || playerHand >= 21) {
		dealerHand += dealCard();
		playerHand += dealCard();
	}
	
	
}

funct dealCard() {
	return Math.floor(Math.random() * 10) + 1;
}

spinBtn.addEventListener("click", slotMachine);
blackjackOpenBtn.addEventListener("click", openBlackjack);
blackjackCloseBtn.addEventListener("click", closeBlackjack);