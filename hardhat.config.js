require("@nomiclabs/hardhat-waffle");
const {
  MORALIS_KEY,
  STOLEN_TREASURY_PRIVATE_KEY,
  DEPLOYER_PRIVATE_KEY,
  LOSSLESS_TEAM,
} = require("./config");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // solidity: "0.5.17",
  solidity: "0.8.10",
  networks: {
    ropsten: {
      url: `https://speedy-nodes-nyc.moralis.io/${MORALIS_KEY}/eth/ropsten`,
      accounts: [STOLEN_TREASURY_PRIVATE_KEY],
    },
  },
};
