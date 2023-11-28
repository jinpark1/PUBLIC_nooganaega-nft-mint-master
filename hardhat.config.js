require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "mainnet",
  networks: {
    mainnet: {
      url: `${process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL}`,
      accounts: [`0x${process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY}`],
      gas: "auto",
      gasPrice: "auto"
    }
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
	etherscan: {
		apiKey: `${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`
	}
}
