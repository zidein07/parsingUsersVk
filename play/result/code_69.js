(function () {
  var a = [121718877, 12132126, 159435020, 158895014, 8751765, 8585218, 136282473, 136160565, 145227001, 145159589, 62687481, 61394154, 139958970, 142447939, 5440932, 60587160, 1395887, 139547590, 133324407, 133035509, 76539854, 84083410, 185576994, 185377505, 86892310], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});