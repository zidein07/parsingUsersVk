(function () {
  var a = [247866467, 55100392, 147567346, 284569145, 214425624, 231815132, 6169755, 185848600, 53045642, 21919066, 248441150, 113502376, 146562061, 70502772, 258672775, 219494319, 283203930, 301940336, 94024663, 230932558, 99363277, 223469358, 245935565, 89625637, 83196737], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});