const fetch = require('node-fetch');

const HttpsProxyAgent = require('https-proxy-agent');

module.exports = fetch;

if (process.env.https_proxy) {
    const agent = new HttpsProxyAgent(process.env.https_proxy);

    module.exports = async (url, options, ...rest) => {
        options.agent = agent;
        return fetch(url, options, ...rest);
    };
}
