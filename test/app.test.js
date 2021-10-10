const expect = require('chai').expect;

const Searxuser = require('../app'); 

const searxNotLimited = new Searxuser(
  'https://searx.kaikkitietokoneista.net/', //Url
  'https', //Protocol
  'en-US', //Language
  '1' //Safe search
)

const query = "kaikkitietokoneista"


describe('Testing callback functions', () => {
    describe('Rate limit working', () => {
        it('should not return err', () => {
            searxNotLimited.find(query, (err, data) => {
                expect(err).to.equal(null)
            });
        });
    });
    
    describe('Results can be found', () => {
        it('should return Object', () => {
            searxNotLimited.find(query, (err, data) => {
                expect(data).to.be.an('Object')
            });
        });
    
        it('results count should 26', () => {
            searxNotLimited.find(query, (err, data) => {
                expect(26).to.equal(data.results.length)
            });
        });
    
        it('returned query should be passed query', () => {
            searxNotLimited.find(query, (err, data) => {
                expect(query).to.equal(data.query)
            });
        });
    });    
})
