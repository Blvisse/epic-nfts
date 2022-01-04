const main = async () => {

  // we fetch and compile the smart contract from the solidity contract folder
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  
  // we deploy the contract to our local blockchain
  const nftContract = await nftContractFactory.deploy();  
  await nftContract.deployed();

  //once we successfully deploy the contract we return the address of the contract
  console.log("Contract deployed to: " + nftContract.address);
};

const runMain = async () => {

    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runMain();