const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendRequestToPaymentApi', () => {
  it('uses the calculateNumber method of Utils', () => {

    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(90, 15);
    expect(spy.calculateNumber.calledWith('SUM', 90, 15)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
