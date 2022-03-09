// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {

  const IntNFT = await ethers.getContractFactory("IntNFT");
  const IntNFT1155 = await ethers.getContractFactory("IntNFT1155");
  
  const intNFT = await IntNFT.deploy();
  const intNFT1155 = await IntNFT1155.deploy();
  
  await intNFT.deployed();
  await intNFT1155.deployed();
  
  console.log("Your NFT deployed to:", intNFT.address);
  console.log("Your NFT deployed to:", intNFT1155.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
