(function () {
  var a = [20276219, 199153062, 24652656, 253887098, 167182936, 188164828, 185944980, 245873959, 245871822, 38761521, 38555586, 79469252, 79447333, 153566616, 153379992, 142472377, 142435824, 28181615, 280487863, 14762442, 147594419, 272390429, 272312447, 142752026, 142595643], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});