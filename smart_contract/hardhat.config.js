require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/0gBUhMqoHmmMUuBep5ol-jK-Q0Ywsp01',
      accounts: [ 'Your Wallets Private Key' ]
    }
  }
}
