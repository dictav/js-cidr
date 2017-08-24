var re_ip = new RegExp(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
var re_cidr = new RegExp(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d\d?)$/);
function inCIDR(cidr, ip) {
  var match = cidr.match(re_cidr);
  if (!match) {
    throw new Error('' + cidr + ' is invalid CIDR');
  }

  var sbn = 32 - parseInt(match[5]);
  if (sbn === 32) {
    throw new Error('0 is invalid CIDR');
  }
  var start = parseInt(match[1]) * 2 ** 24;
  start += parseInt(match[2]) * 2 ** 16;
  start += parseInt(match[3]) * 2 ** 8;
  start += parseInt(match[4]);
  var end = start + 8 * sbn;

  match = ip.match(re_ip);
  if (!match) {
    throw new Error('invalid IP');
  }

  var target = parseInt(match[1]) * 2 ** 24;
  target += parseInt(match[2]) * 2 ** 16;
  target += parseInt(match[3]) * 2 ** 8;
  target += parseInt(match[4]);

  return (start <= target) && (target <= end);
}

module.exports = inCIDR;
