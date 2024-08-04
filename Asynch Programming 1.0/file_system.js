const fs = require("fs")
const readLine = require("readline")

// fs.writeFile("text.txt", 'good afternoon', (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("file created succesfully");
// })

// fs.readFile("text.txt", 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })


// how to take in input and output in node
const inputOutput = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})


// how can we use it
inputOutput.question("What is your Name?", (name) => {
    console.log(`my name is ${name}`)
})