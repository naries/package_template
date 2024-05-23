import { SayHelloProps } from "./types";

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
    // don't say nothing
    console.log("hello");
    console.log(`your first name is ${firstName}`);

    if (lastName) {
        console.log(`Your last name is ${lastName}`)
    }

    if (age) {
        console.log(`Your age is ${age}`);
    }
}