const hre = require("hardhat");
const { treasury } = require("../address-book");

async function main() {
  const Easytoken = await hre.ethers.getContractFactory("EasyToken");
  const easyToken = await Easytoken.deploy();

  await easyToken.deployed();

  console.log("EasyToken deployed to:", easyToken.address);

  await easyToken.transfer(treasury, "5000000000000000000000000"); // 5 000 000 tokens
  console.log("Tokens transferred to treasury wallet.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
