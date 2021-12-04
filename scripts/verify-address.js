const { guardian, token, treasury } = require("../address-book");

async function main() {
  const LosslessGuardian = await ethers.getContractFactory("LosslessGuardian");
  const losslessGuardian = await LosslessGuardian.attach(guardian);

  // Allow project to protect this address
  await losslessGuardian.verifyAddress(token, treasury, true);

  console.log("Done");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
