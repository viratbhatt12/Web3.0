require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/0gBUhMqoHmmMUuBep5ol-jK-Q0Ywsp01',
      accounts: [ 'ecdab6ab72b8d35a91720661f490ac08a6551fa31dc5d8b5f20973c46a7e108e' ]
    }
  }
}