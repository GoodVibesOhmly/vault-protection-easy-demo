const hre = require("hardhat");
const { token, trusted_2 } = require("../address-book");

async function main() {
  const Easytoken = await hre.ethers.getContractFactory("EasyTokenWithLSS");
  const easyToken = Easytoken.attach(token);
  await easyToken.transfer(trusted_2, "1000000000000000000000000"); // 1 000 000 tokens
  console.log("Tokens transferred to trusted !!!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
