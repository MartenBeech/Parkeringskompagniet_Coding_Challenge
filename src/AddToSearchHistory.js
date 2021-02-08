import SearchHistory from './SearchHistory';

export default function AddToSearchHistory(coin) {
	var searchHistory = SearchHistory();

  for (let i = searchHistory.length; i > 0; i--) {
    if (searchHistory[i-1].id == coin.id) {
      searchHistory.splice(i, 1);
    }
    else {
      searchHistory[i] = searchHistory[i-1];
    }
  }
  searchHistory[0] = coin;

  return searchHistory;
}