const signer = require("./transactionSigner");
const { Blockchain } = require('./blockchain');

let blockchain = new Blockchain();


// blockchain.requestMessageOwnershipVerification(signer.address)
//     .then(message => {
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "first star ever" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 2" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 3" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 4" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 5" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 6" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 7" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 8" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 9" });
//         blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "star 10" });
//         return blockchain.submitStar(signer.address, message, signer.sign(message), { type: "star", information: "this is a star coordination data lol" });
//     })
//     .then(block => {
//         return blockchain.validateChain();
//     })
//     .then(answer => {
//         console.log(answer);
//     })
//     .catch(err => console.log(err));

let messageToSign = "1F3sAm6ZtwLAUnj7d38pGFxtP3RVEvtsbV:1643662072:starRegistry";
console.log(signer.sign(messageToSign));
