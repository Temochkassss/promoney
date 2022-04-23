'use strict'

/*let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [], //[]- Так как это массив а не объект
    timeData: time,
    savings: false //не ставим ; так как правило
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != "" && a != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log('not done');
        i--;

    }

};

//whileeeeeeeeeee
/* let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов", ""),
    b = prompt("Во сколько обойдёься?", "");
    
    if (typeof (a) === 'string' && (typeof(a))!= null && (typeof(b))!= null
    && a != "" && a != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else { 
        console.log ('not done');
        i--;
       
    }
    i ++
}
*/
// dooooo
/*
let i = 0;
do {let a = prompt("Введите обязательную статью расходов", ""),
    b = prompt("Во сколько обойдёься?", "");

    if (typeof (a) === 'string' && (typeof(a))!= null && (typeof(b))!= null
    && a != "" && a != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else { 
        console.log ('not done');
        i--;
       
    }
    i ++
}
while (i < 2);
*/
/*
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay > 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка')
} else {
    console.log('Произошла непредвиденная ошибка');
}
*/

/*
function showFirstMessage (text) {
    alert(text);
}


showFirstMessage("Hello!");*/
function calc(a, b) {
    return (a + b);
}
 
console.log(calc(3, 4));
 
console.log(calc(5, 7));


function retVar () {
     let num = 50;
     return num;
}


let calc =  (a, b) => a + b;

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
console.log(parseInt(twelve));