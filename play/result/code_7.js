var a = [36318990, 181059415, 180883871, 196834592, 196813534, 97291328, 164707333, 162930426, 154357116, 60046765, 165667033, 93560425, 169617030, 174792932, 236386815, 3836083, 38112987, 157115682, 157084386, 13405274, 91597404, 153563105, 54126526, 53690765, 107674054], ans = [], i = 0;
while (i < a.length) {
  ans.push(API.user.get({user_id: a[i]}).count);
  i = i + 1;
}
return ans;