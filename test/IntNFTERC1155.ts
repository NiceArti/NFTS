import { expect } from "chai";
import { ethers } from "hardhat";

describe("IntNFT | ERC1155", function () {
  const ZERO_ADDRESS: String = '0x0000000000000000000000000000000000000000'
  let owner: any, acc1: any, acc2: any, acc3: any;
  let instance: any;

  beforeEach(async () => 
  {
    const ERC721Token = await ethers.getContractFactory("IntNFT1155");

    // create accounts
    [owner, acc1, acc2, acc3] = await ethers.getSigners();

    instance = await ERC721Token.deploy();
    
    // wait untill staking pool will be deployed
    await instance.deployed();
  });


  it("balanceOf(): should show balance of owner", async () => 
  {
    expect(await instance.balanceOf(owner.address, 1)).to.equal(10)
  });

  it("mintTo(): should mint nft to other account", async () => 
  {
    await instance.mintTo(acc1.address, 2, 10, '0x00')
    expect(await instance.balanceOf(acc1.address, 2)).to.equal(10)
  });

  it("setNewURI(): should set new uri", async () => 
  {
    let oldURI = await instance.uri(1)
    await instance.setNewURI("new_uri")
    let newURI = await instance.uri(1)
    
    expect(oldURI == newURI).to.equal(false)
  });
});
