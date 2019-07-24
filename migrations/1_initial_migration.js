var IndeedContract = artifacts.require("IndeedContract");

module.exports = function (deployer) {
    // Deploy the Indeed Contract
    deployer.deploy(IndeedContract);
};