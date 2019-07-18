// pragma solidity ^0.5.0;

contract titleDeeds{
        string name;
        string last_name;
        uint uniqueIdentifier; //this replaces an ID #
        string userAddress;

        function setUser (string memory _name, string memory _last_name, uint _uniqueIdentifier, string memory _userAddress) public{
            name = _name;
            last_name = _last_name;
            uniqueIdentifier = _uniqueIdentifier;
            userAddress = _userAddress;
        }

        function getUser() public view returns (string memory, string memory, uint, string memory){
            return(name, last_name, uniqueIdentifier, userAddress);
        }

    }
