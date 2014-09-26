'use strict';

/**
 * Base module for environment services.
 */
angular.module('mtgBots.services.env', [])

    /**
     * Provide the version of the deployed app.
     * // TODO: have this value filled in by build process.
     *
     * @Return the deployed version string
     */
    .value('version', '0.1')

    ;  // end of base module setup
