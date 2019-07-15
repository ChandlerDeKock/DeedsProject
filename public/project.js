web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
web3.eth.defaultAccount = web3.eth.accounts[0];


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
	}
]);
var user = userContract.at("0x3569830fdcc695563b67fcbde12be4160be23723");

$("#createbutton").click(function addGeoCoord() {
  // get the basic information for a return test
  var _coord = $('#geoinput').val();
  alert("Your location is "  + _coord);
  // if the name was not provided
  if (_contractName.trim() == '') {
          return false;
  }
});