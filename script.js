'use strict'

let money = prompt("Ваш бюджет на месяц?", "40000");
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [], //[]- Так как это массив а не объект
    timeData: time,
    savings: false //не ставим ; так как правило

};

let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt(" Во сколько обойдется"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);