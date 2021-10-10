// In production this would be:
// const Searxuser = require('searx-api');
const Searxuser = require('../../app'); 

const searx = new Searxuser(
  'https://searx.kaikkitietokoneista.net/', //Url
  'https', //Protocol
  'en-US', //Language
  '1' //Safe search
)

async () => {
  try {
    const results = await searx.a_find("kaikkitietokoneista")
    results.forEach((item) => {
      console.log("TITLE: " + item.title + "\n\t URL: " + item.url);
    });
  } catch(e) {
    // error occured while searching
    console.log("ERROR WHILE SEARCHING: ", e)
  }  
}
