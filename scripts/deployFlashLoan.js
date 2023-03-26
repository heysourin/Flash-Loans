const hre = require("hardhat");

async function main() {
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy(
    "0xeb7A892BB04A8f836bDEeBbf60897A7Af1Bf5d7F",{gasLimit: 1633923},
  );
  await flashLoan.deployed();

  console.log("Contract deployed to: ", flashLoan.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
