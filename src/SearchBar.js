import React from 'react';
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddToSearchHistory from './AddToSearchHistory';
import CoinData from './CoinData';

export default function SearchBar(coinList) {
  return (
    <div style={{ width: "default" }}>
      <Grid container direction="column">
        <Grid item container>
          <Grid item sm={2} lg={3} xl={4} />
          <Grid item xs={12} sm={8} lg={6} xl={4}>
            <h2> Get live data from a variety of crypto currencies 
              by entering a valid coin name from CoinGecko's API </h2>
        
            <Autocomplete
              onChange={(event, value) => {
                var id = "";
                for (let i = 0; i < coinList.length; i++) {
                  if (coinList[i].name == value) {
                    id = coinList[i].id;
                    AddToSearchHistory(coinList[i]);
                    break;
                  }
                }
                if (id !== "") {
                  CoinData(id);
                }
                else {
                  alert("Invalid coin name")
                }
              }
              }
              freeSolo
              id="free-solo"
              disableClearable
              options={coinList.map((option) => option.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
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