function getInput(input) {
  const inputFild = document.getElementById(input);
  const inputResult = parseFloat(inputFild.value);
  inputFild.value = "";
  return inputResult;
}
function getTotalAmount(input) {
  const totalAmount = document.getElementById(input);
  return totalAmount;
}
function updateAmount(amount, isAdd) {
  let dipositText = getTotalAmount("deposit-amount");
  let withdrawAmount = getTotalAmount("withdraw-amount");
  let withdrawTotal = getTotalAmount("withdraw-total");
  console.log(
    dipositText.innerText,
    withdrawAmount.innerText,
    withdrawTotal.innerText
  );
  if (isAdd) {
    dipositText.innerText = amount + Number(dipositText.innerText);
    withdrawAmount.innerText = amount + Number(withdrawAmount.innerText);
  } else {
    withdrawTotal.innerText = amount + Number(withdrawTotal.innerText);
    withdrawAmount.innerText = Number(withdrawAmount.innerText) - amount;
  }
}

//deposit-btn
document.getElementById("deposit-btn").addEventListener("click", function () {
  const inputValue = getInput("deposit-input");
  if (inputValue > 0) {
    updateAmount(inputValue, true);
  }
});

// withdraw-btn

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const inputValue = getInput("withdraw-input");
  if (inputValue > 0) {
    updateAmount(inputValue, false);
  }
});
