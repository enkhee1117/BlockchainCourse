const SHA256 = require('crypto-js/sha256');

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block {
    constructor(data){
      this.height = '';
      this.timeStamp = Date.now().toString().slice(0, -3);
      this.data = data;
      this.previousHash = '0x';
      this.hash = '';
    }
  }
  
  /* ===== Blockchain ===================================
  |  Class with a constructor for blockchain data model  |
  |  with functions to support:                          |
  |     - createGenesisBlock()                           |
  |     - getLatestBlock()                               |
  |     - addBlock()                                     |
  |     - getBlock()                                     |
  |     - validateBlock()                                |
  |     - validateChain()                                |
  |  ====================================================*/
  
  class Blockchain{
      constructor(){
        // new chain array
        this.chain = [];
        this.addBlock(new Block("First block in the chain - Genesis Block"));
    }
  
    // addBlock method
    addBlock(newBlock){
        newBlock.height = this.chain.length + 1;
        if(this.chain.length > 0) {
            newBlock.previousHash = this.chain[this.chain.length - 1].hash;
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
       this.chain.push(newBlock);
    }
  }

let blockchain = new Blockchain();
blockchain.addBlock(new Block('test'));
console.log(blockchain.chain);

let sampleTime = Date.now().toString().slice(0, -3);
console.log(new Date(parseInt(sampleTime * 1000)));