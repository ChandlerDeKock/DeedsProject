pragma solidity ^0.5.0;
contract titleDeeds{


    struct UserInfo {
         string name;
         address userAddress;
         string IDhash;
    }
    
    UserInfo[] public users;

    struct propertyIdentifier {
       
        uint erfNumber; 
        string geoloc;
    }

    propertyIdentifier[] publicProperties; //array of properties made public because I have length method
    mapping(address=> uint256) addressToUser;
    
    function registerUser(string memory _name, string memory _IDhash) public {
        uint256 _id = users.push(UserInfo(_name, msg.sender, _IDhash)) - 1; //push a new song struct to the songs array
        addressToUser[msg.sender] = _id;
    }

    function registerProperty (uint _erfNumber, string memory _geoloc, uint _ownerIDnumber) public {
        //require(msg.sender==users[_ownerIDnumber].userAddress);
        publicProperties.push(propertyIdentifier(_erfNumber, _geoloc, _ownerIDnumber));

    }   
    function transfer (uint _propertyIDtoTransfer, uint transferTo) public{
        require(msg.sender==users[properties[_propertyIDtoTransfer].ownerIDnumber].userAddress);
        properties[_propertyIDtoTransfer].ownerIDnumber = transferTo;
    }
        //require(msg.sender==users[publicProperties[_propertyIDtoTransfer].ownerIDnumber].userAddress);
        publicProperties[_propertyIDtoTransfer].ownerIDnumber = transferTo;
    }  
    function setUser(string memory _name, string memory _last_name, string memory _geoloc, uint _erfNumber) public{
        name = _name; 
        last_name = _last_name;
        geoloc = _geoloc;
        erfNumber= _erfNumber;
    }
    function getUser() public view returns (string memory,string memory,string memory,uint){
        return (name, last_name, geoloc, erfNumber);
    }
    function registerProperty (uint _erfNumber, string memory _geoloc) public {
       // require(msg.sender==users[_ownerIDnumber].userAddress);
        publicProperties.push(propertyIdentifier(_erfNumber, _geoloc));

    }   
    // function transfer (uint _propertyIDtoTransfer, uint transferTo) public{
    //   // require(msg.sender==users[publicProperties[_propertyIDtoTransfer].ownerIDnumber].userAddress);
    //     publicProperties[_propertyIDtoTransfer].ownerIDnumber = transferTo;
    // }  
}