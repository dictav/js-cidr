var a = require('./index');

console.log(a('192.168.0.0/24', '192.168.0.1'))
console.log(a('192.168.0.0/32', '192.168.0.0'))
console.log(a('192.168.0.0/16', '192.168.0.1'))
console.log(a('192.168.0.0/8', '192.168.0.1'))

try {
  console.log(a('abc.168.0.0/24', '192.168.0.1'))
  console.log(false);
} catch(e) {
  console.log(true);
}

try {
  console.log(a('192.168.0.0/0', '192.168.0.0'))
  console.log(false);
} catch(e) {
  console.log(true);
}
