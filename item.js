var redis = require('redis');
var redisClient = redis.createClient();
var extend = require('extend');

module.exports = function item (query, fn) {
  redisClient.hgetall('sku:' + query.sku.toLowerCase(), function(err, obj) {
    if (!obj || err) {
      fn(extend(query, { productName: 'No Matching Products', warehouseAvailability: '' }));
    } else {
      fn(extend(query, {
        productName: obj.productName,
        warehouseAvailability: obj.warehouseAvailability
      }));
    }
  });
}
