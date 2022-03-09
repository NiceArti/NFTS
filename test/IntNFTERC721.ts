import { expect } from "chai";
import { ethers } from "hardhat";

describe("ERC721 | IntNFT", function () {
  const ZERO_ADDRESS: String = '0x0000000000000000000000000000000000000000'
  let owner: any, acc1: any, acc2: any, acc3: any;
  let instance: any;

  beforeEach(async () => 
  {
    const ERC721Token = await ethers.getContractFactory("IntNFT");

    // create accounts
    [owner, acc1, acc2, acc3] = await ethers.getSigners();

    instance = await ERC721Token.deploy();
    
    // wait untill staking pool will be deployed
    await instance.deployed();
  });


  it("balanceOf(): should show balance of owner", async () => 
  {
    expect(await instance.balanceOf(owner.address)).to.equal(1)
  });

  it("mintTo(): should mint nft to other account", async () => 
  {
    await instance.mintTo(acc1.address)
    expect(await instance.balanceOf(acc1.address)).to.equal(1)
  });

  it("setBaseTokenURI(): should change base uri", async () => 
  {
    let baseURIBefore = await instance.baseTokenURI.call()
    await instance.setBaseTokenURI("new_uri")
    let baseURIAfter = await instance.baseTokenURI.call()
    expect((baseURIBefore == baseURIAfter)).to.equal(false)
  });
});
