// Player expense calculation here.

document.getElementById("btn-calculate").addEventListener("click", function () {
  let playerCount = playerNames.length;

  let perPlayerAmountString = document.getElementById("perPlayerAmount").value;
  const perPlayerCost = parseFloat(perPlayerAmountString);

  // calculating the player expense amount
  const playerExpense = playerCount * perPlayerCost;

  //   set the value of player expense
  document.getElementById("playerExpense").innerText = playerExpense;

  // clearing the input field of per player amount after setting the expense
  document.getElementById("perPlayerAmount").value = "";

  // validation part

  if (playerCount < 1) {
    alert("Please select at least one player");
  } else if (isNaN(perPlayerCost)) {
    alert("Please enter cost amount per player in number format");
  }
});

// calculate Total part

document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    let managerCostAmountString =
      document.getElementById("managerCostAmount").value;

    const managerCost = parseFloat(managerCostAmountString);

    let coachCostAmountString =
      document.getElementById("coachCostAmount").value;

    const coachCost = parseFloat(coachCostAmountString);

    let playerCostString = document.getElementById("playerExpense").innerText;
    const playerCost = parseFloat(playerCostString);

    let totalEstimate = coachCost + managerCost + playerCost;

    // set the total budget value
    document.getElementById("totalBudget").innerText = totalEstimate;

    if (playerCost < 1) {
      alert("Please calculate player expense first");
    } else if (isNaN(managerCost)) {
      alert("Please enter cost amount for manager in number format");
    } else if (isNaN(coachCost)) {
      alert("Please enter cost amount for  coach in number format");
    }

    // clearing the input field of per player amount after setting the expense
    document.getElementById("managerCostAmount").value = "";
    document.getElementById("coachCostAmount").value = "";
  });
