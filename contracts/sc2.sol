pragma solidity ^0.5.0;
contract titleDeeds{
    struct UserInfo {
         string name;
         string last_name;
         address userAddress;
         string IDhash;
    }
    UserInfo[] public users;
    struct propertyIdentifier {
       
        uint erfNumber; //this replaces an ID #
        string geoloc;
        uint ownerIDnumber;
    }

    propertyIdentifier[] public properties; //array of properties made public because I have length method
    mapping(address=> uint256) addressToUser;
    
    function registerUser(string memory _name, string memory _last_name, string memory _IDhash) public {
        uint256 _id = users.push(UserInfo(_name, _last_name, msg.sender, _IDhash)) - 1; //push a new song struct to the songs array
        addressToUser[msg.sender] = _id;
}

    function registerProperty (uint _erfNumber, string memory _geoloc, uint _ownerIDnumber) public {
        require(msg.sender==users[_ownerIDnumber].userAddress);
        properties.push(propertyIdentifier(_erfNumber, _geoloc, _ownerIDnumber));

    }   
    function transfer (uint _propertyIDtoTransfer, uint transferTo) public{
        require(msg.sender==users[properties[_propertyIDtoTransfer].ownerIDnumber].userAddress);
        properties[_propertyIDtoTransfer].ownerIDnumber = transferTo;
    }

   
}