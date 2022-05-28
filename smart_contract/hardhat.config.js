require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'Alchemy Api Key',
      accounts: [ 'Your Wallets Private Key' ]
    }
  }
}
