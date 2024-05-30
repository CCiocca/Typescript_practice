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