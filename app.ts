//lesson 03
function somma(a: number, b: number){
    return a + b;
}
console.log(somma(5,2));

// lesson 04: number, string, booleans
let num1: number;
let string1: string;
let bool1: boolean;

// lesson 05: objects, array, tuple

//object
let person: {
    name: string,
    surname: string,
    age: number,
    address: {
        street: string;
        number: number;
        city: string;
    }
}

person = {
    name: 'John',
    surname: 'Smith',
    age: 22,
    address: {
        street: "via Rossi",
        number: 45,
        city: "Rome"
    }
}

function getData(data: {id: number, username: string, password: string}){
    console.log(data.id);
}

getData({id:1, username: 'John', password:''})

//array
let arrNum: number[] = [1,4,5]
let arrString: string[] = ['ciao', 'hi', 'bonjour', 'hola']

//lesson 06: any, union, custom type, enum

//any
let prova: any[] = [3, 'ciao', true]

//union
let prova2: string | number = 'hey'

//custom type
type Person = {
    name: string,
    surname: string,
    age: number
}

let person1: Person

person1 = {
    name: 'John',
    surname: 'Smith',
    age: 38
}