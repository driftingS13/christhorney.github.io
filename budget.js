// Arrays to store expenses and income
let expenses = [];
let income = [];

// Add an expense
function addExpense() {
    const expenseName = document.getElementById("expense-name").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);
    const frequency = document.getElementById("expense-frequency").value;
    const startDate = document.getElementById("expense-start-date").value;
    const isOngoing = document.getElementById("expense-ongoing").checked;

    if (!expenseName || isNaN(amount) || amount <= 0 || !frequency) {
        alert("Please fill out all required fields for the expense.");
        return;
    }

    const expense = { name: expenseName, amount, frequency, startDate, isOngoing };
    expenses.push(expense);
    updateExpenseTable();
    calculateTotals();
    clearExpenseForm();
}

// Add an income
function addIncome() {
    const incomeName = document.getElementById("income-name").value;
    const amount = parseFloat(document.getElementById("income-amount").value);
    const frequency = document.getElementById("income-frequency").value;
    const startDate = document.getElementById("income-start-date").value;
    const isOngoing = document.getElementById("income-ongoing").checked;

    if (!incomeName || isNaN(amount) || amount <= 0 || !frequency) {
        alert("Please fill out all required fields for the income.");
        return;
    }

    const incomeEntry = { name: incomeName, amount, frequency, startDate, isOngoing };
    income.push(incomeEntry);
    updateIncomeTable();
    calculateTotals();
    clearIncomeForm();
}

// Update expense table
function updateExpenseTable() {
    const expenseTable = document.getElementById("expense-table-body");
    expenseTable.innerHTML = "";

    expenses.forEach((expense, index) => {
        const row = expenseTable.insertRow();
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>${expense.frequency}</td>
            <td>${expense.startDate}</td>
            <td>${expense.isOngoing ? "Yes" : "No"}</td>
            <td><button onclick="deleteExpense(${index})">Delete</button></td>
        `;
    });
}

// Update income table
function updateIncomeTable() {
    const incomeTable = document.getElementById("income-table-body");
    incomeTable.innerHTML = "";

    income.forEach((incomeEntry, index) => {
        const row = incomeTable.insertRow();
        row.innerHTML = `
            <td>${incomeEntry.name}</td>
            <td>${incomeEntry.amount.toFixed(2)}</td>
            <td>${incomeEntry.frequency}</td>
            <td>${incomeEntry.startDate}</td>
            <td>${incomeEntry.isOngoing ? "Yes" : "No"}</td>
            <td><button onclick="deleteIncome(${index})">Delete</button></td>
        `;
    });
}

// Delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseTable();
    calculateTotals();
}

// Delete an income entry
function deleteIncome(index) {
    income.splice(index, 1);
    updateIncomeTable();
    calculateTotals();
}

// Calculate totals for budget
function calculateTotals() {
    const expenseTotals = calculateFrequencyTotals(expenses);
    const incomeTotals = calculateFrequencyTotals(income);

    document.getElementById("daily-expenses").innerText = expenseTotals.daily.toFixed(2);
    document.getElementById("weekly-expenses").innerText = expenseTotals.weekly.toFixed(2);
    document.getElementById("monthly-expenses").innerText = expenseTotals.monthly.toFixed(2);

    document.getElementById("daily-income").innerText = incomeTotals.daily.toFixed(2);
    document.getElementById("weekly-income").innerText = incomeTotals.weekly.toFixed(2);
    document.getElementById("monthly-income").innerText = incomeTotals.monthly.toFixed(2);

    const afterTaxIncome = incomeTotals.daily * 7 - expenseTotals.daily * 7;
    document.getElementById("after-tax-total").innerText = afterTaxIncome.toFixed(2);
}

// Calculate totals based on frequency
function calculateFrequencyTotals(entries) {
    let daily = 0;

    entries.forEach((entry) => {
        switch (entry.frequency.toLowerCase()) {
            case "daily":
                daily += entry.amount;
                break;
            case "weekly":
                daily += entry.amount / 7;
                break;
            case "monthly":
                daily += entry.amount / 30;
                break;
            case "yearly":
                daily += entry.amount / 365;
                break;
        }
    });

    return {
        daily,
        weekly: daily * 7,
        monthly: daily * 30,
        yearly: daily * 365,
    };
}

// Clear the expense form
function clearExpenseForm() {
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
    document.getElementById("expense-frequency").value = "daily";
    document.getElementById("expense-start-date").value = "";
    document.getElementById("expense-ongoing").checked = false;
}

// Clear the income form
function clearIncomeForm() {
    document.getElementById("income-name").value = "";
    document.getElementById("income-amount").value = "";
    document.getElementById("income-frequency").value = "daily";
    document.getElementById("income-start-date").value = "";
    document.getElementById("income-ongoing").checked = false;
}
