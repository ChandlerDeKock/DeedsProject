pragma solidity ^0.5.0;
//pragma experimental ABIEncoderV2;

//creates records of the metadata linked to the property
contract Metadata{

	struct Link{
		string multiaddr;
		address owner;
	}
    //array if all lionks 
    Link[] numLinks;
    //internal mapping of the data types
	mapping(address => mapping(bytes32 => Link)) internal registry;
	mapping(address => bytes32[]) internal subjectKeys;
	mapping(address => mapping(bytes32 => uint)) internal subjectKeysIndex;

    //creates events for links being added
	event LinkSet(
		address indexed issuer,
		address indexed subject,
		bytes32 indexed key,
		uint updatedAt
	);
    //creates events for links being removed
	event LinkRemoved(
		address indexed issuer,
		address indexed subject,
		bytes32 indexed key,
		uint removedAt
	);
    //creates a new metadata link
	function setLink(address _subject, bytes32 _key, string memory _multiaddr) public {
		Link memory newLink = Link(_multiaddr, msg.sender);
		registry[_subject][_key] = newLink;
		numLinks.length++;
		
		uint olen = subjectKeys[_subject].length;
		subjectKeys[_subject].length++;
		subjectKeys[_subject][olen] = _key;
		subjectKeysIndex[_subject][_key] = olen;

		emit LinkSet(msg.sender, _subject, _key, now);		
	}
    //allows retrival of the link
	function getLink(address _subject, bytes32 _key) public view returns (string memory multiaddr, address owner) {
		multiaddr = registry[_subject][_key].multiaddr;
		owner = registry[_subject][_key].owner;
	}
	//can remove the link
	function removeLink(address _subject, bytes32 _key) public {
		require(msg.sender == registry[_subject][_key].owner);
		delete registry[_subject][_key];
		numLinks.length--;
		uint keyIndex = subjectKeysIndex[_subject][_key];
		for (uint i = keyIndex; i < subjectKeys[_subject].length-1; i++){
			subjectKeys[_subject][i] = subjectKeys[_subject][i+1];
		}
		// removal of line below saves 5000 gas
		// delete subjectKeys[_subject][subjectKeys[_subject].length-1];
		subjectKeys[_subject].length--;
		delete subjectKeysIndex[_subject][_key];
		emit LinkRemoved(msg.sender, _subject, _key, now);
	}
	// return number of links attributed to a particular SpatialUnit
	function getNumLinks()public view returns (uint){
		return numLinks.length;
	}
}
