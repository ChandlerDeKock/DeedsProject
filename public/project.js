if (typeof web3 != "undefined"){
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	console.log("metamask");
   } else {
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	console.log("not metamask");
   }
   
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
	}
]);
	var User = userContract.at("0x5444d625f683d704fae0fddc761084dccfc09194");

$("#createbutton").click(function createGeoLocation() {
  // get the basic information for a return test
  var _coord = $('#occname').val();
  User.createGeoLocation(_coord);
  console.log("Hello world" + _coord);
  
 // alert("Your location is "  + _coord);
  // if the name was not provided
});

// // // var userEvent = User.geoChanged();
// // // userEvent.watch(function(error, result){
// // //     if(!error){
// // //         alert(result);
// // //     }else{
// // //         console.log(error);
// // //     }
// // // }); 