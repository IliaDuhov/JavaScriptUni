console.log("------ Задание 1. Тип данных ------");
let a = 5;
if(typeof(a) == "number")
    console.log("This is number");
else if(typeof(a) == "undefined")
    console.log("This is undefined");
else if(typeof(a) == "bigint")
    console.log("This is bigint");
else if(typeof(a) == "boolean")
    console.log("This is boolean");
else if(typeof(a) == "string")
    console.log("This is string");
else if(a === null)
    console.log("This is null");
else if(typeof(a) == "object")
    console.log("This is object");


console.log("------ Задание 2. Знак задиака// Время года ------");
var znak=prompt("Назовите время года");
switch(znak){
    case 'лето':
        alert("Веселись летом");
        break;
    case 'осень':
        alert("Веселись осенью");
        break;
    case 'зима':
        alert("Веселись зимой");
        break;
    case 'весна':
        alert("Веселись весной");
         break;
    default:
        alert("Вы велли вымышленный сезон");
}

console.log("------ Задание 3. 0-40 ------");
for(let i=0;i<=40;i++){
    console.log(i);
}
let i=0;
while(i<41){
    console.log(i++);
}
i=0;
do console.log(i++);
while(i<41);

console.log("------ Задание 4. сортировка трёх чисел ------");
var num1, num2, nu3; //55 30 25
num1 = prompt("Введите первое число:");
num2 = prompt("Введите второе число:");
num3 = prompt("Введите третье число:");
if(num1 > num2 && num1 > num3)
    if(num2 > num3) console.log(num3, num2, num1);
    else console.log(num2, num3, num1);
else if(num2 > num1 && num2 > num3)
    if(num1 > num3) console.log(num3, num1, num2);
    else console.log(num1, num3, num2);
else if(num1 > num2) console.log(num2, num1, num3);
    else console.log(num1, num2, num3);

console.log("------ Задание 5. 0-15 ЧЕТ\НЕ ЧЕТ  ------");
for(let i=1; i<16; i++){
    if(i%2===0) console.log(i+' четное');
    else console.log(i+' НЕ четное');
}
console.log("------ Задание 6. Number>5  ------");
let number;
while (true){
    number = prompt("Введите число больше 5:");
    if(number > 5){
        alert("Молодец! Вы число больше пяти!");
        break;
    }
    else if(number === null) break;
    console.log("Неправильно! Введите число заново!");
}

console.log("------ Задание 7. 8-20 ЧЕТ  ------");
for(let i=8; i<21; i+=2){
    console.log(i+' четное');
}
console.log("------ Задание 8. 0-1000 SUM  ------");
let sum=0;
for(let i=0; i<=1000;i++){
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}
console.log(sum);

console.log("------ Задание 9. Число Армстронга ------");
number = prompt("Введите и узнайте в консоли число Армстронга:");
sum = 0;
for(let i = 0; i < 3; i++){
    sum += number[i] ** 3; //возводим число в степень
}
if(sum == number) console.log("Это число Армстронга");
else console.log("Это не число Армстронга");

console.log("------ Задание 10. Треугольник ------");
let string = '';
for(let i = 0; i < 3; i++) {
    for (let j = 0; j < i + 1; j++)
        string += "*";
    console.log(string);
    string = '';
}