(function () {
  var a = [151147254, 83731875, 291377074, 21591379, 170609135, 174502695, 101765715, 101589328, 146484729, 146361677, 45167072, 151903997, 15177392, 44193472, 234084697, 32507764, 3350251, 634131, 255705695, 191188765, 68595696, 68518478, 300486766, 32304655, 139886869], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});