// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [11, 22, 33, 'asd', true, 11, 45, 87, false, 'aa']
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'a',
    pageCount: 200,
    genre: 'poetry'
}
let book2 = {
    title: 'b',
    pageCount: 250,
    genre: 'drama'
}
let book3 = {
    title: 'c',
    pageCount: 500,
    genre: 'prose'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'a',
    pageCount: 200,
    genre: 'poetry',
    authors: [{name: 'aa', age: 33},{name: 'ab', age: 40}]
}
let book5 = {
    title: 'b',
    pageCount: 250,
    genre: 'drama',
    authors: [{name: 'ad', age: 33},{name: 'ah', age: 40}]
}
let book6 = {
    title: 'c',
    pageCount: 500,
    genre: 'prose',
    authors: [{name: 'aq', age: 33},{name: 'aw', age: 40}]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'oleh0', username:'mickle0', password: 'ajdhhdhd'},
    {name: 'oleh1', username:'mickle1', password: 'ajdhhdhhdhdd'},
    {name: 'oleh2', username:'mickle2', password: 'ajdjejdhhdhd'},
    {name: 'oleh3', username:'mickle3', password: 'ajdhhdcjhhfhd'},
    {name: 'oleh4', username:'mickle4', password: 'ajdhh23dhd'},
    {name: 'oleh5', username:'mickle5', password: 'ajdhhfhdhd'},
    {name: 'oleh6', username:'mickle6', password: 'ajdhh3456ydhd'},
    {name: 'oleh7', username:'mickle7', password: 'ajdhhsdfghjdhd'},
    {name: 'oleh8', username:'mickle8', password: 'ajd6543hhdhd'},
    {name: 'oleh9', username:'mickle9', password: 'ajdhhdjcdhvbhvdbhd'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 30;
x = 1;
x = 0;
x = -3;
if (x !==0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 20;
if (time >= 0 && time <= 59) {
    if (time >= 0 && time <= 15) {
        console.log('перша');
    } else if (time >= 16 && time <= 30) {
        console.log('друга');
    }
    else if (time >= 31 && time <= 45) {
        console.log('третя');
    } else if (time >= 45 && time <= 59) {
        console.log('четвера');
    }
} else {
    console.log('час введено не вірно');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 10;
if (day >= 1 && day <= 9) {
    console.log('перша декада');
} else if (day >= 10 && day <= 19) {
    console.log('друга декада');
} else if (day >= 20 && day <= 31) {
    console.log('друга декада');
} else { console.log('В місяці тільки 31 день');}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayss = +prompt('порядковий номер дня тижня?');
switch (dayss) {
    case 1:
        console.log('понеділок');
        break;
    case  2:
        console.log('вівторок');
        break;
    case 3:
        console.log('середа');
        break;
    case 4:
        console.log('четвер');
        break;
    case 5:
        console.log("п'ятниця");
        break;
    case 6:
        console.log('субота');
        break;
    case 7:
        console.log('неділя');
        break;

    default:
        console.log('В тижні тільки 7 днів');
}
//     - Користувач вводить або має два числа.`
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let firstNumber = 10;
let secondNumber = 10;
if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
} else if (firstNumber === secondNumber) {
    console.log('числа рівні');
} else {
    console.log('введи нормальні числа');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
    let xx = prompt('може прийняти будь-яке значення');
    if (xx || '') {
        console.log('true');
    } else {
        xx = 'default'
        console.log(xx);
    }
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log('Супер');
    }
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}