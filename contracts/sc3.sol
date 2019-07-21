pragma solidity ^0.5.0;
contract titleDeeds{


    struct UserInfo {
         string name;
         address userAddress;
         string IDhash;
    }
    UserInfo[] public users;

    struct propertyIdentifier {
       
        string erfNumber; //this replaces an ID #
        string geoloc;
    }

    propertyIdentifier[] public Properties; //array of properties made public because I have length method
    mapping(address=> uint256) addressToUser;
    
    function registerUser(string memory _name, string memory _IDhash) public {
        uint256 _id = users.push(UserInfo(_name, msg.sender, _IDhash)) - 1; //push a new song struct to the songs array
        addressToUser[msg.sender] = _id;
    }

    function registerProperty (string memory _erfNumber, string memory _geoloc) public {
       // require(msg.sender==users[_ownerIDnumber].userAddress);
        publicProperties.push(propertyIdentifier(_erfNumber, _geoloc));

    }   
    // function transfer (uint _propertyIDtoTransfer, uint transferTo) public{
    //   // require(msg.sender==users[publicProperties[_propertyIDtoTransfer].ownerIDnumber].userAddress);
    //     publicProperties[_propertyIDtoTransfer].ownerIDnumber = transferTo;
    // }  

}