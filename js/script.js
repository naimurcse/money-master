const displayTotalExpenses = document.getElementById("display-total-expenses");
const displayBalance = document.getElementById("display-balance");

const displaySavingAmount = document.getElementById("display-saving-amount");
const displayRemainingBalance = document.getElementById("display-remaining-balance");

// Define getValue() Function
function getValue(id) {
    let inputValue = document.getElementById(id + "-input");
    inputValue = inputValue.value;
    if (isNaN(inputValue)) {
        // console.log("The amount allows only numbers.");
        return "NaN-inputed"
    } else if (inputValue == "") {
        // console.log("Please Enter an amount");
        return "empty-inputed"
    } else if (inputValue < 0) {
        // console.log("Please Enter Positive Amount");
        return "negative-value-inputed"
    } else {
        inputValue = parseFloat(inputValue);
        return inputValue;
    }
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

// Get Error Massage
function getErrorMassage(err, id, field) {
    let displayError = document.getElementById(id);
    console.log(displayError);
    if (err == "NaN-inputed") {
        displayError.innerHTML = `
            Give number amount of <span class="fw-bold">${field} </span>
        `;
    } else if (err == "empty-inputed") {
        displayError.innerHTML = `
            Give an amount of <span class="fw-bold">${field}</span>
        `;
    } else if (err == "negative-value-inputed") {
        displayError.innerHTML = `
            Give an positive amount of <span class="fw-bold">${field} </span>
        `;
    } else {
        displayError.innerHTML = "";
    }
}

function isError(inputData) {
    if (inputData == "NaN-inputed" || inputData == "empty-inputed" || inputData == "negative-value-inputed") {
        return true;
    } else {
        return false;
    }
}
// Event handle by Calculate Btn
document.getElementById("calculate-btn").addEventListener("click", function() {
    let incomeErrorArea = document.getElementById("income-error-area");
    let expenseErrorArea = document.getElementById("experses-error-area");

    // Get Value From Income Input Field
    let incomeInput = getValue("income");
    // console.log(incomeInput, typeof incomeInput);

    if (isError(incomeInput)) {
        getErrorMassage(incomeInput, "income-err", "Income");
    } else {
        incomeErrorArea.innerHTML = "";
        let foodExpenseInput = getValue("food-expense");
        // console.log(foodExpenseInput, typeof foodExpenseInput);

        // Get Value From Rent Expense Input Field
        let rentExpenseInput = getValue("rent-expense");
        // console.log(rentExpenseInput, typeof rentExpenseInput);

        // Get Value From Clothes Expense Input Field
        let clothesExpenseInput = getValue("clothes-expense");
        // console.log(clothesExpenseInput, typeof clothesExpenseInput);

        if (isError(foodExpenseInput)) {
            getErrorMassage(foodExpenseInput, "expense-err", "Food Expense");
            console.log(foodExpenseInput, "ERROR FOOD");
        } else if (isError(rentExpenseInput)) {
            getErrorMassage(rentExpenseInput, "expense-err", "Rent Expense");
            console.log(rentExpenseInput, "ERROR FOOD");
        } else if (isError(clothesExpenseInput)) {
            getErrorMassage(clothesExpenseInput, "expense-err", "Clothes Expense");
            console.log(clothesExpenseInput, "ERROR FOOD");
        } else {
            // const totalExpenses = foodExpenseInput + rentExpenseInput + clothesExpenseInput;
            let totalBalance = incomeInput - getTotalExpenses();
            if (incomeInput < getTotalExpenses()) {
                expenseErrorArea.innerHTML = `<p id="expense-err">
                Your Expenses is more than your balance
                </p>`;
            } else {
                displayTotalExpenses.innerText = getTotalExpenses();
                displayBalance.innerText = totalBalance;
                expenseErrorArea.innerHTML = `<p id="expense-err"></p>`;
            }
        }
    }
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