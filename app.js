const https = require('https');
const http = require('http');

class Searx {
  constructor(url, protocol, language, safe) {
    this.url = url;
    this.protocol = protocol;
    this.language = language
    this.safe = safe
  }

  find(searchterm, callback) {
    let fullurl = this.url + '?q=' + searchterm + '&category_general=1&pageno=1&time_range=None&language=' + this.language + '&safesearch=' + this.safe + '&format=json'
    if (this.protocol == "https") {
      https.get(fullurl, (resp) => {
        let data = ''

        resp.on('data', (chunk) => {
          data += chunk;
        })

        resp.on('end', () => {
          callback(JSON.parse(data), null);
        });
      })
    } else {
      callback(null, "Problem occurred.");
    }
  }

  a_find(searchterm) {
    return new Promise((reject, resolve) => {
      this.find(searchterm, (data, err) => {
        if (err) return reject(err)
        resolve(data);
      })
    })
  }
}

module.exports = Searx;
