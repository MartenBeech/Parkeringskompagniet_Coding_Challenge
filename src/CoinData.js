import DetailPage from './DetailPage';

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

var coinName;
var coinPrice;
var coinTicker;

var coinData = async(coinID) => {
	let data = await CoinGeckoClient.coins.fetch(coinID);
	if (data.success) {
		coinName = data.data.name;
		coinPrice = data.data.market_data.current_price.eur + " €";
  
		if (data.data.tickers.length > 0)
			coinTicker = data.data.tickers[0].base;
		else
			coinTicker = "Undefined";
	}
	else {
		coinName = "Undefined";
		coinPrice = "Undefined";
		coinTicker = "Undefined";
	}
	DetailPage(coinName, coinTicker, coinID, coinPrice);
};

export default function CoinData(coinID) {
	coinData(coinID);
}