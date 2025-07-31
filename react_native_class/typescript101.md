// The base function

// createContext(initialValue)

// By default, React doesn’t know what kind of value you’ll put into this context. You could pass a number, a string, an object—anything.

createContext<SomeType>(initialValue)

The <SomeType> tells TypeScript, “Hey, in this context I will always store a value of type SomeType.”

If you then try to put in or read a different type, you’ll get a compile‑time error.

We choose null as the default and tell TypeScript “this context might be null until the Provider sets it.”

### simple Javascript

function add(a, b) {
return a + b;
}

const user = {
name: "Alice",
age: 30
};

function greet(person) {
console.log("Hello, " + person.name + "!");
}

greet(user);
console.log("2 + 3 =", add(2, 3));

### changed to typescript

// TypeScript version
// 1) Add type annotations to function parameters & return value

function add(a: number, b: number): number {
return a + b;
}

// 2) Define an interface for your object shape
interface User {
name: string;
age: number;
}

const user: User = {
name: "Alice",
age: 30
};

// 4) Use the interface to type the function argument,
// and give it a void return since it just logs

function greet(person: User): void {
console.log(`Hello, ${person.name}!`);
}

greet(user);
console.log(`2 + 3 = ${add(2, 3)}`);
