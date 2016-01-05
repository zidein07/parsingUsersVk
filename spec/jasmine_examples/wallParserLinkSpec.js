var _ = require('lodash');

describe("wallParserLinkSpec", function () {
  var parseLink = function (link) {
    var validateReplaceRes = link.replace(/[\w|:|\/|.]+/, '');
    var validateStatus = validateReplaceRes.length === 0;
    var splitLink = '';
    var idPage = '';
    if (!validateStatus || _.isEmpty(link)) {
      return {
        validate: false
      }
    }
    var dataName = {
      club: 'club',
      pub: 'public',
      event: 'event'
    };
    if (!isNaN(Number(link))) {
      idPage = parseInt(link);
      return {
        id: idPage,
        type: 'user',
        validate: true
      }
    }
    if (_.include(link, 'id')) {
      splitLink = link.split('id');
      idPage = parseInt(splitLink[1]);
      return {
        id: idPage,
        type: 'user',
        validate: true
      }
    }

    if (_.include(link, '::') || _.include(link, '__')) {
      return {
        validate: false
      }
    }

    for (var key in dataName) {
      if (dataName.hasOwnProperty(key)) {
        if (_.include(link, dataName[key])) {
          splitLink = link.split(dataName[key]);
          idPage = parseInt(splitLink[1]);
          if (idPage === '') {
            return {
              id: key,
              type: 'slug',
              validate: true
            }
          } else if (!idPage) {
            return {
              id: key + splitLink[1],
              type: 'slug',
              validate: true
            }
          } else {
            return {
              id: idPage,
              type: 'group',
              validate: true
            }
          }
        }
      }
    }
    if (_.include(link, 'vk.com/')) {
      splitLink = link.split('vk.com/');
      idPage = splitLink[1];
      return {
        id: idPage,
        type: 'slug',
        validate: true
      }
    } else if (_.include(link, 'vkontakte.ru/')) {
      splitLink = link.split('vkontakte.ru/');
      idPage = splitLink[1];
      return {
        id: idPage,
        type: 'slug',
        validate: true
      }
    } else if(_.include(link, ':')) {
      return {
        validate: false
      }
    } else {
      return {
        id: link,
        type: 'slug',
        validate: true
      }
    }
    return {
      validate: true
    }
  };
  var validateFalse = {
    validate: false
  };
  it("durov", function () {
    expect(parseLink('durov')).toEqual({
      id: 'durov',
      type: 'slug',
      validate: true
    });
  });
  it("1", function () {
    expect(parseLink('1')).toEqual({
      id: 1,
      type: 'user',
      validate: true
    });
  });
  it("https://vk.com/id1", function () {
    expect(parseLink('https://vk.com/id1')).toEqual({
      id: 1,
      type: 'user',
      validate: true
    });
  });
  it("https://vk.com/mdk", function () {
    expect(parseLink('https://vk.com/mdk')).toEqual({
      id: 'mdk',
      type: 'slug',
      validate: true
    });
  });
  it("https://vk.com/club1", function () {
    expect(parseLink('https://vk.com/club1')).toEqual({
      id: 1,
      type: 'group',
      validate: true
    });
  });
  it("https://vk.com/club_test", function () {
    expect(parseLink('https://vk.com/club_test')).toEqual({
      id: 'club_test',
      type: 'slug',
      validate: true
    });
  });
  it("https://vk.com/club", function () {
    expect(parseLink('https://vk.com/club')).toEqual({
      id: 'club',
      type: 'slug',
      validate: true
    });
  });
  it("https://vk.com/event100", function () {
    expect(parseLink('https://vk.com/event100')).toEqual({
      id: 100,
      type: 'group',
      validate: true
    });
  });
  it("https://vk.com/public500", function () {
    expect(parseLink('https://vk.com/public500')).toEqual({
      id: 500,
      type: 'group',
      validate: true
    });
  });
  it("vk.com/public100", function () {
    expect(parseLink('vk.com/public100')).toEqual({
      id: 100,
      type: 'group',
      validate: true
    });
  });
  it("vkontakte.ru/public100", function () {
    expect(parseLink('vkontakte.ru/public100')).toEqual({
      id: 100,
      type: 'group',
      validate: true
    });
  });
  it("vkontakte.ru/durov", function () {
    expect(parseLink('vkontakte.ru/durov')).toEqual({
      id: 'durov',
      type: 'slug',
      validate: true
    });
  });
  it("vk.com/durov", function () {
    expect(parseLink('vk.com/durov')).toEqual({
      id: 'durov',
      type: 'slug',
      validate: true
    });
  });
  it("club123", function () {
    expect(parseLink('club123')).toEqual({
      id: 123,
      type: 'group',
      validate: true
    });
  });
  it("public777", function () {
    expect(parseLink('public777')).toEqual({
      id: 777,
      type: 'group',
      validate: true
    });
  });
  it("event555", function () {
    expect(parseLink('event555')).toEqual({
      id: 555,
      type: 'group',
      validate: true
    });
  });
  it("id1", function () {
    expect(parseLink('id1')).toEqual({
      id: 1,
      type: 'user',
      validate: true
    });
  });
  it("vk.comvkontakte.rudurov", function () {
    expect(parseLink('vk.comvkontakte.rudurov')).toEqual({
      id: 'vk.comvkontakte.rudurov',
      type: 'slug',
      validate: true
    });
  });

  it("https://vk.com/d%123", function () {
    expect(parseLink('https://vk.com/d%123')).toEqual(validateFalse);
  });
  it("https://vk.com/id^1313", function () {
    expect(parseLink('https://vk.com/d%123')).toEqual(validateFalse);
  });
  it("https://vk.com/привет", function () {
    expect(parseLink('https://vk.com/привет')).toEqual(validateFalse);
  });
  it("#43242$", function () {
    expect(parseLink('#43242$')).toEqual(validateFalse);
  });
  it("", function () {
    expect(parseLink('')).toEqual(validateFalse);
  });
  it("durov#", function () {
    expect(parseLink('durov#')).toEqual(validateFalse);
  });
  it("du:rov", function () {
    expect(parseLink('du:rov')).toEqual(validateFalse);
  });
  it("duro/v__1", function () {
    expect(parseLink('duro/v__1')).toEqual(validateFalse);
  });
  it("vk.com/durov::", function () {
    expect(parseLink('vk.com/durov::')).toEqual(validateFalse);
  });
  it("vk.com/club::", function () {
    expect(parseLink('vk.com/club::')).toEqual(validateFalse);
  });
});
