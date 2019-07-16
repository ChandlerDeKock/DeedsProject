if(typeof web3 != "undefined"){
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
}
//var Deeds = require("DeedsUnit.json");
// var code = '"DeedsUnit.json"';
// var Deeds = JSON.parse(code);
// var userContract = web3.eth.contract("0x3569830fdcc695563b67fcbde12be4160be23723");
var userContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_latitue",
				"type": "string"
			}
		],
		"name": "createGeoLocation",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "lat",
				"type": "string"
			}
		],
		"name": "geoChanged",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getGelocation",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
])

$("#createbutton").click(function createGeoLocation() {
  // get the basic information for a return test
  var _coord = $('#occname').val();
 // alert("Your location is "  + _coord);
  // if the name was not provided
  if (_contractName.trim() == '') {
          return false;
  }
});

var userEvent = userContract.geoChanged();
userEvent.watch(function(error, result){
    if(!error){
        alert(result);
    }else{
        console.log(error);
    }
});