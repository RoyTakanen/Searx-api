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
    let fullurl = this.url + '/search?q=' + searchterm + '&language=' + this.language + '&safesearch=' + this.safe + '&format=json'
    if (this.protocol == "https") {
      https.get(fullurl, (resp) => {
        let data = ''

        resp.on('data', (chunk) => {
          data += chunk;
        })

        resp.on('end', () => {
          if (data == "Rate limit exceeded") {
            callback("rate_limited", data);
          } else {
            callback(null, JSON.parse(data));
          }
        });
      })
    } else {
      callback("Problem occurred.", null);
    }
  }

  a_find(searchterm) {
    return new Promise((reject, resolve) => {
      this.find(searchterm, (err, data) => {
        if (err) return reject(err)
        resolve(data);
      })
    })
  }
}

module.exports = Searx;
