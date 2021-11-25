const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require ("web3");
const {interface, bytecode} = require ("./compile");


const provider = new HDWalletProvider (
"fit carry helmet web airport error vendor method frozen scatter next long","https://rinkeby.infura.io/v3/e08d4be31a4a462c9031e0b8d09b9f06"
);

const web3 = new Web3 (provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log ("Attempting to deploy from account", accounts [0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    
    .deploy({data:bytecode,arguments:["Hi there!"]})

    .send({gas:"1000000",from: accounts[0]});
  
    console.log ("Contract deploy to", result.options.address);

    provider.engine.stop();



};

deploy ();