(function () {
  var a = [85843762, 3943556, 139840546, 47955050, 286830471, 113992050, 165877007, 144534459, 152652001, 64838331, 236189626, 13825080, 176428337, 282479309, 145956899, 251430347, 168203977, 15310598, 168226637, 177981227, 205456198, 136175233, 148377885, 219554007, 16027062], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});