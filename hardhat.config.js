require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    polygon_mumbai: {
      url: process.env.MUMBAI_NODE_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
