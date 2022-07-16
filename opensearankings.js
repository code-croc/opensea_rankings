const cloudscraper = require("cloudscraper");
const url = "https://opensea.io/rankings";
let rankings = [];

module.exports = (numOfRankings = 1) =>
  cloudscraper
    //get the rankings from opensea
    .get(url)
    //slice out everything but the rankings
    .then((htmlString) => {
      htmlString = htmlString.slice(
        htmlString.indexOf("window.__wired__=") + "window.__wired__=".length,
        htmlString.indexOf("</script>", htmlString.indexOf("window.__wired__="))
      );
      //parse the html into a js object
      const objOfHtml = JSON.parse(htmlString);

      //get the number of rankings we want
      for (let i = 0; i < numOfRankings; i++) {
        let noderef =
          objOfHtml.records[
            `client:root:__RankingsPage_rankings_connection(sortBy:"ONE_DAY_VOLUME"):edges:${i}`
          ].node["__ref"];
        rankings.push(objOfHtml.records[noderef]);
      }
      return rankings;
    })
    .catch(function (err) {
      console.log(`Error: ${err}`);
      return;
    });
