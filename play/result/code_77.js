(function () {
  var a = [200117592, 79697765, 87627409, 120108044, 119641912, 97411657, 106034186, 3363288, 37743444, 142826610, 144945655, 168891813, 168175041, 111415996, 10925512, 37198767, 3689858, 136887066, 136844536, 131884580, 131753442, 72523212, 71540269, 211762639, 21169223], ans = [], i = 0;
  while (i < a.length) {
    ans.push(API.friends.get({user_id: a[i], count: 1}).count);
    i = i + 1;
  }
  return ans;
});