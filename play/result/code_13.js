(function () {
  var a = [29157556, 194394537, 129192655, 134460654, 217740765, 217234839, 3640494, 3608027, 255617791, 262851775, 135305740, 134826161, 147397537, 146876520, 71690350, 1720045, 15880727, 9303201, 175170267, 17510525, 4085900, 219382325, 184429301, 184108639, 21580811], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});