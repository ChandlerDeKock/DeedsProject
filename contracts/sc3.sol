pragma solidity ^0.5.0;
contract titleDeeds{


    struct UserInfo {
         string name;
         address userAddress;
         string IDhash;
    }
    
    UserInfo[] public users;

    struct propertyIdentifier {
       
        string erfNumber; 
        string geoloc;
    }

    propertyIdentifier[] publicProperties; 
    mapping(address=> uint256) addressToUser;
    mapping(address=> uint256) addressToProperty;
    
    function registerUser(string memory _name, string memory _IDhash) public {
        uint256 _id = users.push(UserInfo(_name, msg.sender, _IDhash)) - 1;
        addressToUser[msg.sender] = _id;
    }

    function registerProperty (string memory _erfNumber, string memory _geoloc) public {
       // require(msg.sender==users[_ownerIDnumber].userAddress);
        uint _id = publicProperties.push(propertyIdentifier(_erfNumber, _geoloc));
        addressToProperty[msg.sender] = _id;

    }
    function getProperty () public view returns (string memory, string memory) {
        uint256 propNum = addressToProperty[msg.sender] -1;
        return(publicProperties[propNum].erfNumber, publicProperties[propNum].geoloc);
    }
     function getUser () public view returns (string memory, string memory) {
        uint256 propNum = addressToUser[msg.sender] -1;
        return(users[propNum].name, users[propNum].IDhash);
    }
}