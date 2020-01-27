const request = require('./mirakl/request');

const shop_id = 2000;
const paginate = true;
const max = 10;
const offset = 0;
// TODO
const product_references = 'UPC|23452363456345';

module.exports.synchronize = async (event) => {
    return request({
        url: '/products',
        qs: {
            shop_id,
            paginate,
            max,
            offset,
            product_references,
        },
    });
};
