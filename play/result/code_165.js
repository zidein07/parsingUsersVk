(function () {
  var a = [8241362, 235432102, 322161202, 286449388, 229566437, 263635381, 321994444, 227075005, 284323981, 65764276, 305976737, 232578437, 284982625, 133685460, 226266595, 198875953, 55527620, 185293530, 12161198, 49873734, 320404389, 273187745, 259303253, 284000824, 286482158], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});