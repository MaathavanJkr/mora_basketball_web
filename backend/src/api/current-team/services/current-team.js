'use strict';

/**
 * current-team service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-team.current-team');
