# Installation

```bash
npm i searx-api
```

## Examples

Can be found in folder [examples](/examples/)

### Simple usage (callback style)

```javascript

const Searxuser = require('searx-api');

const searx = new Searxuser(
  'https://searx.kaikkitietokoneista.net//', //Url
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


```

### Async usage

```javascript
const Searxuser = require('searx-api');

const searx = new Searxuser(
  'https://searx.kaikkitietokoneista.net//', //Url
  'https', //Protocol
  'en-US', //Language
  '1' //Safe search
)

try {
  const results = await searx.a_find("kaikkitietokoneista")
  results.forEach((item) => {
    console.log("TITLE: " + item.title + "\n\t URL: " + item.url);
  });
} catch(e) {
  // error occured while searching
  console.log("ERROR WHILE SEARCHING: ", e)
}

```
