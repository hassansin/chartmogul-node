'use strict';

const Resource = require('../resource.js');

class Subscription extends Resource {

  static get path () {
    return '/v1/import/customers/{customerUuid}/subscriptions{/subscriptionUuid}';
  }

  // @Override
  static cancel (config, subscriptionUuid, data) {
    return this.request(
      config,
      'PATCH',
      `/v1/import/subscriptions/${subscriptionUuid}`,
      data
    );
  }
}

module.exports = Subscription;
