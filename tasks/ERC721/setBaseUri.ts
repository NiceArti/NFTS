import { task, types } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import {DEPLOYED_CONTRACT_ERC721} from "../settings"

task("set-base-token-uri", "Sets the base token URI for the deployed smart contract")
.addParam("baseUri", "The base of the tokenURI endpoint to set")
.setAction(async function (taskArguments, hre) {
    const contract = await hre.ethers.getContractAt("IntNFT", DEPLOYED_CONTRACT_ERC721);
    const transactionResponse = await contract.setBaseTokenURI(taskArguments.baseUri, {
        gasLimit: 500_000,
    });
    console.log(`Transaction Hash: ${transactionResponse.hash}`);
});