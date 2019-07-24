
//creating an instance of web3
if (typeof web3 != "undefined") {
  web3 = new Web3(web3.currentProvider);
  console.log("metamask");
} else {
  //currently using a local Ganache network for local testing
  const web3 = new HDWalletProvider(
    'cpelican rally fog immune stuff cave payment vital diamond quantum corn follow',
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  console.log("not metamask");
}

// var deed = require("../../build/contracts/titleDeeds.json");
web3.eth.defaultAccount = web3.eth.accounts[0];
$("#startmetamask").click(ethereum.enable());


//JSON representation of the contract -> need to fins a better way to import the document
var userContract = web3.eth.contract([
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "userAddress",
        "type": "address"
      },
      {
        "name": "IDhash",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x365b98b2"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "publicProperties",
    "outputs": [
      {
        "name": "erfNumber",
        "type": "string"
      },
      {
        "name": "geoloc",
        "type": "string"
      },
      {
        "name": "attestation",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x710925a1"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_IDhash",
        "type": "string"
      }
    ],
    "name": "registerUser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x1d2e4afd"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_erfNumber",
        "type": "string"
      },
      {
        "name": "_geoloc",
        "type": "string"
      }
    ],
    "name": "registerProperty",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x1b0f8ea8"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_propertyOwner",
        "type": "address"
      }
    ],
    "name": "attestToProperty",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x6bcace58"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getProperty",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x07751070"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getUser",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x832880e7"
  }
]);
//the address where the deployed contract is housed -> will need to autocreate this
var User = userContract.at("0xa32Ff08f9125c0b77C0fE7E76dD9aBc3528B79e6");

//on the Create HTMP page the create button will create a new user and register the property information.
$("#createbutton").click(
  function createNewDeed() {
    // get the basic information for a return test
    var name = $("#occupantname").val();
    var IDNumber = web3.sha3($("#idnumber").val());
    var erfNo = $("#erfno").val();
    var geoLocation = $("#geolocation").val();
    var occupationDate = $("#occdate").val();
    console.log(typeof (name) + typeof (IDNumber) + typeof (erfNo) + typeof (geoLocation) + typeof (occupationDate));

    User.registerUser(name, IDNumber, function (error, result) {
      if (!error)
        console.log(result);
      else
        console.error(error);
    });
    User.registerProperty(erfNo, geoLocation, function (error, result) {
      if (!error)
        console.log(result);
      else
        console.error(error);
    });

  });

  $("#Results").click(
     function returnResult(){
      var propertyResult;
      var userResult;
      var userCall = User.getUser.call(function (error, result) {
        if (!error){
          userResult = result;
          $("#personnameresult").html("<strong>Persons name registred to the property: </strong>" +  userResult[0]);
          
          console.log(result);
          
        }else{
          console.error(error);
        } 
      });
      var PropertyCall = User.getProperty.call(function (error, result) {
        if (!error){
          propertyResult = result;
          $("#erfresult").html("<strong>The ERF Number of the property: </strong> " + propertyResult[0]);
          $("#addressresult").html("<strong>The ETH address of the property holder:  </strong>");
          $("#geolocationresult").html("<strong>Gelocation of the property: </strong>" + propertyResult[1]);
          $("#attestationresult").html("<strong>Number of attestations: </strong>" + propertyResult[2]);
          console.log(result);
          
        }else{
          console.error(error);
        } 
      });
      
    }
  );
  $("#attestbutton").click(
    function attestationJS (){

      var attestAddress = $("#attest").val()
      User.attestToProperty(attestAddress,function (error, result) {
        if (!error)
          console.log(result);
        else
          console.error(error);
      });
      alert("You are aboutto vouch to the property of " + attestAddress + ". Please confirm the metamask transaction to have it confirmed")
    }
  );

// var userEvent = User.geoChanged({fromBlock: 'latest'});
// userEvent.watch(function(error, result){
//     if(!error){
//         alert(result.args.lat);
//     }else{
//         console.log(error);
//     }
// }); 