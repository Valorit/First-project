let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' &&
        a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i = i - 1;
    }
}

appData.monetPerDay = appData.budjet / 30;

alert("Ужедневный бюджет: " + appData.monetPerDay);

if(appData.monetPerDay < 1000) {
    console.log("Низкий уровень достатка");
} else if (appData.monetPerDay > 1000 && appData.monetPerDay < 3000) {
    console.log("Средний уровень достатка");
} else if(appData.monetPerDay > 3000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}