import React from 'react';
import {Button, Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CoinList from './CoinList';

export default function Card(coinName, coinTicker, coinID, coinPrice) {

  return (
    <div>
      <h1></h1>
      <Grid container spacing={4}>
        <Grid item sm={1} md={2} lg={3} xl={4}/>
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Paper>
            <Grid item xs={12} sm container>
              <Grid item>
                <img margin='auto' display='block' width={200} height={200}
                  alt="CoinGecko API Icon" src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png" />
              </Grid>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5">
                    {coinName}  
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Ticker: {coinTicker}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    ID: {coinID}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button edge="start" className="menuButton" color="inherit" variant="outlined"
                    onClick={handleClick}>
                    <Typography variant="body2" className="title">
                      Back to search page
                    </Typography>
                    <SearchIcon />
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {coinPrice}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

function handleClick(e) {
  e.preventDefault();
  CoinList();
}