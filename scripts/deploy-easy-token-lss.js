const hre = require("hardhat");
const { treasury } = require("../address-book");

async function main() {
  const EasyTokenWithLSS = await hre.ethers.getContractFactory(
    "EasyTokenWithLSS"
  );
  const easyToken = await EasyTokenWithLSS.deploy();

  await easyToken.deployed();

  console.log("EasyToken with Lossless deployed to:", easyToken.address);

  await easyToken.transfer(treasury, "5000000000000000000000000"); // 5 000 000 tokens
  console.log("Tokens transferred to treasury wallet.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
