angular.module('missionsApp', ['ui.bootstrap'])
  .controller('MainController', ['$scope', function($scope){

    $scope.slides = [
    {
      title: 'hola mundo!',
      text: 'lorem ipsum ikirulakd',
      image: 'http://placekitten.com/g/1200/250'
    },{
      title: 'Otro gatito!',
      text: 'lorem ipsum ikirulakd',
      image: 'http://placekitten.com/g/1200/250'
    }
    ];

  }]);
