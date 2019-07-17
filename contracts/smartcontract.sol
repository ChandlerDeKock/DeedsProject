// pragma solidity ^0.5.0;

// contract titleDeeds{
//     struct PersonalIdentifier {
//         string name;
//         string last_name;
//         uint ID_NumberHash;
//         address UserAddress;

//     }

//     modifier OnlyOwner (address _UserAddress, uint){
//         require(_UserAddress = msg.sender);
//     }

//    // function edit();
  
//     function setUser(string memory _name, string memory _last_name, uint _ID_NumberHash, uint _DOB, string memory _StreetAddress) public {
//        name = _name;
//        last_name = _last_name;
//        ID_NumberHash = _ID_NumberHash;
//        DOB = _DOB;
//        StreetAddress = _StreetAddress;

//    }

//     function getUser() public view returns (string memory,string memory, uint, uint, string memory) {
//        return (name, last_name, ID_NumberHash, DOB, StreetAddress);
//    }

// }