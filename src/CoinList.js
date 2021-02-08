import SearchPage from './SearchPage';

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

var coins = [];

var coinList  = async() => {
	let data = await CoinGeckoClient.coins.list();
	coins = data.data
	SearchPage(coins);
}

export default function CoinList() {
	coinList();
}