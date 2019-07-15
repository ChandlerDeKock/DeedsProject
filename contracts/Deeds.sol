pragma solidity ^0.5.0;

contract DeedsUnit{

     struct geoLocation{
        string latitude;
    }
    geoLocation[] geo;

    function createGeoLocation(string memory _latitue) public returns(uint){

        uint index = geo.push(geoLocation(_latitue));
        return index;
    }
}