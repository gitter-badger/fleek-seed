module.exports.post = function *() {
  this.body = this.method;
}

module.exports.get = function *() {
  console.log('woo')
  this.body = this.method;
}

module.exports.put = function *() {
  this.body = this.method;
}
