require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name recipe noise essay hope kangaroo army genuine'; 
let testAccounts = [
"0xab00dd158ec953f490c0e42d4d43e0a709d62e463764b1e40e1699936aaf5b37",
"0x876b98d971a23d2b15c7b8e19dd08078a97bbadc0c6c14b5c277f843c865245e",
"0x797f9fa85b4c917d2b8650503bf0c9364d92c36b24f43bcbd76f0fc7f489bb5d",
"0x7304bc29f08910621513599f9c005c2efbaee8d78904e6cf82c5e26b2d608167",
"0xc9da2b753db3b6de38e10e00a23fb3e0f3382442996b0c2374b9322eca5415ac",
"0xc990e7b70326c83d200dc69dc7e0be9659f28bb553700453eaa495baa92cd5b6",
"0x6efd180972953d47888afa1b444e2e7e70377a7d52cd6eb09b0048ea3c11a37b",
"0x26b12a7c397c1e7e351be44197d658748e73a69f6e952147971b155751a5a511",
"0x3aff56478f0d98ca1fcf3eea9171cbf13c1984e98b80d2e7daf22b11efaa9170",
"0x72eeab31f7ed1026947d25958c77f08f482c7643b8253db7544a900445907e83"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

