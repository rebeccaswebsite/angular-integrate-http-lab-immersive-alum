function UserService($http) {
  this.getUser = function() {
    return $http.get('http://0.0.0.0:8882/rest/user');
  }
}

angular
	.module('app')
	.service('UserService', UserService);