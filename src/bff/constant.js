const host = 'commercetools.co'; // US only

// TODO configurable trough SM
const projectKey = 'pavel_yasiukevich-sandbox';
const clientId = 'NJnrSY-s5RCdzseICAbPAMTA';
const clientSecret = '2sdf80Ho35ZEdd66gseIuUeO_NMdozIu';

const authMiddlewareConfig = {
    host: `https://auth.${host}`,
    projectKey,
    credentials: { clientId, clientSecret },
    // TODO only required permissions
    scopes: [`manage_project:${projectKey}`],
};

const httpMiddlewareConfig = {
    host: `https://api.${host}`,
};

module.exports = {
    authMiddlewareConfig,
    httpMiddlewareConfig,
    projectKey,
};