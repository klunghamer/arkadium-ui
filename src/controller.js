(function(){
  angular
  .module('MovieApp')
  .controller('MovieController', function($http, $state){
    var self = this;
    var rootUrl = 'https://arkadium-api.herokuapp.com';

    this.start = 0;

    this.getMovie = function() {
      return $http({
        url: `${rootUrl}/questions/${self.start}`,
        method: 'GET'
      })
      .then(function(response) {
        console.log(response);
      })
    }

  }); //controller closure
})()
