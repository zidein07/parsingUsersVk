(function () {
  var a = [131294217, 212348749, 212079372, 222796387, 221307556, 138463114, 138160717, 11390946, 113792259, 256215399, 255630807, 13157627, 131193217, 121290960, 120924769, 142148846, 143675979, 52576180, 51958365, 117725468, 121217510, 95835697, 95174983, 12347451, 123229997], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});