"use strict";
//lesson 03
function somma(a, b) {
    return a + b;
}
console.log(somma(5, 2));
// lesson 04: number, string, booleans
let num1;
let string1;
let bool1;
// lesson 05: objects, array, tuple
//object
let person;
person = {
    name: 'John',
    surname: 'Smith',
    age: 22,
    address: {
        street: "via Rossi",
        number: 45,
        city: "Rome"
    }
};
function getData(data) {
    console.log(data.id);
}
getData({ id: 1, username: 'John', password: '' });
//array
let arrNum = [1, 4, 5];
let arrString = ['ciao', 'hi', 'bonjour', 'hola'];
//lesson 06: any, union, custom type, enum
//any
let prova = [3, 'ciao', true];
//union
let prova2 = 'hey';
let person1;
person1 = {
    name: 'John',
    surname: 'Smith',
    age: 38
};
//enum
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["GUEST"] = "guest";
})(Role || (Role = {}));
let person2 = {
    name: 'Luca',
    surname: 'Rossi',
    role: Role.ADMIN
};
//lesson 07 : functions
function sum(num1, num2 = 1) {
    return num1 + num2;
}
function niente(stringa) {
    console.log(stringa);
}
let prova3;
prova3 = sum;
