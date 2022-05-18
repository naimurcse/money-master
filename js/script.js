// const incomeInput = document.getElementById("income-input");

// let foodExpenseInput = document.getElementById("food-expense-input");
// const rentExpenseInput = document.getElementById("rent-expense-input");
// const clothesExpenseInput = document.getElementById("clothes-expense-input");



const displayTotalExpenses = document.getElementById("display-total-expenses");
const displayBalance = document.getElementById("display-balance");

const displaySavingAmount = document.getElementById("display-saving-amount");
const displayRemainingBalance = document.getElementById("display-remaining-balance");


function getValue(id) {
    let inputValue = document.getElementById(id + "-input");
    inputValue = parseFloat(inputValue.value);
    return inputValue;
}

function getDisplayValue(id) {
    let displayValue = document.getElementById("display-" + id);
    displayValue = parseFloat(displayValue.innerText);
    return displayValue;
}

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

});