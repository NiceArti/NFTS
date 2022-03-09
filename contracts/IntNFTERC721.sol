// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract IntNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    
    /// @dev Base token URI used as a prefix by tokenURI().
    string public baseTokenURI;

    constructor() ERC721("Me Token", "MT") 
    {
        currentTokenId.increment();
        _mint(msg.sender, currentTokenId.current());

        baseTokenURI = "https://ipfs.io/QmaWQJNLqw7rrwzePpJJzHYm3bP1Mtwy57LajbmvfT9EWA";
    }
    
    function mintTo(address recipient)
        public
        returns (uint256)
    {
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(recipient, newItemId);
        return newItemId;
    }

    
    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseTokenURI(string memory baseTokenURI_) public {
        baseTokenURI = baseTokenURI_;
    }
}