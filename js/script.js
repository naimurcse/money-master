const displayTotalExpenses = document.getElementById("display-total-expenses");
const displayBalance = document.getElementById("display-balance");

const displaySavingAmount = document.getElementById("display-saving-amount");
const displayRemainingBalance = document.getElementById("display-remaining-balance");

// Define getValue() Function
function getValue(id) {
    let inputValue = document.getElementById(id + "-input");
    inputValue = parseFloat(inputValue.value);
    return inputValue;
}

// Define getDisplayValue() Function
function getDisplayValue(id) {
    let displayValue = document.getElementById("display-" + id);
    displayValue = parseFloat(displayValue.innerText);
    return displayValue;
}

// Define getTotalExpenses() Function
function getTotalExpenses() {
    return getValue("food-expense") + getValue("rent-expense") + getValue("clothes-expense");
}


// Event handle by Calculate Btn
document.getElementById("calculate-btn").addEventListener("click", function() {

    // Get Value From Income Input Field
    let incomeInput = getValue("income");
    console.log(incomeInput, typeof incomeInput);

    // Get Value From Food Expense Input Field
    let foodExpenseInput = getValue("food-expense");
    console.log(foodExpenseInput, typeof foodExpenseInput);

    // Get Value From Rent Expense Input Field
    let rentExpenseInput = getValue("rent-expense");
    console.log(rentExpenseInput, typeof rentExpenseInput);

    // Get Value From Clothes Expense Input Field
    let clothesExpenseInput = getValue("clothes-expense");
    console.log(clothesExpenseInput, typeof clothesExpenseInput);

    // const totalExpenses = foodExpenseInput + rentExpenseInput + clothesExpenseInput;
    displayTotalExpenses.innerText = getTotalExpenses();

    let totalBalance = incomeInput - getTotalExpenses();
    displayBalance.innerText = totalBalance;
});

// Event handle by Save Btn
document.getElementById("save-btn").addEventListener("click", function() {

    // Get Value From Save Input Field
    const saveInput = getValue("save");

    // Get Value From Income Input Field
    const incomeInput = getValue("income");

    const totalBalance = incomeInput - getTotalExpenses();

    const savingAmount = incomeInput * (saveInput / 100);
    displaySavingAmount.innerText = savingAmount;
    displayRemainingBalance.innerText = totalBalance - savingAmount;

});