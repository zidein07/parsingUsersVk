(function () {
  var a = [27140912, 279418157, 140291309, 140150230, 296245075, 25796934, 256880245, 115540277, 115257072, 19865165, 197981468, 13546210, 135386403, 131627018, 133070801, 155604548, 155465672, 152392423, 15235970, 71772498, 83460508, 290256993, 286908695, 147744396, 147639774], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});