import { task, types } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import { any, json } from "hardhat/internal/core/params/argumentTypes";
const fetch = require("node-fetch");
import {DEPLOYED_CONTRACT_ERC721} from "../settings"

task("token-uri", "Fetches the token metadata for the given token ID")
.addParam("tokenId", "The tokenID to fetch metadata for")
.setAction(async function (taskArguments, hre) {
    const contract = await  hre.ethers.getContractAt("IntNFT", DEPLOYED_CONTRACT_ERC721);
    const response = await contract.tokenURI(taskArguments.tokenId);
    
    const metadata_url = response;
    console.log(`Metadata URL: ${metadata_url}`);

    const metadata = await fetch(metadata_url);
    let res = await metadata.json()
    console.log(`Metadata fetch response: ${JSON.stringify(res, null, 2)}`);
});