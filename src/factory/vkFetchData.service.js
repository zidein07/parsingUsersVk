vkApp.factory('vkFetchDataService', function (vkApiService, $q) {
  return {
    fetchWallData: function (groupId, postsSize, streamCount) {
      console.log('groupId', groupId);
      var deferred = $q.defer();
      var postsLength = postsSize;
      var api = {
        wallGet: function wallGet(opt) {
          opt = opt || {};
          return "API.wall.get(" +
            "{\"owner_id\": " + opt.owner_id + ", \"offset\": " + opt.offset + ", \"count\": 100}" + ")";
        }
      };
      var vkScriptRequestList = [];
      var arrData = [];
      for (var i = 0; i < postsLength; i += 100) {
        var vkScriptRequest = api.wallGet({owner_id: groupId, offset: i});
        vkScriptRequestList.push(vkScriptRequest);
      }
      var getData = function () {
        if (vkScriptRequestList.length === 0) {
          deferred.resolve(arrData);
          return false;
        }
        var dataForRequest = vkScriptRequestList.splice(0, streamCount);
        var vkScriptCode = "return [" + dataForRequest.join() + "];";
        vkApiService.execute({
          code: vkScriptCode
        }).then(function (response) {
          response.data.response.map(function (item) {
            arrData.push(item.splice(1));
          });
          getData();
        });
      };
      getData();
      return deferred.promise;
    },
    fetchLikesData: function (groupId, postItemId, likeSize, streamCount) {
      var count = 1000;
      var deferred = $q.defer();
      var api = {
        likeGet: function likeGet(opt) {
          opt = opt || {};
          return "API.likes.getList(" +
            "{\"owner_id\": " + opt.owner_id + ", \"offset\": " + opt.offset + "," +
            " \"item_id\": " + opt.item_id + "," +
            " \"type\": \"post\", \"count\": " + count + "}" + ")";
        }
      };
      var vkScriptRequestList = [];
      var arrData = [];
      for (var i = 0; i < likeSize; i += count) {
        var vkScriptRequest = api.likeGet({owner_id: groupId, offset: i, item_id: postItemId});
        vkScriptRequestList.push(vkScriptRequest);
      }
      var getData = function () {
        if (vkScriptRequestList.length === 0) {
          deferred.resolve(arrData);
          return false;
        }
        var dataForRequest = vkScriptRequestList.splice(0, streamCount);
        var vkScriptCode = "return [" + dataForRequest.join() + "];";
        vkApiService.execute({
          code: vkScriptCode
        }).then(function (response) {
          var sortDataArr = response.data.response.filter(function (item) {
            return item.users.length > 0
          });
          sortDataArr.map(function (item) {
            arrData.push(item.users);
          });
          getData();
        });
      };
      getData();
      return deferred.promise;
    },
    fetchPostLikeData: function (arrayData) {
      var arrDataUsersLike = arrayData;
      var deferred = $q.defer();
      var arrDataResult = [];
      if(arrDataUsersLike.length === 0) {
        deferred.resolve(arrDataResult);
        return false;
      }
      var postId = arrDataUsersLike[0].postId;
      var groupId = arrDataUsersLike[0].groupId;
      this.fetchLikesData(groupId, postId, 10000, 20).then(function (response) {
        arrDataResult.push(groupId, response)
        console.log('response post: ' + postId, response);
      });
      var dataForRequest = arrDataUsersLike.splice(1);
      var self = this;
      setTimeout(function () {
        self.fetchPostLikeData(dataForRequest);
      }, 400);
      return deferred.promise;
    }
  }
});