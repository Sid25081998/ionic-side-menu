angular.module('---module---')

.factory("DeferredFactory",function($rootScope,$http,$q,$window){
  var deferredFactory = {};
  var deferred;

  deferredFactory.deferredGetFunction = function(url) {
    var configObj = {
      method: 'GET',
      url: url
    };
    deferred = $q.defer();
    return $http(configObj)
      .then(function (response) {
      deferred.resolve(response.data);
      return deferred.promise;
    },function (response) {
      deferred.reject(response.data);
      return deferred.promise;
    });
  };

  deferredFactory.deferredPostFunction = function(data,url) {
    deferred = $q.defer();
    return $http({
      method: 'POST',
      url: url,
      crossDomain:true,
      data: data
    })
    .then(function (response) {
      deferred.resolve(response.data);
      return deferred.promise;
    },function (response) {
      deferred.reject(response.data);
      return deferred.promise;
    });
  };

 deferredFactory.deferredGetFunctionWithParameter = function (data,url) {
      var configObj = {
          method: 'POST',
          url: url,
          data:data
      };
      console.log(JSON.stringify(configObj));
      deferred = $q.defer();
      return $http(configObj)
        .then(function (response) {
            deferred.resolve(response.data);
            return deferred.promise;
        }, function (response) {
            deferred.reject(response.data);
            return deferred.promise;
        });
  };
  return deferredFactory;
});
