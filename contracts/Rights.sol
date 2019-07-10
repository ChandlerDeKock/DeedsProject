pragma solidity ^0.5.0;

//dthe  types of right a proprty holder can have. This would have helpful when morgages, rental contracts or any other transfer duty is done
contract RightsRegistry {

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
    // stores the type of rights the holder of the accounts can have.
    Right[] rights;
    mapping(address => Right[]) indexedByHolderEntity;
    mapping(address => Right[]) indexedByRightsContract;

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
    //returns the particular right type
    // function getRightAt(uint rightIndex) public view 
    // returns (
    // 	address holderEntity,
    // 	address targetEntity,
    // 	string memory rightsType,
    // 	address rightsContract,
    // 	string memory infoUrl,
    // 	uint status,
    //     uint startTime,
    //     uint expireTime
	// ) 
    // {
    //     holderEntity = rights[rightIndex].holderEntity;
    //     targetEntity = rights[rightIndex].targetEntity;
    //     rightsType = rights[rightIndex].rightsType;
    //     rightsContract = rights[rightIndex].rightsContract;
    //     infoUrl = rights[rightIndex].infoUrl;
    //     status = rights[rightIndex].status;
    //     startTime = rights[rightIndex].startTime;
    //     expireTime = rights[rightIndex].expireTime;
    // }
}
