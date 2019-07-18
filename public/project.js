if (typeof web3 != "undefined"){
	web3 = new Web3(web3.currentProvider);
	console.log("metamask");
   } else {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	console.log("not metamask");
   }
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
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
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
]);
var User = userContract.at("0x5444d625f683d704fae0fddc761084dccfc09194");

$("#createbutton").click(function createGeoLocation() {
  // get the basic information for a return test
  var _coord = $('#occname').val();
  User.createGeoLocation(_coord);

});

var userEvent = User.geoChanged({fromBlock: 'latest'});
userEvent.watch(function(error, result){
    if(!error){
        alert(result.args.lat);
    }else{
        console.log(error);
    }
}); 