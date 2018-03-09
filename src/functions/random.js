export default function random(n = 128) {
  var a = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var out = [];
  for (var i = 0; i < n; i++) {
    var ii = Math.floor(Math.random() * a.length);
    out.push(a[ii]);
  }
  return out.join('');
}