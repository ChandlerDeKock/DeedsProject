# Deeds Project

## Ability to stake your land ownwership

### Website hosted at:

 [Indeed Hosuing](https://indeedhousing.netlify.com) - the website may also not be up
 
### Instance of the contract on Etherscan

 [Rinkeby testnet contract](https://rinkeby.etherscan.io/address/0xe21cbf2aa06a8bbf1e368e1afc92298eb5206aac#readContract)
 
## Project outline

The project is a system by where a person can use set a claim to a certain property area and have people attest to that being your property. Communities that are underserved tend to rely on thier own informal networks to achieve land ownership. Since land ownshersip in South Africa is a major concern, we created an informal community tool to place a record of your land ownsership on an immutiable record.

## Project use process process flow
 
 The project used a bootsrapped front-end. The contracts are stored on an Ethereum smart contract which currently either connects to a Test net (Rinkeby) or a local instance of a blockchain (i.e Ganache). In the live demo the front-end connects to a Rinkeby test net contract and proceeds to process the requests. In order to play around with the system, we recommend using Metamask as your Web# provider. 
 
 ##Getting started with setting up the eviroment yourself:

1. Clone the repository as always =)

2. Open the folder in your terminal or use your editors to navigate to the root directory of the project

3. Install the package dependecies by running the following in the root folder of the project:
```
npm install
```
4. Make sure you have a connection to an ETH blockain runnung. You can install Metamask or use Gananche. Please note that the contracts are still only on the Rinkeby testnet

5. The `gulpfile.js` is preconfigured to launch ansd intsance of the webpage. This will launch a local instance in your browswer and connect to the contract if you have your Web3 provider connected. To do this run the below command
```
nmp start
```


