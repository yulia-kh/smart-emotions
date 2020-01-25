const app = require('../src/app');

describe('emo endpoints', function () {
  context('POST api/emotions', () => {
    it('returns an object with response and thoughts properties', () => {
      return supertest(app)
        .post('/api/emotions')
        .expect( res => {
          expect(res.body).to.have.property('response');
        });
    });
  });

});