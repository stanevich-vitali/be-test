const { authMiddlewareConfig, httpMiddlewareConfig } = require('./constant');

const fetch = require('./fetch');

const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');

module.exports = createClient({
    middlewares: [
        createAuthMiddlewareForClientCredentialsFlow({
            ...authMiddlewareConfig,
            fetch,
        }),
        createHttpMiddleware({
            ...httpMiddlewareConfig,
            fetch,
        })
    ],
});