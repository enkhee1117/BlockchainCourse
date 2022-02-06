const fs = require('fs');


let imageReadBuffer = fs.readFileSync('test-pattern.jpeg');
imgHexEncode = Buffer.from(imageReadBuffer, 'base64').toString('hex');

fs.writeFile("encoded.txt",imgHexEncode, err => console.log(err));

fs.writeFile("decoded.jpg",Buffer.from(imgHexEncode, 'hex'), err => console.log(err));

/**
 * On Buffers
 * https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/ 
 * 
 * Encodings: 
 * 
 * base64
 * utf8
 * hex
 * ascii
 * binary
 * ...
 */