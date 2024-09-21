const request = require('request');
const assert = require('assert');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(body, 'Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(body, 'Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      assert.strictEqual(res.statusCode, 404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      assert.strictEqual(res.statusCode, 404);
      done();
    });
  });
});
