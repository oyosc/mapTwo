/**
 * Created by Administrator on 2016/10/27.
 */

var _ = require('../index.js');

var result = _.mapTwo({'0':'1', '1':'1', length: 2}, {'0':'2', '1':'3', length: 2},  function(vaule, value1, k){
    return vaule*value1;
});

console.log(result);