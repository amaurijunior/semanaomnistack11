const crypto = require('crypto');


module.exports =  function generateuniqueid(){

return crypto.randomBytes(4).toString('HEX');


}