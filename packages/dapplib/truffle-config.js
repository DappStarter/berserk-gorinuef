require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note oval unusual harvest inhale flock snake'; 
let testAccounts = [
"0x8bb8ba3847f887d41e671e29b123348eb938da11608f0e49a1e7b9a57af79c6c",
"0xeab5b30063ca644206983fd71ec296c1279cf6f70dce66fb7597575660978581",
"0x5c9c2eaa57a4cbae7fac7931c2904e8c5fbb36a862706b5cd2bc31e8de9ac233",
"0xb3184c04b058d689a89f6200928361f27ff7575495a9ea0d0bbf9621449cc02c",
"0x733e82eb6e5e2f5814a8553b2632a87876ecbcfe584871c47e2d9a208390d757",
"0x0aa35cd8f8e91532e1d7413b95f1efd1528d4d88e6515693593fa065cdd7cdd9",
"0xc53509c38bc490afc6e185af4e5ece0aaccab660fe6de4c20f14c2e906e9949a",
"0x19a78ef57e070346c8e60a8a8f5ec17151d587fbcf5ce484601bb857b37af7a1",
"0xafaa5e4319803a3f26b0d803bee4da5adc38e1bf02d0c802fc336a78cf5e359f",
"0x8801338b758a293365d3abfe428bb624e25f05061d330cd174097c4987919321"
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
            version: '^0.5.11'
        }
    }
};
