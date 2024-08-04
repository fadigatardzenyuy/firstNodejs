import generateSillyName from "sillyname"
// const readLine = require("readline")
import readLine from "readline"

const sillyName = generateSillyName();


console.log("Welcome To Silly name Generator");

const inputOutput = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

inputOutput.question("What is your Name? \n", (name) => {
    console.log(`my name is ${name}`);
    console.log(`Hey ${name} your silly name is ${sillyName}`);
})





