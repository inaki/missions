angular.module('missionsApp', ['ui.bootstrap'])
  .controller('MainController', ['$scope', function($scope){

    $scope.slides = [
    {
      title: 'hola mundo!',
      text: 'lorem ipsum ikirulakd',
      image: 'http://placekitten.com/1200/200'
    },{
      title: 'Otro gatito!',
      text: 'lorem ipsum ikirulakd',
      image: 'http://placekitten.com/1200/200'
    }
    ];

    $scope.missions = [
      {
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'codeforamerica'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'codeforde'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'oaklandjs'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'nodebots'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'jsgirls'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'nodeschool'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'git-it'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'csvconf'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'koa'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'promise'
      },{
        name: 'Trasnportation Data',
        intro: 'Data about transportation',
        description: 'lorem lakjfd ajf klaj fkja fj adfkadjflkj adlfkj adlkjf aldkjflakj flkajflkja f jadflkjadfkj aj fajdf ',
        image: 'binary'
      }
    ];

  }]);
