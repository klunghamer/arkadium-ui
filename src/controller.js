(function(){
  angular
  .module('MovieApp')
  .controller('MovieController', function($http, $state){
    var self = this;
    var rootUrl = 'https://arkadium-api.herokuapp.com';

    this.start = 1;

    $http.get(`${rootUrl}/questions/0`)
    .then(function(response) {
      self.title = response.data.question.title;
      var release_date = response.data.question.release_date;
      self.year = Number(release_date.slice(0,4));
      var image = response.data.question.backdrop_path;
      self.image = image.slice(1);
      console.log(self.image);
    })

    this.guessYear = function(year) {
      year = Number(year);
      $state.go('results', {url: '/results'})
      if (year === self.year) {
        self.result = `You're Correct! The answer is ${self.year}!`;
      } else {
        self.result = `Incorrect... the answer is ${self.year}.`;
      }
    }

    this.newQuestion = function() {
      return $http({
        url: `${rootUrl}/questions/${self.start}`,
        method: 'GET'
      })
      .then(function(response) {
        console.log(response);
        self.title = response.data.question.title;
        var release_date = response.data.question.release_date;
        self.year = Number(release_date.slice(0,4));
        var image = response.data.question.backdrop_path;
        self.image = image.slice(1);
        self.start++;
        if (self.start > 19) {
          self.start = 1;
        }
      })
    }

  }); //controller closure
})()
