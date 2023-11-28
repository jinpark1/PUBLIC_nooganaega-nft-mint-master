/**
 *  This script will calculate the constructor arguments for NoogaNaega.sol and deploy it.
 *  After deploying, you can access the contract on etherscan.io with the deployed contract address.
 */

// const hre = require('hardhat')

const BASE_URI = 'ipfs://QmVbrJocTdbtk51bm2y9ECymqYPvEA9bKSwFRa969Muh7f/';
// const proxyRegistryAddressGoerli = '0x06FADb7c1eEeb37FfFc9752bB7a9A60cB05cB0bC';
// const proxyRegistryAddressRinkeby = '0xf57b2c51ded3a29e6891aba85459d600256cf317';
// const proxyRegistryAddressSepolia = '0xf57b2c51ded3a29e6891aba85459d600256cf317';
const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1';

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    // Deploy the contract
    const NoogaNaega = await ethers.getContractFactory('NoogaNaega')
    const noogaNaega = await NoogaNaega.deploy(BASE_URI, proxyRegistryAddressMainnet);
    // await noogaNaega.deployed()

    console.log('NoogaNaega deployed to:', noogaNaega.address)
    // console.error('Error deploying contract:', error)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })