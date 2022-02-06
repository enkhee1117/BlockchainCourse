var bitcoin = require('bitcoinjs-lib'); // v4.x.x
var bitcoinMessage = require('bitcoinjs-message');
var keyPair = bitcoin.ECPair.fromWIF('L4rK1yDtCWekvXuE6oXD9jCYfFNV2cWRpVuPLBcCU2z8TrisoyY1')
var privateKey = keyPair.privateKey
// var address = '1F3sAm6ZtwLAUnj7d38pGFxtP3RVEvtsbV'

// -------------------- Finding Address from public key: -------------- //

const pubkey = keyPair.publicKey;
const addressObject = bitcoin.payments.p2pkh({ pubkey })
const address = addressObject.address;
// -------------------- Ends here  -------------- //


module.exports = {
    sign: function sign(message) {
        return bitcoinMessage.sign(message, privateKey, keyPair.compressed).toString('base64');
    },
    address: address,
    verify: function verify(message, address, signature){
        return bitcoinMessage.verify(message, address, signature);
    }
}


/**
 * Tutorail I found helpful:
 * 
 * https://medium.com/@bitcoindeezy/bitcoin-basics-programming-with-bitcoinjs-lib-4a69218c0431
 */

