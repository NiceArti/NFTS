// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract IntNFT1155 is ERC1155 {
    constructor() ERC1155 ("https://ipfs.io/QmaWQJNLqw7rrwzePpJJzHYm3bP1Mtwy57LajbmvfT9EWA") 
    {
        _mint(msg.sender, 1, 10, "");
    }
    
    function mintTo(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external
    {
        _mint(to, id, amount, data);
    }


    function setNewURI(string memory newUri) external {
        _setURI(newUri);
    }
}