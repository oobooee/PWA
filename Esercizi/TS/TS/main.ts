import { Log, Severity } from "./decorators/Log";
import { Car as C, Vehicle } from "./vehicles/Vehicle";

function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: any, b: any): any {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum("Hello ", "World!"));

let x: number = 10;

x = 11;

console.log("x = " + x);

const pi = 3.14;

const p = { name: "Pippo" };
p.name = "Pluto";

console.log(p);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let color: string = "red";
color = 'blue';

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let tupla: [number, string] [] = [ [1, "Mario Rossi"], [2, "Luca Bianchi"] ];

enum CompassPoint {
    NORTH = 1, SOUTH, WEST, EAST
}

let c1: CompassPoint = CompassPoint.EAST;

console.log(`c1 = ${CompassPoint[c1]}`);

let test: unknown = 5;

if (typeof test === 'string') {
  console.log(test.toUpperCase());
}

let age: number | string;

age = "10";

let [f, ...t] = [1,2,3];

console.log(f);
//console.log(s);
console.log(t);


function Person(n,s) {
    this.name = n;
    this.surname = s;
}

var mario = new Person("Mario", "Rossi");

var mario2 = {name: "Mario", surnamee: "Rossi"}

console.log(mario);




/*let v1: Vehicle = new Vehicle(2);
v1.drive();*/

let v2: Vehicle = new C("AB 123 ZX");
v2.start();
v2.drive();
v2.stop();

interface Book {
    title: string;
    isbn?: string;
}

let b1: Book = { title: "Novecento" };

console.log(b1);

@Log(Severity.HIGH)
class Employee {
    private _job: string;

    constructor(private name: string, private surname: string) {
    }

    get fullname() {
        return this.name + " " + this.surname;
    }

    set job(j: string) {
        this._job = j;
    }

    get job() {
        return this._job;
    }
}

let e: Employee = new Employee("Mario", "Bianchi");
console.log(`Employee is ${e.fullname}`);

let hello = (name: string) => {
    console.log(`Hello ${name}`);
}
