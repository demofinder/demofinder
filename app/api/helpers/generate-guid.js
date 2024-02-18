const { v4: uuidv4 } = require('uuid');

module.exports = {

  fn: function () {
    return uuidv4();
  }

};
