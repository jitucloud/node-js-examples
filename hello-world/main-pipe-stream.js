var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
console.log( __filename );
console.log( __dirname );

function printHello(){
    console.log( "Hello, World!");
 }
 // Now call above function after 2 seconds
 setInterval(printHello, 2000);