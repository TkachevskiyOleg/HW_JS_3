// 1. Визначення віку та категорії особи:
var age = parseInt(prompt("Введіть ваш вік:"));

if (age >= 0 && age <= 12) {
    alert("Дитина");
} else if (age > 12 && age <= 18) {
    alert("Підліток");
} else if (age > 18 && age <= 60) {
    alert("Дорослий");
} else if (age > 60) {
    alert("Пенсіонер");
} else {
    alert("Некоректний вік");
}

// 2. Виведення символу за числовим вводом:
var number = parseInt(prompt("Введіть число від 0 до 9:"));

switch (number) {
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("*");
        break;
    case 8:
        alert("(");
        break;
    case 9:
        alert(")");
        break;
    default:
        alert("Некоректне число");
}

// 3. Перевірка на однакові цифри у тризначному числі:
var threeDigitNumber = prompt("Введіть тризначне число:");
var digits = threeDigitNumber.split('').map(Number);

if (digits[0] === digits[1] && digits[1] === digits[2]) {
    alert("У числі однакові цифри");
} else {
    alert("У числі різні цифри");
}

// 4. Перевірка на високосний рік:
var year = parseInt(prompt("Введіть рік:"));

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert("Високосний рік");
} else {
    alert("Не високосний рік");
}

// 5. Визначення паліндрому для п'ятирозрядного числа:
var fiveDigitNumber = prompt("Введіть п'ятирозрядне число:");

if (fiveDigitNumber.length === 5 && fiveDigitNumber === fiveDigitNumber.split('').reverse().join('')) {
    alert("Це паліндром");
} else {
    alert("Не паліндром");
}

// 6. Конвертор валют:
var usdAmount = parseFloat(prompt("Введіть суму в USD:"));
var targetCurrency = prompt("Введіть валюту для конвертації (EUR, UAN або AZN):");
var exchangeRate;

switch (targetCurrency) {
    case "EUR":
        exchangeRate = 0.85;
        break;
    case "UAN":
        exchangeRate = 27.5;
        break;
    case "AZN":
        exchangeRate = 1.7;
        break;
    default:
        alert("Некоректна валюта");
        break;
}

if (exchangeRate !== undefined) {
    var convertedAmount = usdAmount * exchangeRate;
    alert(`Сума в ${targetCurrency}: ${convertedAmount.toFixed(2)}`);
}
// 7. Знижка на суму покупки:
var purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));
var discount;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05;
} else if (purchaseAmount >= 500) {
    discount = 0.07;
} else {
    discount = 0;
}

var discountedAmount = purchaseAmount - (purchaseAmount * discount);
alert(`Сума до сплати зі знижкою: ${discountedAmount.toFixed(2)}`);

// 8. Перевірка чи коло може поміститися у квадрат:
var circleRadius = parseFloat(prompt("Введіть радіус кола:"));
var squarePerimeter = parseFloat(prompt("Введіть периметр квадрата:"));
var circleDiameter = circleRadius * 2;

if (circleDiameter <= squarePerimeter) {
    alert("Коло може поміститися у квадрат");
} else {
    alert("Коло не може поміститися у квадрат");
}

// 9. Кількість балів за питання-відповідь:
var score = 0;


var answer1 = prompt("Яка столиця Франції?\n1. Берлін\n2. Лондон\n3. Париж");
if (answer1 === "3") {
    score += 2;
}


var answer2 = prompt("Який найвищий горизонтальний об'єкт на Землі?\n1. Ейфелева вежа\n2. Бурдж Халіфа\n3. Статуя Свободи");
if (answer2 === "2") {
    score += 2;
}


var answer3 = prompt("Яке тваринне царство налічує найбільше видів?\n1. Земноводні\n2. Риби\n3. Комахи");
if (answer3 === "3") {
    score += 2;
}

alert(`Кількість набраних балів: ${score}`);

// 10. Виведення наступної дати:
var day = parseInt(prompt("Введіть день:"));
var month = parseInt(prompt("Введіть місяць:"));
var year = parseInt(prompt("Введіть рік:"));

var daysInMonth = new Date(year, month, 0).getDate();
var nextDay = day + 1;
var nextMonth = month;
var nextYear = year;

if (nextDay > daysInMonth) {
    nextDay = 1;
    nextMonth += 1;
    if (nextMonth > 12) {
        nextMonth = 1;
        nextYear += 1;
    }
}
alert(`Наступна дата: ${nextDay}.${nextMonth}.${nextYear}`);
