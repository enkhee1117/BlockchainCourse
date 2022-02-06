const hex2ascii = require('hex2ascii');

let encoded = Buffer.from("chamd yamar hamaa bnaa lalraa").toString("hex");

console.log(encoded);


console.log("------ Decoding ---- ");

// console.log(hex2ascii(encoded));

let decoded = Buffer.from(encoded, "hex").toString();
console.log(decoded);