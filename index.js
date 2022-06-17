const stringLength = (str) => {
    if (str.length >= 1 && str.length <= 10) {
      return str.length;
    } else {
      throw 'string length is out of bounds'
    }
};

module.exports = stringLength;