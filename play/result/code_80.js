(function () {
  var a = [133123992, 132772739, 13546406, 135235280, 142683679, 145109021, 274697949, 273809079, 208429193, 157411010, 15669594, 239076606, 238965220, 136672721, 13785625, 220046896, 219919617, 50485367, 49361397, 172119577, 172040251, 143489142, 145729252, 113553160, 112990982], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});