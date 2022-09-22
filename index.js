const tinysecp = require('tiny-secp256k1');
const coininfo = require('coininfo');
const ecpair = require('ecpair');
const bitcoin = require('bitcoinjs-lib');
if (process.argv.length < 3) {
    console.log('第一引数に以下のうちいずれかを指定してください。さもなくばBTCとして出力します。')
    console.log('出力結果はアドレス(p2pkh,p2wpkh)、公開鍵、秘密鍵の順に一行ずつ出力します。')
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
    process.on("exit", ()=>process.exit(1))
    console.log('--------------------')
}
function createAddress(unit) {
    const network = coininfo(unit).toBitcoinJS();
    const ECPair = ecpair.ECPairFactory(tinysecp)
    const key = ECPair.makeRandom()
    function publicKey() {
        try { return key.publicKey.toString('hex') }
        catch(e) { return '' }
    }
    function privateKey() {
        try { return key.privateKey.toString('hex') }
        catch(e) { return '' }
    }
    function p2pkh() {
        try { return bitcoin.payments.p2pkh({ pubkey: key.publicKey, network: network }).address }
        catch(e) { return '' }
    }
    function p2wpkh() {
        try { return bitcoin.payments.p2wpkh({ pubkey: key.publicKey, network: network }).address }
        catch(e) { return '' }
    }
    return {
        'PrivateKey': privateKey(),
        'PublicKey': publicKey(),
        'Addresses': {
            'p2pkh': p2pkh(),
            'p2wpkh': p2wpkh(),
        }
    }
}
address = createAddress(process.argv[2])
console.log(address.Addresses.p2pkh)
console.log(address.Addresses.p2wpkh)
console.log(address.PublicKey)
console.log(address.PrivateKey)

