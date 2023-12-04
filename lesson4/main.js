// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcRectangleSquare (a, b) {
    return a*b;
}
console.log(calcRectangleSquare(2,3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcCicrleCircle (r) {
    return r*r*Math.PI;
}
console.log(calcCicrleCircle(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcCylinderSquare (radius, height) {
    return 2*Math.PI*radius*(height + radius)
}
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 4];
function showArrMembers (array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
showArrMembers(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writeParagraph (text) {
    document.write('<p>');
    document.write(text);
    document.write('</p>');
}
writeParagraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, recusandae?');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlWith3Li (item) {
    document.write('<ul>');
    document.write('<li>');
    document.write(item);
    document.write('</li>');
    document.write('<li>');
    document.write(item);
    document.write('</li>');
    document.write('<li>');
    document.write(item);
    document.write('</li>');
    document.write('</ul>');
}
createUlWith3Li(3);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlWithManyLi (item, quantity) {
    document.write('<ul>');
    for (let i = 0; i < quantity; i++) {
        document.write('<li>');
        document.write(item);
        document.write('</li>');
    }
    document.write('</ul>');
}
createUlWithManyLi('as', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrr = [1, 2, true, 'lorem'];
function createUlFromArr (array, quantity) {
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write('<li>');
        document.write(arrayElement);
        document.write('</li>');
    }
    document.write('</ul>');
}
createUlFromArr(arrr, 5);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
];
function createUlFromArrObj (array) {
    for (const arrayElement of array) {
        document.write('<div>');
        document.write(`${arrayElement.name} ${arrayElement.age} ${arrayElement.id}`);
        document.write('</div>');

    }
}
createUlFromArrObj(users);
// - створити функцію яка повертає найменьше число з масиву
let numbs = [2, 3, 5];
function minNumber (array) {
    let result = numbs[0];
    for (const arrayElement of array) {
        if (arrayElement < result) {
            result = arrayElement
        }
    }
    console.log(result);
}
minNumber(numbs)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum (arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement
    }
    console.log(sum);
}
sum(numbs);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let arrindex1 = 0;
    let arrindex2 = 0;
   arrindex1 = arr[index1];
   arrindex2 = arr[index2];
    arr[index2] = arrindex1
    arr[index1] = arrindex2
    console.log(arr);
}
swap([11,22,33,44],2,1);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange (sumUAH,currencyValues,exchangeCurrency) {
    let result = 0;
        for (const currencyValuesElement of currencyValues) {
            if (exchangeCurrency === currencyValuesElement.currency) {
                result =  sumUAH / currencyValuesElement.value
            }
        }
        console.log(result);
    }
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');