const tinysecp = require('tiny-secp256k1');
const coininfo = require('coininfo');
const ecpair = require('ecpair');
const bitcoin = require('bitcoinjs-lib');

//console.log('coininfo:', coininfo) // 成功だがオブジェクト。ここからunitだけを取得したい。
//console.log('coininfo:', coininfo.keys()) // エラー
//console.log('coininfo:', coininfo().keys()) // エラー
//console.log('coininfo.supportedCoins:', coininfo.supportedCoins) // エラー

console.log(coininfo.bitcoincash.main.unit)
console.log(coininfo.blackcoin.main.unit)
console.log(coininfo.bitcoin.main.unit)
console.log(coininfo['bitcoin gold'].main.unit)
console.log(coininfo.c0ban.main.unit)
console.log(coininfo.citycoin.main.unit)
console.log(coininfo.dash.main.unit)
console.log(coininfo.denarius.main.unit)
console.log(coininfo.decred.main.unit)
console.log(coininfo.digibyte.main.unit)
console.log(coininfo.dogecoin.main.unit)
console.log(coininfo.groestlcoin.main.unit)
console.log(coininfo.litecoin.main.unit)
console.log(coininfo.viacoin.main.unit)
console.log(coininfo.monacoin.main.unit)
console.log(coininfo.nubits.main.unit)
console.log(coininfo.namecoin.main.unit)
console.log(coininfo.peercoin.main.unit)
console.log(coininfo.qtum.main.unit)
console.log(coininfo.ravencoin.main.unit)
console.log(coininfo.reddcoin.main.unit)
console.log(coininfo.vertcoin.main.unit)
console.log(coininfo.x42.main.unit)
console.log(coininfo.zcash.main.unit)

console.log('------------------------------------')

console.log(coininfo.bitcoincash.main.name)
console.log(coininfo.blackcoin.main.name)
console.log(coininfo.bitcoin.main.name)
console.log(coininfo['bitcoin gold'].main.name)
console.log(coininfo.c0ban.main.name)
console.log(coininfo.citycoin.main.name)
console.log(coininfo.dash.main.name)
console.log(coininfo.denarius.main.name)
console.log(coininfo.decred.main.name)
console.log(coininfo.digibyte.main.name)
console.log(coininfo.dogecoin.main.name)
console.log(coininfo.groestlcoin.main.name)
console.log(coininfo.litecoin.main.name)
console.log(coininfo.viacoin.main.name)
console.log(coininfo.monacoin.main.name)
console.log(coininfo.nubits.main.name)
console.log(coininfo.namecoin.main.name)
console.log(coininfo.peercoin.main.name)
console.log(coininfo.qtum.main.name)
console.log(coininfo.ravencoin.main.name)
console.log(coininfo.reddcoin.main.name)
console.log(coininfo.vertcoin.main.name)
console.log(coininfo.x42.main.name)
console.log(coininfo.zcash.main.name)



//console.log('tinysecp:', tinysecp)
//console.log('coininfo:', coininfo)
//console.log('ecpair:', ecpair)
//console.log('bitcoin:', bitcoin)

//console.log(coininfo.keys())
//console.log(coininfo.bitcoin)
/*
//const network = coininfo('MONA').toBitcoinJS(); // モナコイン
const network = coininfo('LTC').toBitcoinJS(); // ライトコイン
network.messagePrefix = ''; //hack

const ECPair = ecpair.ECPairFactory(tinysecp)
console.log('ecpair.ECPairFactory(tinysecp):', ECPair)

const key = ECPair.makeRandom()
console.log('ECPair.makeRandom():', key)

console.log(`Pubkey: ${key.publicKey.toString('hex')}`)
console.log(`Privkey: ${key.privateKey.toString('hex')}`)
//console.log(`Privkey: ${key.getAddress()}`)

const address = bitcoin.payments.p2pkh({ pubkey: key.publicKey, network: network });
console.log(`address:`, address)
console.log('p2pk:', bitcoin.payments.p2pk({ pubkey: key.publicKey, network: network }).address)
console.log('p2pkh:', address.address) // 1JWnvgtw9dcetEFidnQU8BQA53wpm7KZ4b 等
console.log('p2pkh:', bitcoin.payments.p2pkh({ pubkey: key.publicKey, network: network }).address)
console.log('p2wpkh', bitcoin.payments.p2wpkh({ pubkey: key.publicKey, network: network }).address)
//console.log('p2sh', bitcoin.payments.p2sh({ pubkey: key.publicKey, network: network }).address)
const pubKeys = [
    ECPair.makeRandom().publicKey.toString('hex'),
    ECPair.makeRandom().publicKey.toString('hex'),
    ECPair.makeRandom().publicKey.toString('hex'),
]
//console.log('p2ms', bitcoin.payments.p2ms({ m: 2, pubKeys, network: network }).address) // TypeError: Not enough data
//console.log('p2sh', bitcoin.payments.p2sh({ redeem: bitcoin.payments.p2ms({ m: 2, pubKeys, network: network }) }).address)
//console.log('p2wsh', bitcoin.payments.p2wsh({ pubkey: key.publicKey, network: network }).address)
console.log('p2sh, p2ms, p2wsh はエラー。')
*/
