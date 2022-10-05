const tinysecp = require('tiny-secp256k1');
const coininfo = require('coininfo');
const ecpair = require('ecpair');
const bitcoin = require('bitcoinjs-lib');

const names = Object.keys(coininfo)
const units = Object.values(coininfo).map(coin=>coin.main.unit)

function error() {
    console.log('第一引数に以下のうちいずれかを指定してください。')
    console.log('出力結果はアドレス(p2pkh,p2wpkh)、公開鍵、秘密鍵の順に一行ずつ出力します。')
    console.assert(names.length === units.length)
    console.log(units.join('\n'))
    process.on("exit", ()=>process.exit(1))
}
function createAddress(unit) {
    const network = coininfo(unit).toBitcoinJS();
    const ECPair = ecpair.ECPairFactory(tinysecp)
    const key = ECPair.makeRandom()
    //function run(func, arg) { try { return func(arg) } catch(e) { return '' } }
    function getAddr(func, arg) { try { return func(arg).address } catch(e) { return '' } }
    return {
//        'PrivateKey': run(key.privateKey.toString, 'hex'),
//        'PublicKey': run(key.publicKey.toString, 'hex'),
        'PrivateKey': key.privateKey.toString('hex'),
        'PublicKey': key.publicKey.toString('hex'),
        'Addresses': {
//            'p2pkh': run(bitcoin.payments.p2pkh, { pubkey: key.publicKey, network: network }).address,
//            'p2wpkh': run(bitcoin.payments.p2wpkh, { pubkey: key.publicKey, network: network }).address,
//            'p2pkh': bitcoin.payments.p2pkh({ pubkey: key.publicKey, network: network }).address,
//            'p2wpkh': bitcoin.payments.p2wpkh({ pubkey: key.publicKey, network: network }).address,
            'p2pkh': getAddr(bitcoin.payments.p2pkh, { pubkey: key.publicKey, network: network }),
            'p2wpkh': getAddr(bitcoin.payments.p2wpkh, { pubkey: key.publicKey, network: network }),
        }
    }
}
if (process.argv.length < 3) { error(); return; }
if (!units.includes(process.argv[2])) { error(); return;  }
address = createAddress(process.argv[2])
console.log(address.Addresses.p2pkh)
console.log(address.Addresses.p2wpkh)
console.log(address.PublicKey)
console.log(address.PrivateKey)

