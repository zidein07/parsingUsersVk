(function () {
  var a = [6065226, 6065227, 6065228, 6065229, 6065230, 6065231, 6065232, 6065233, 6065234, 6065235, 6065236, 6065237, 6065238, 6065239, 6065240, 6065241, 6065242, 6065243, 6065244, 6065245, 6065246, 6065247, 6065248, 6065249, 6065250], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});