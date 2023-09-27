'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('download-as-excel')
      .service('myService')
      .getWelcomeMessage();
  },
});
