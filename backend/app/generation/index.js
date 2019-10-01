const Dragon = require('../dragon');
const { REFRESH_RATE, SECONDS } = require('../config');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.accountIds = new Set();
    this.expiration = this.calculateExpiration();
    this.generationId = undefined;
  }

  setId(generationId) {
    this.generationId = generationId;
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));

    // later on, this could take in more factors such as
    // the number of dragons in the last generation
    // for shorter/longer delays
    const msUntilExpiration = Math.random() < 0.5 ?
      refreshRate - expirationPeriod :
      refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newDragon({ accountId }) {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }

    if (this.accountIds.has(accountId)) {
      throw new Error('You already have a dragon from this generation');
    }

    this.accountIds.add(accountId);

    return new Dragon({ generationId: this.generationId });
  }
}