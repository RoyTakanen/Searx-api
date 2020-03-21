# Installation

```bash
npm i searx-api
```

## Simple usage

```javascript

const Searxuser = require('searx-api');

const searx = new Searxuser(
  'https://searx.asdew.kaikkitietokoneista.net/', //Url
  'https', //Protocol
  'en-US', //Language
  '1' //Safe search
)

searx.find("kaikkitietokoneista", function(data) {
  console.log("Searching for: " + data.query + "\n\n");

  data.results.forEach((item) => {
    console.log("TITLE: " + item.title + "\n\t URL: " + item.url);
  });
});


```
