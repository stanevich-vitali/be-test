const { createRequestBuilder } = require('@commercetools/api-request-builder');

const client = require('../client');
const { projectKey } = require('../constant');

const service = createRequestBuilder({ projectKey }).products;

module.exports.get = async () => {
    const fetchRequest = {
        uri: service.build(),
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const a = await client.execute(fetchRequest);

    return a;
};