# opensea_rankings
Opensea Rankings
Get the top rankings from https://opensea.io/rankings

The code in opensearankings.js returns an anonymous funtion that takes an int representing the number of rankings as its argument.
This anonymous function returns a promise that then contains the rankings as an array of objects, if an error occurs the rankings will be [].

The code in index.js is a small example of how the code in opensearankings.js works.
