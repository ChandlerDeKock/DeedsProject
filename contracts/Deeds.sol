pragma solidity ^0.5.0;

contract DeedsUnit{

   string latitude;

    event geoChanged(string indexed lat);
    
    function createGeoLocation (string memory _latitue)public returns(uint){
        latitude = _latitue;
        emit geoChanged(latitude);
        
    }
    function getGelocation () public view returns(string memory){
        return latitude;
    }
}