const rpn = require('request-promise-native');

const { miraklApiKey, projectId } = require('../constants');

module.exports = async (options) => {
    return rpn({

        baseUrl: `https://${projectId}.mirakl.net/api`,
        ...options,
        headers: {
            authorization: miraklApiKey,
            ...options.headers,
        },
    });
};
