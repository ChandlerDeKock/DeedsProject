
//creating an instance of web3
if (typeof web3 != "undefined"){
	web3 = new Web3(web3.currentProvider);
	console.log("metamask");
   } else {
	   //currently using a local Ganache network for local testing
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	console.log("not metamask");
   }
   web3.eth.defaultAccount = web3.eth.accounts[0];

 
   //JSON representation of the contract -> need to fins a better way to import the document
   var userContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_erfNumber",
				"type": "uint256"
			},
			{
				"name": "_geoloc",
				"type": "string" 
			},
			{
				"name": "_ownerIDnumber",
				"type": "uint256"
			}
		],
		"name": "registerProperty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
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
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propertyIDtoTransfer",
				"type": "uint256"
			},
			{
				"name": "transferTo",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "properties",
		"outputs": [
			{
				"name": "erfNumber",
				"type": "uint256"
			},
			{
				"name": "geoloc",
				"type": "string"
			},
			{
				"name": "ownerIDnumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
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
		"type": "function"
	}
]);
//the address where the deployed contract is housed -> will need to autocreate this
var User = userContract.at("0x5444d625f683d704fae0fddc761084dccfc09194");

//on the Create HTMP page the create button will create a new user and register the property information.
$("#createbutton").click(
	
	function createNewDeed() {
  		// get the basic information for a return test
		var name = $("#occupantname").val();
		var IDNumber = web3.sha3($("#idnumber").val());
		var erfNo = $("#erfno").val();
		var geoLocation = $("#gelocation").val();
		var occupationDate = $("#occdate").val();
		console.log( name + IDNumber + erfNo + geoLocation + occupationDate);
		User.registerUser(name, IDNumber);
		User.registerProperty(erfNo, geoLocation, IDNumber);

});

// var userEvent = User.geoChanged({fromBlock: 'latest'});
// userEvent.watch(function(error, result){
//     if(!error){
//         alert(result.args.lat);
//     }else{
//         console.log(error);
//     }
// }); 