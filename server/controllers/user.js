module.exports.post = function *() {
  this.body = this.method;
  console.log(this.request.body)
}

module.exports.get = function *() {
  this.body = this.method;
}

module.exports.put = function *() {
  this.body = this.method;
}
