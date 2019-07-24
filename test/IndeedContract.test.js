// Tests helpers
const {
    EVMRevert
} = require('./helpers/EVMRevert');
const {
    assertRevert
} = require('./helpers/assertRevert');
const {
    sendTransaction
} = require('./helpers/sendTransaction');
const advanceBlock = require("./helpers/advanceToBlock");
const {
    increaseTimeTo,
    duration
} = require('./helpers/increaseTime');
const latestTime = require("./helpers/latestTime");
const _ = require("lodash");
const BigNumber = web3.BigNumber;

// Libraries
require("chai")
    .use(require("chai-as-promised"))
    .use(require("chai-bignumber")(BigNumber))
    .should();

// Contracts
const titleDeeds = artifacts.require("./IndeedContract.sol");


contract("indeedcontract", (accounts) => {
    const indeedOwner = accounts[0]
    const user = accounts[1]
    const properyOnwer = accounts[2]
    const geoloc = accounts[3]
    const randomAddress = accounts[4]

    // Initialize publication and bid counts
    let name = "Iggy";
    let IDhash = "IDhash";

    before(async function () {
        // Deploy an instance of the registry
        // Creates ERC20s to use in testing

      
        // Checks that the balance of the fund is correct
        
        registry = await titleDeeds.new( {
            from: indeedOwner
        });

    });

    beforeEach(async function () {

    })
    // Tests correct registration of users
    context("Register User", function () {
        it("Can register a new user", async () => {
            await registry.registerUser(name, IDhash, {
                from: user //from user of the smart contract 
            })

            let userNumber = (await registry.addressToUser(user)).toString()
            assert(userNumber, "0", "Initial user number not set correctly")
            
            let addedUser = await registry.users(userNumber)
            assert(addedUser.name, name, "User name not set")
            assert(addedUser.userAddress, user, "User address not set")
            assert(addedUser.IDhash, IDhash, "IDHash not set")
        });
        it("Register Property", async () => {
            // Should fail if no user name added
            await assertRevert(registry.registerUser("", {
                from: publisher
            }), EVMRevert)

            // Then check reverts if same user tries to register
            await assertRevert(registry.registerUser(exampleUserProfileURI, {
                from: publisher
            }), EVMRevert)
        });
    })
})