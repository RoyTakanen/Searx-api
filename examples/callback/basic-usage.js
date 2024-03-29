// In production this would be:
// const Searxuser = require('searx-api');
const Searxuser = require('../../app'); 

const searx = new Searxuser(
  'https://searx.kaikkitietokoneista.net/', //Url
  'https', //Protocol
  'en-US', //Language
  '1' //Safe search
)

searx.find("kaikkitietokoneista", function(err, data) {
  if (err === "rate_limited") {
    console.log("Cannot proceed. Searx server ratelimit has been exceeded.")
  } else {
    console.log("Searching for: " + data.query + "\n\n");

    data.results.forEach((item) => {
      console.log("TITLE: " + item.title + "\n\t URL: " + item.url);
    });  
  }
});
