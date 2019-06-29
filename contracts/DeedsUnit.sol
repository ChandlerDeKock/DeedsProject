pragma solidity ^0.5.0;

//Creates a contract that will register a Deeds Unit. A deeds unit is any form of property on which an entity has claim to
contract DeedsUnit {

        //declares the owner of the contract - this is also the owner property
       address public owner;
       //historical record of the contracts owner
       address[] public ownerhistory;
       // stores  the geolocation of the property
       string public geohash;
       //the number of times the unit has been transfered
       uint public ownertransfercount;
       //the address which registered the contract - can be different to the owner
       address public registry_address;

        //Creates a struct of the street address- a typical street address
        struct streetAddress {
            string addressLine1;
            string addressLine2;
            string addressLine3;
            string city;
            string region;
            uint postCode;
        }
        streetAddress[] street;

        //constructs the basic information of the contract 
        //TO DO - Will need to specifiy the details
        constructor(address _owner, string memory _geohash) public {
        owner = _owner;
		ownerhistory.push(owner);
		registry_address = msg.sender;
        geohash = _geohash;
    }

    //function that stores the street address of the property if applicable  - only the registered address can call this function
    function createStreetAddress(
        string memory _addressLine1, 
        string memory _addressLine2, 
        string memory _addressLine3, 
        string memory _city, 
        string memory _region,
        uint _postCode
        ) public returns (uint){
            require (msg.sender == registry_address);
            uint index = street.push(streetAddress(_addressLine1,_addressLine2, _addressLine3, _city,_region, _postCode));
            return index; 
        }
}