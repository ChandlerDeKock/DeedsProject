pragma solidity ^0.5.0;

//Creates a contract that will register a Deeds Unit. A deeds unit is any form of property on which an entity has claim to
contract DeedsUnit {

    //constructs the basic information of the contract 
    //TO DO - Will need to specifiy the details
    constructor(address _owner) public {
    owner = _owner;
    ownerhistory.push(owner);
    registry_address = msg.sender;
    }
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
    struct Right {
        address holderEntity;
        address targetEntity;
        string rightsType;
        address rightsContract;
        string infoUrl;
        uint status;
        uint startTime;
        uint expireTime;
    }
    struct geoLocation{
        string latitude;
        string longitude;
    }

    geoLocation[] geo;
    streetAddress[] street;
    Right[] rights;

    // stores the type of rights the holder of the accounts can have.
    mapping(address => Right[]) indexedByHolderEntity;
    mapping(address => Right[]) indexedByRightsContract;

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

    function createGeoLocation(string memory _lat, string memory _long) public returns (uint) {
        uint index = geo.push(geoLocation(_lat, _long));
        return index;
    }
    function addRight(address targetEntity, address holderEntity, string memory rightsType) public {
    // Check that the rightsType for targetEntity isn't already taken 
        uint len = rights.length;
        rights.length++;
        rights[len].targetEntity = targetEntity;
        rights[len].holderEntity = holderEntity;
        rights[len].rightsType   = rightsType;
        uint olen = indexedByHolderEntity[holderEntity].length;
        indexedByHolderEntity[holderEntity].length++;
        indexedByHolderEntity[holderEntity][olen] = rights[len];
    }
    //returns the length of the rights
    function getNumRights() public view returns (uint) {
        return rights.length;
    }
}