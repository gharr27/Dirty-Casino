let balance = localStorage.getItem('balance') || 100;

const balanceText = document.querySelector(".balance");

const spinBtn = document.getElementById("spin");

updateBalance();

function updateBalance() {
  balanceText.textContent = `Balance: ${balance}`;
  localStorage.setItem('balance', balance);
}

function slotMachine() {
  const result = document.querySelector(".result");
  let spin = Math.floor(Math.random() * 10) + 1;
  
  console.log(spin);
  
  if (spin == 10) {
    result.textContent = "You win!"
    balance += 10;
  }
  else {
    result.textContent = "You Lose!"
    balance -= 1;
  }
  
  updateBalance();
}

spinBtn.addEventListener("click", slotMachine);