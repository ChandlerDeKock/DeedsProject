
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	}
]);
//the address where the deployed contract is housed -> will need to autocreate this
var User = userContract.at("0x296579531a3120cd1e6d14c538face9fe407add8");

//on the Create HTMP page the create button will create a new user and register the property information.
$("#createbutton").click(
	
	function createNewDeed() {
  		// get the basic information for a return test
		var name = $("#occupantname").val();
		var IDNumber = web3.sha3($("#idnumber").val());
		var erfNo = $("#erfno").val();
		var geoLocation = $("#geolocation").val();
		var occupationDate = $("#occdate").val();
		console.log( typeof(name) + typeof(IDNumber) + typeof(erfNo) + typeof(geoLocation) + typeof(occupationDate));
		
		User.registerUser(name, IDNumber, {gas: 6721975000});
		User.registerProperty(erfNo, geoLocation, {gas: 6721975000});

});

// var userEvent = User.geoChanged({fromBlock: 'latest'});
// userEvent.watch(function(error, result){
//     if(!error){
//         alert(result.args.lat);
//     }else{
//         console.log(error);
//     }
// }); 