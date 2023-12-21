// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form1 = document.getElementById('#f1');
let users = [];
let divMain = document.createElement('div');
document.body.appendChild(divMain);
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = this.name.value;
    let surname = this.surname.value;
    let age = this.age.value;
    users.push({name, surname, age})
    let div = document.createElement('div');
    for (const user of users) {
        div.innerText = `name - ${user.name}
                         surname - ${user.surname}
                         age - ${user.age}
                         ----------------------`;
        divMain.appendChild(div);
    }
})
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let num = document.createElement('div');
// num.classList.add('num');
// let getNumbers = localStorage.getItem('num');
// let nums = JSON.parse(getNumbers) || [0];
// document.body.appendChild(num);
// window.addEventListener('load', function() {
//     nums[0] += 1;
//     localStorage.setItem('num', JSON.stringify(nums));
//     num.innerText = nums;
//     document.body.appendChild(num);
// })
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let data = localStorage.getItem('date');
let dataArr = JSON.parse(data) || [];
window.addEventListener('load', function() {
    let now = new Date()
    let sessionDate = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} --- ${now.getDay()}:${now.getMonth()+1}:${now.getFullYear()}`;
    dataArr.push(sessionDate);
   localStorage.setItem('date', JSON.stringify(dataArr));
})
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arrayOfObjects = [];
for (let i = 1; i < 101; i++) {
    let randomObject = {
        property1: "Value" + i,
        property2: getRandomInt(1, 100),
        property3: Math.random() > 0.5
    };

    arrayOfObjects.push(randomObject);
}

let divArrayOfObjects = document.createElement('div');
divArrayOfObjects.classList.add('flex');
document.body.appendChild(divArrayOfObjects);
let previous = document.createElement('button');
previous.innerText = 'previous';
let next = document.createElement('button');
next.innerText = 'next';
document.body.append(previous, next);
for (let i = 0; i < 10; i++) {
    let object = arrayOfObjects[i];
    let divObject = document.createElement('div');
    divObject.classList.add('box');
    divObject.innerText = `prop1 - ${object.property1}
                         prop2 - ${object.property2}
                         prop3 - ${object.property3}`;
    divArrayOfObjects.appendChild(divObject);
    next.addEventListener('click', function () {
            i = i + 10;
            let object = arrayOfObjects[i];
            let divObject = document.createElement('div');
            divObject.classList.add('box');
            divObject.innerText = `prop1 - ${object.property1}
                         prop2 - ${object.property2}
                         prop3 - ${object.property3}`;
            divArrayOfObjects.appendChild(divObject);
    })
    previous.addEventListener('click', function () {
        let object = arrayOfObjects[i];
        let divObject = document.createElement('div');
        divObject.classList.add('box');
        divObject.innerText = `prop1 - ${object.property1}
                         prop2 - ${object.property2}
                         prop3 - ${object.property3}`;
        divArrayOfObjects.appendChild(divObject);
        i -=10;
    })
}

//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let pp = document.createElement('p');
pp.innerText = 'fghjklkjhgfdfghjkl';
pp.setAttribute('id', 'text');
document.body.appendChild(pp);
let btn = document.createElement('button');
btn.innerText ='delete';
document.body.appendChild(btn);
btn.addEventListener('click', function () {
    if (pp.parentNode) {
        pp.parentNode.removeChild(pp);
    }
})
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form2 = document.getElementById('#age');
let form2Btn = document.getElementById('accept')
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    let age = this.ageUser.value;
    if (age >= 18) {
        alert('Скільки пляшок віскі вам?')
    } else {
        alert('Гуляй звідси')
    }
})
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
function createTable() {
    let rows = document.getElementById('rowsInput').value;
    let cols = document.getElementById('colsInput').value;
    let content = document.getElementById('contentInput').value;
    let tableContainer = document.getElementById('tableContainer');
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell(j);
            cell.textContent = content;
        }
    }
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається