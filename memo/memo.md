coininfoでアドレスを作成するCUIを書いた。

　超簡単なやつ。

<!-- more -->

# ブツ

* [リポジトリ][]

[リポジトリ]:https://github.com/ytyaru/Node.js.CoinInfo.CreateAddress.20220922175527

## インストール＆実行

```sh
NAME='Node.js.CoinInfo.CreateAddress.20220922175527'
git clone https://github.com/ytyaru/$NAME
cd $NAME
npm install
node index.js
```

# プロジェクト作成

```sh
NAME=hello-coininfo
mkdir $NAME
cd $NAME
npm init -y
npm i tiny-secp256k1 ecpair coininfo bitcoinjs-lib
```
```sh
node index.js
```

# ソースコード作成

　[前回][]のやつに`network`の設定を追加した。`coininfo`で`MONA`を指定すると返される。

[]:

```sh
vim index.js
```
```javascript
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
function createAddress(network) {
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
```

# 実行

```sh
node index.js
```

　引数なしで実行する。

# 結果

```sh
第一引数に以下のうちいずれかを指定してください。さもなくばBTCとして出力します。
出力結果はアドレス(p2pkh,p2wpkh)、公開鍵、秘密鍵の順に一行ずつ出力します。
BCH
BLK
BTC
BTG
RYO
CITY
DASH
DNR
DCR
DGB
DOGE
GRS
LTC
VIA
MONA
NBT
NMC
PPC
QTUM
RVN
RDD
VTC
x42
ZEC
--------------------
p2pkhアドレス
p2wpkhアドレス
公開鍵
秘密鍵
```

# 通貨を指定する

　第一引数に`MONA`や`BTC`など好きな通貨を指定するとそのアドレスを返す。

```sh
node index.js MONA
```
```sh
p2pkhアドレス
p2wpkhアドレス
公開鍵
秘密鍵
```

# 情報源

* [coininfo][]
* [monacoind 不要の faucet を作ってみた (骨格だけ)][]
	* [app.js][]

[coininfo]:https://github.com/cryptocoinjs/coininfo
[monacoind 不要の faucet を作ってみた (骨格だけ)]:https://qiita.com/cryptcoin-junkey/items/fc6d62c22d4444d98c45
[app.js]:https://github.com/monaco-ex/sample-sending-monacoin/blob/master/app.js

