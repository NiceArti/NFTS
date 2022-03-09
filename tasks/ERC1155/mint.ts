import { task, types } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import {DEPLOYED_CONTRACT_ERC1155} from "../settings"


task("mint-1155", "Mints from the NFT contract")
.addParam("address", "The address to receive a token")
.addParam("id", "The address to receive a token")
.addParam("amount", "The amount of tokens")
.addParam("data", "Some data it also can be null")
.setAction(async function (taskArguments, hre) {
    const contract = await hre.ethers.getContractAt("IntNFT1155", DEPLOYED_CONTRACT_ERC1155);
    const transactionResponse = await contract.mintTo(
        taskArguments.address,
        taskArguments.id,
        taskArguments.amount,
        taskArguments.data,
        {gasLimit: 500_000});
    console.log(`Transaction Hash: ${transactionResponse.hash}`);
});





