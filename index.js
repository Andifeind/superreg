class SuperReg extends RegExp {
  static escape (pattern) {
    return pattern.replace(/[.\\|\]*+?[(){}^$/]/g, '\\$&')
  }
}

module.exports = SuperReg
