import React from 'react';
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddToSearchHistory from './AddToSearchHistory';
import CoinData from './CoinData';
import SearchHistory from './SearchHistory';

export default function SearchHistoryBar() {
	var searchHistory = SearchHistory();

	if (searchHistory.length > 0) {
    return (
      <div style={{ width: "default" }}>
        <Grid container direction="column">
          <Grid item container>
            <Grid item sm={2} lg={3} xl={4} />
            <Grid item xs={12} sm={8} lg={6} xl={4}>
          
              <Autocomplete
                onChange={(event, coinName) => {
                  var coinID = "";
                  for (let i = 0; i < searchHistory.length; i++) {
                    if (searchHistory[i].name == coinName) {
                        coinID = searchHistory[i].id;
                      AddToSearchHistory(searchHistory[i]);
                      break;
                    }
                  }
                  CoinData(coinID);
                }
                }
                freeSolo
                id="free-solo"
                disableClearable
                options={searchHistory.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Previous searches"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />
              <Grid item sm={2} lg={3} xl={4} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}