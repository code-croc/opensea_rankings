const GetRankings = require('./opensearankings')

let numOfRankings = 10;

GetRankings(numOfRankings)
.then((v) => v.forEach( (el, i) => console.log(`Ranking #${i+1} of ${numOfRankings} `,el)));

