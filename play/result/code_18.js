(function () {
  var a = [232685329, 268415841, 26656836, 61937085, 262491893, 176918020, 184080433, 147762007, 85550257, 260176969, 259859400, 75600266, 7516882, 161423120, 166856505, 5746472, 55692399, 65577341, 64953247, 7644186, 75746858, 152170348, 17499759, 13069617, 253782941], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});