// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrUsers = [];
for (let i = 0; i < 10; i++) {
   arrUsers.push(new User (i+1, "Oleh", "Kaban", "olefkjfk", 848489 ));
}
console.log(arrUsers);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterArrUsers = arrUsers.filter(value => value.id % 2 == 0);
console.log(filterArrUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedArrUsers = arrUsers.sort((a,b) => a.id - b.id);
console.log(sortedArrUsers);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let arrClients = [];
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana', 'pineapple'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana', 'watermelon'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana', 'apple', 'milk'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana','apple', 'milk','apple', 'milk'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana','apple', 'milk','apple', 'milk','apple', 'milk'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana'] ));
    arrClients.push(new Client (1, "Oleh", "Kaban", "olefkjfk", 848489, ['apple', 'milk', 'banana'] ));
console.log(arrClients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedArrClients = arrClients.sort((a,b) => a.order.length - b.order.length);
for (const sortedArrClient of sortedArrClients) {
    console.log(sortedArrClient.order);
}
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, producer, year, maxSpeed, volumeEngine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;
    this.drive = function (){
       console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    }
    this.info = function (){
        console.log(`model - ${this.model}`);
        console.log(`producer - ${this.producer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`volumeEngine - ${this.volumeEngine}`);
    }
    this.increaseMaxSpeed = function (newSpeed){
       let increaseMaxSpeed = newSpeed + maxSpeed
        console.log(increaseMaxSpeed);
    }
    this.changeYear = function (newValue){
        this.year = newValue
        console.log(this.year);
    }
    this.addDriver = function (...driver){
        Car.driver = {driver}
        console.log(Car.driver);
    }
}
let newCar = new Car ('RS6', 'Audi', 2022, 300, 4);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(10);
newCar.changeYear(1999);
newCar.addDriver('oleh', 12);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, producer, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
        }
        this.info = function (){
            console.log(`model - ${this.model}`);
            console.log(`producer - ${this.producer}`);
            console.log(`year - ${this.year}`);
            console.log(`maxSpeed - ${this.maxSpeed}`);
            console.log(`volumeEngine - ${this.volumeEngine}`);
        }
        this.increaseMaxSpeed = function (newSpeed){
            let increaseMaxSpeed = newSpeed + maxSpeed
            console.log(increaseMaxSpeed);
        }
        this.changeYear = function (newValue){
            this.year = newValue
            console.log(this.year);
        }
        this.addDriver = function (...driver){
            Car.driver = {driver}
            console.log(Car.driver);
        }
    }
}
let newClassCar = new CarClass ('RS6', 'Audi', 2022, 300, 4);
console.log(newClassCar);
newClassCar.drive();
newClassCar.info();
newClassCar.increaseMaxSpeed(10);
newClassCar.changeYear(1999);
newClassCar.addDriver('oleh', 12);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Popelushka (name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}
let arrPopelushka = [];
arrPopelushka.push(new Popelushka ('Popelushka', 19, 35));
arrPopelushka.push(new Popelushka ('Popelushka', 20, 36));
arrPopelushka.push(new Popelushka ('Popelushka', 21, 37));
arrPopelushka.push(new Popelushka ('Popelushka', 22, 38));
arrPopelushka.push(new Popelushka ('Popelushka', 23, 39));
arrPopelushka.push(new Popelushka ('Popelushka', 24, 40));
arrPopelushka.push(new Popelushka ('Popelushka', 25, 42));
arrPopelushka.push(new Popelushka ('Popelushka', 26, 42));
arrPopelushka.push(new Popelushka ('Popelushka', 27, 43));
arrPopelushka.push(new Popelushka ('Popelushka', 28, 44));
console.log(arrPopelushka);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, tufelkaSize) {
        this.name = name;
        this.age = age;
        this.tufelkaSize = tufelkaSize;
    }
}
let prince = new Prince('Mirerflour', 30, 36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const popelushka of arrPopelushka) {
    if (popelushka.size === prince.tufelkaSize) {
        console.log(popelushka);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(arrPopelushka.find(value => value.size === prince.tufelkaSize));