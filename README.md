# Staking Pool contract

Staking Pool contract for UniswapV2LP and INT


Link to deployed contract(ERC721): [link](https://kovan.etherscan.io/address/0x11171a4aB6528767dbFf72Bd14458Cc3850264ec)
Link to deployed contract(ERC1155): [link](https://kovan.etherscan.io/address/0x10855C773e17Ae765224E768912038307A451A9f)


ERC721: 0x11171a4aB6528767dbFf72Bd14458Cc3850264ec
ERC1155: 0x10855C773e17Ae765224E768912038307A451A9f


- OpenZeppelin library: [link](https://github.com/OpenZeppelin/openzeppelin-contracts)



## Try running some of the following tasks:


## ERC721


| Task | Description |
| --- | --- |
| `npx hardhat token-uri --token-id some_id --network rinkeby` | Fetches the token metadata for the given token ID|
| `npx hardhat mint --address some_address --network rinkeby` | Mints from the NFT contract |
| `npx hardhat set-base-token-uri --base-uri some_uri --network rinkeby` | Sets the base token URI for the deployed smart contract |

## ERC1155

| `npx hardhat token-uri --token-id-1155 some_id --network rinkeby` | Fetches the token metadata for the given token ID|
| `npx hardhat mint-1155 --address some_address --network rinkeby` | Mints from the NFT contract |
| `npx hardhat set-base-token-uri-1155 --base-uri some_uri --network rinkeby` | Sets the base token URI for the deployed smart contract |